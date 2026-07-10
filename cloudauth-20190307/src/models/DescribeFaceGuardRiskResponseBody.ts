// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceGuardRiskResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for ID Verification.
   * 
   * @example
   * sha43d9cabd52d370d9f4cca9468f71e
   */
  certifyId?: string;
  /**
   * @remarks
   * The device risk probability predicted by the device assistant algorithm. A higher score indicates a higher device risk.
   * 
   * Value range: 0 to 100.
   * 
   * @example
   * 80
   */
  guardRiskScore?: number;
  /**
   * @remarks
   * The extended information in JSON format. The returned content is customized based on tenant requirements.
   * 
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
  /**
   * @remarks
   * The device risk labels.
   * 
   * - Multiple device risk labels are separated by commas (,), such as "ROOT,VPN,HOOK".
   * 
   * - For more information about device risk labels and their descriptions, see the Face Guard label description in the official documentation.
   * 
   * @example
   * ROOT,VPN,HOOK
   */
  riskTags?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      guardRiskScore: 'GuardRiskScore',
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      guardRiskScore: 'number',
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
   * @remarks
   * The response code. **200** indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
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
  /**
   * @remarks
   * The result information.
   */
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

