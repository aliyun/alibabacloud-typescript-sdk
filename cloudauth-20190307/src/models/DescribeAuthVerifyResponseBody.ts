// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuthVerifyResponseBodyResult extends $dara.Model {
  materialInfo?: string;
  /**
   * @example
   * spoofRiskResult：Y
   * spoofType：SCREEN_REMARK
   */
  spoofBackInfo?: string;
  /**
   * @example
   * spoofRiskResult：Y
   * spoofType：SCREEN_REMARK
   */
  spoofInfo?: string;
  /**
   * @example
   * 200
   */
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      spoofBackInfo: 'SpoofBackInfo',
      spoofInfo: 'SpoofInfo',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      spoofBackInfo: 'string',
      spoofInfo: 'string',
      subCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAuthVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  result?: DescribeAuthVerifyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: DescribeAuthVerifyResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

