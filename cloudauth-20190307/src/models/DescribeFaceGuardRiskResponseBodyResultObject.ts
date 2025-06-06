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

