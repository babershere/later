/**
* Second Constraint (s)
* (c) 2013 Bill, BunKat LLC.
*
* Definition for a second constraint type.
*
* Later is freely distributable under the MIT license.
* For all details and documentation:
*     http://github.com/bunkat/later
*/
later.second = later.s = {

  /**
  * The second value of the specified date.
  *
  * @param {Date} d: The date to calculate the value of
  */
  value: function(d) {
    return d.s || (d.s = later.option.UTC ? d.getUTCSeconds() : d.getSeconds());
  },

  /**
  * The minimum and maximum valid second values.
  */
  extent: function() {
    return [0, 59];
  },

  /**
  * The start of the second of the specified date.
  *
  * @param {Date} d: The specified date
  */
  start: function(d) {
    return d;
  },

  /**
  * The end of the second of the specified date.
  *
  * @param {Date} d: The specified date
  */
  end: function(d) {
    return d;
  },

  /**
  * Returns the start of the next instance of the second value indicated.
  *
  * @param {Date} d: The starting date
  * @param {int} val: The desired value
  */
  next: function(d, val) {
    return later.date.next(
      later.Y.val(d),
      later.M.val(d),
      later.D.val(d),
      later.h.val(d),
      later.m.val(d) + (val < later.s.val(d) ? 1 : 0),
      val);
  },

  /**
  * Returns the end of the previous instance of the second value indicated.
  *
  * @param {Date} d: The starting date
  * @param {int} val: The desired value
  */
  prev: function(d, val, cache) {
    return later.date.prev(
      later.Y.val(d),
      later.M.val(d),
      later.D.val(d),
      later.h.val(d),
      later.m.val(d) + (val > later.s.val(d) ? -1 : 0),
      val);
  }

};