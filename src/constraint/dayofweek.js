/**
* Day of Week Constraint (dw)
* (c) 2013 Bill, BunKat LLC.
*
* Definition for a day of week constraint type.
*
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://github.com/bunkat/later
*/
later.dayOfWeek = later.dw = {

  /**
  * The day of week value of the specified date.
  *
  * @param {Date} d: The date to calculate the value of
  */
  val: function(d) {
    return d.dw || (d.dw = later.option.UTC ? d.getUTCDay()+1 : d.getDay()+1);
  },

  /**
  * The minimum and maximum valid day of week values. Unlike the standard
  * Date object, Later day of week goes from 1 to 7.
  */
  extent: function() {
    return [1, 7];
  },

  /**
  * The start of the day of the specified date.
  *
  * @param {Date} d: The specified date
  */
  start: function(d) {
    return later.D.start(d);
  },

  /**
  * The end of the day of the specified date.
  *
  * @param {Date} d: The specified date
  */
  end: function(d) {
    return later.D.end(d);
  },

  /**
  * Returns the start of the next instance of the day of week value indicated.
  *
  * @param {Date} d: The starting date
  * @param {int} val: The desired value
  */
  next: function(d, val) {
    return later.date.next(
      later.Y.val(d),
      later.M.val(d),
      later.D.val(d) + (val - later.dw.val(d)) + (val < later.dw.val(d) ? 7 : 0));
  },

  /**
  * Returns the end of the previous instance of the day of week value indicated.
  *
  * @param {Date} d: The starting date
  * @param {int} val: The desired value
  */
  prev: function(d, val) {
    return later.date.prev(
      later.Y.val(d),
      later.M.val(d),
      later.D.val(d) + (val - later.dw.val(d)) + (val > later.dw.val(d) ? -7 : 0));
  }
};