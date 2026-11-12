// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoAppReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code. `0` indicates success.
   * 
   * @example
   * 0
   */
  retCode?: number;
  /**
   * @remarks
   * The returned error message. This field is not returned if the operation succeeded.
   * 
   * @example
   * 请求异常
   */
  retMsg?: string;
  /**
   * @remarks
   * The returned invocation result.
   * 
   * - true indicates success.
   * - false indicates failure.
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

