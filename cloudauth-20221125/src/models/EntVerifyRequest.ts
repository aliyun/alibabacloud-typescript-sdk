// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Receiving account, to assist in improving the risk assessment effect.
   * 
   * @example
   * 321324***38293
   */
  accountNo?: string;
  /**
   * @remarks
   * Enterprise name.
   * 
   * @example
   * ***有限公司
   */
  entName?: string;
  /**
   * @remarks
   * Enterprise element verification type, currently not supported.
   * 
   * @example
   * 无
   */
  infoVerifyType?: string;
  /**
   * @remarks
   * Legal person\\"s ID number.
   * 
   * @example
   * 370105*****3892
   */
  legalPersonCertNo?: string;
  /**
   * @remarks
   * Legal person\\"s mobile phone number.
   * 
   * @example
   * 1300***53
   */
  legalPersonMobile?: string;
  /**
   * @remarks
   * Legal person\\"s name.
   * 
   * @example
   * 张**
   */
  legalPersonName?: string;
  /**
   * @remarks
   * Business license number.
   * 
   * @example
   * 32132***328932
   */
  licenseNo?: string;
  /**
   * @remarks
   * A unique business identifier defined by the merchant, used for subsequent problem localization and troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure its uniqueness.
   * 
   * @example
   * 32198****193000
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Merchant-side user ID. It supports a combination of letters and numbers, with a maximum length of 32 characters.
   * 
   * @example
   * 432***421
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Enterprise risk verification model version, required when RiskVerifyType is not empty. Currently supported:
   * 
   * - BASIC: Basic version
   * 
   * @example
   * BASIC
   */
  riskModelVersion?: string;
  /**
   * @remarks
   * Enterprise risk verification type, at least one of InfoVerifyType or this must be selected. Currently supported:
   * 
   * - BUSINESS_ANTIFRAUD
   * 
   * @example
   * BUSINESS_ANTIFRAUD
   */
  riskVerifyType?: string;
  /**
   * @remarks
   * Scene code.
   * 
   * @example
   * withdraw
   */
  sceneCode?: string;
  /**
   * @remarks
   * Whether the user authorization is obtained.
   * 
   * - 1: Authorized
   * 
   * - 0: Not authorized
   * 
   * @example
   * 1
   */
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      accountNo: 'AccountNo',
      entName: 'EntName',
      infoVerifyType: 'InfoVerifyType',
      legalPersonCertNo: 'LegalPersonCertNo',
      legalPersonMobile: 'LegalPersonMobile',
      legalPersonName: 'LegalPersonName',
      licenseNo: 'LicenseNo',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      riskModelVersion: 'RiskModelVersion',
      riskVerifyType: 'RiskVerifyType',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNo: 'string',
      entName: 'string',
      infoVerifyType: 'string',
      legalPersonCertNo: 'string',
      legalPersonMobile: 'string',
      legalPersonName: 'string',
      licenseNo: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      riskModelVersion: 'string',
      riskVerifyType: 'string',
      sceneCode: 'string',
      userAuthorization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

