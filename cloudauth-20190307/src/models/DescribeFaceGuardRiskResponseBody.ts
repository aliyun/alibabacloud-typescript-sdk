// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceGuardRiskResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * {
   *   "code": 200
   *   "badNet":false,
   *   "umid":"74e37355171ab62230063569350d368e",
   *   "fileTags":"basic_root,basic_hook",
   *   "queryCount":1,
   *   "querySessionCount":1,
   *   "queryUmidCount":1
   *   "platform":"Android"
   * }
   */
  riskExtends?: string;
  riskTags?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      riskExtends: 'string',
      riskTags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGuardRiskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  resultObject?: DescribeFaceGuardRiskResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DescribeFaceGuardRiskResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

