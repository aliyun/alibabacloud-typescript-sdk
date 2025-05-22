// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusResponseBodyFullNetCheckJobStatusJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * Error record.
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` ****
   */
  errData?: string;
  /**
   * @remarks
   * Specific error message.
   * 
   * @example
   * get metric list fail
   */
  errMsg?: string;
  /**
   * @remarks
   * Type of error.
   * 
   * @example
   * ForeignKey
   */
  errType?: string;
  /**
   * @remarks
   * The level of the log.
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  static names(): { [key: string]: string } {
    return {
      errData: 'ErrData',
      errMsg: 'ErrMsg',
      errType: 'ErrType',
      logLevel: 'LogLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errData: 'string',
      errMsg: 'string',
      errType: 'string',
      logLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

