// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreCheckStatusResponseBodyAnalysisJobProgressLogs extends $dara.Model {
  /**
   * @remarks
   * Error message
   * 
   * @example
   * Please modify this object
   */
  errData?: string;
  /**
   * @remarks
   * Error message from DTS when a specific project encounters an error.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: Table \\"customer\\" already exists
   */
  errMsg?: string;
  /**
   * @remarks
   * Error type.
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
   * ERROR
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

