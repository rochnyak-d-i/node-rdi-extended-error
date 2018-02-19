/** расширенная ошибка */
class ExtendedError extends Error {
  /**
   * конструктор
   *
   * @param {String}   message   Сообщение
   * @param {Function} stopTrace Конструктор
   *
   * @return {ExtendedError}
   */
  constructor(message='', stopTrace) {
    super(message);

    this.name = this.constructor.name;
    this.message = message;

    if (stopTrace === void 0) {
      stopTrace = this.constructor;
    }

    Error.captureStackTrace(this, stopTrace);
  }
}

module.exports = ExtendedError;
