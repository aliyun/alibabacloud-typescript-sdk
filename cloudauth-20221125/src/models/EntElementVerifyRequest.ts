// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntElementVerifyRequest extends $dara.Model {
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
   * Type of enterprise element verification.
   * - ENT_2META: Two elements
   * - ENT_3META: Three elements
   * - ENT_4META: Four elements
   * 
   * @example
   * ENT_2META
   */
  infoVerifyType?: string;
  /**
   * @remarks
   * Legal representative\\"s ID number. Required for the four-element scenario.
   * 
   * @example
   * 370105*****3892
   */
  legalPersonCertNo?: string;
  /**
   * @remarks
   * Legal representative\\"s name. Required for three-element and four-element scenarios.
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
   * A unique business identifier defined by the merchant for subsequent troubleshooting. It supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure uniqueness.
   * 
   * @example
   * 32198****193000
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Merchant-side user ID. Supports a combination of letters and numbers, with a maximum length of 32 characters.
   * 
   * @example
   * 432***421
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Scene code. Supports a combination of letters, numbers, and underscores, with a maximum length of 32 characters.
   * 
   * @example
   * withdraw
   */
  sceneCode?: string;
  /**
   * @remarks
   * Whether user authorization is obtained.
   * - 1: Authorized
   * - 0: Not authorized
   * 
   * @example
   * 1
   */
  userAuthorization?: string;
  static names(): { [key: string]: string } {
    return {
      entName: 'EntName',
      infoVerifyType: 'InfoVerifyType',
      legalPersonCertNo: 'LegalPersonCertNo',
      legalPersonName: 'LegalPersonName',
      licenseNo: 'LicenseNo',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      sceneCode: 'SceneCode',
      userAuthorization: 'UserAuthorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entName: 'string',
      infoVerifyType: 'string',
      legalPersonCertNo: 'string',
      legalPersonName: 'string',
      licenseNo: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
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

