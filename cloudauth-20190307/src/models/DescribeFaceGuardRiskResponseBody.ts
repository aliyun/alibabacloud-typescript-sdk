// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceGuardRiskResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Unique real-person authentication identifier.
   * 
   * @example
   * sha43d9cabd52d370d9f4cca9468f71e
   */
  certifyId?: string;
  guardRiskScore?: number;
  /**
   * @remarks
   * Extended information, in JSON format. (Customized return based on tenant requirements)
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
   * Device risk tags.
   * 
   * - Multiple device risk tags are separated by commas (,). For example, “ROOT,VPN,HOOK”,
   * 
   * - For more information about device risk tags and their meanings, please refer to the official documentation on Face Guard Tag Descriptions.
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
   * Return code, **200** indicates successful response from the interface.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

