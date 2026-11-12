// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppUseTimeReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code returned; `0` indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * Error message returned; no message is returned upon success.
   * 
   * @example
   * 请求异常
   */
  retMsg?: string;
  /**
   * @remarks
   * Result of invoking the API  
   * 
   * - true indicates success  
   * - false indicates failure
   * 
   * @example
   * true
   */
  retValue?: boolean;
  static names(): { [key: string]: string } {
    return {
      retCode: 'RetCode',
      retMsg: 'RetMsg',
      retValue: 'RetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCode: 'number',
      retMsg: 'string',
      retValue: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

