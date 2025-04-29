// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CompanyThreeElementsVerificationResponseBodyDataDetailInfo } from "./CompanyThreeElementsVerificationResponseBodyDataDetailInfo";


export class CompanyThreeElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the enterprise.
   */
  detailInfo?: CompanyThreeElementsVerificationResponseBodyDataDetailInfo;
  /**
   * @remarks
   * The fields to be verified.
   */
  inconsistentData?: string[];
  /**
   * @remarks
   * The code of the verification result. Valid values:
   * 
   * *   0: The three elements belong to the same enterprise.
   * *   1: The three elements belong to the same enterprise, and the business status of the enterprise is abnormal.
   * *   2: The legal representative information cannot match the enterprise information.
   * *   3: The three elements do not belong to the same enterprise.
   * *   4: No information about the enterprise is found.
   * *   5: No information about the legal representative is found.
   * 
   * @example
   * 0
   */
  reasonCode?: number;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * *   true: The three elements belong to the same enterprise and the business status of the enterprise is Active.
   * *   false: The three elements do not belong to the same enterprise.
   * 
   * @example
   * true
   */
  verifyResult?: string;
  static names(): { [key: string]: string } {
    return {
      detailInfo: 'DetailInfo',
      inconsistentData: 'InconsistentData',
      reasonCode: 'ReasonCode',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailInfo: CompanyThreeElementsVerificationResponseBodyDataDetailInfo,
      inconsistentData: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'number',
      verifyResult: 'string',
    };
  }

  validate() {
    if(this.detailInfo && typeof (this.detailInfo as any).validate === 'function') {
      (this.detailInfo as any).validate();
    }
    if(Array.isArray(this.inconsistentData)) {
      $dara.Model.validateArray(this.inconsistentData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

