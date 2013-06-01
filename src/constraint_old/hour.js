// Hour constraint
later.constraint.h = function(values) {
  var inc, Y, M, D, h, range, date;

  function init(d, cache, reverse) {
    var UTC = later.option.UTC;
    Y = cache.Y || (cache.Y = UTC ? d.getUTCFullYear() : d.getFullYear()),
    M = cache.M || (cache.M = UTC ? d.getUTCMonth() : d.getMonth()),
    D = cache.D || (cache.D = UTC ? d.getUTCDate() : d.getDate()),
    h = cache.h || (cache.h = UTC ? d.getUTCHours() : d.getHours()),
    range = reverse ? later.range.prev : later.range.next;
    date = reverse ? later.date.prev : later.date.next;
  }

  return {

    // Returns the constraint value for a particular date, mostly useful for
    // constraints that aren't available on the Date object
    value: function(curDate) {
      init(curDate, {});
      return h;
    },

    // See if the current date is invalid, if it is invalid, return the first date
    // when it will become valid
    isInvalid: function(curDate, reverse, cache) {
      init(curDate || new Date(), cache || {}, reverse);
      if ((inc = range(h, values, 24)) !== h) {
        return date(Y, M, D, inc);
      }

      return false;
    },

    // See if the current date is valid, if it is valid, return the first
    // possible date when it will become invalid
    isValid: function(curDate, reverse, cache) {
      init(curDate || new Date(), cache || {}, reverse);
      if ((inc = later.range.invalid(h, values, 0, 23, 24, false, reverse)) !== false) {
        return inc === undefined ? undefined : date(Y, M, D, inc);
      }

      return false;
    }

  };
};