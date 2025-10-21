// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Log4jLogger extends $dara.Model {
  /**
   * @example
   * ERROR
   */
  loggerLevel?: string;
  /**
   * @example
   * StdOutErrConsoleAppender
   */
  loggerName?: string;
  static names(): { [key: string]: string } {
    return {
      loggerLevel: 'loggerLevel',
      loggerName: 'loggerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loggerLevel: 'string',
      loggerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

