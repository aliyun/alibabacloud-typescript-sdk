// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntElementVerifyV2Request extends $dara.Model {
  /**
   * @remarks
   * Enterprise Name.
   * 
   * This parameter is required.
   * 
   * @example
   * ****有限公司
   */
  entName?: string;
  /**
   * @remarks
   * Type of enterprise element verification.
   * - ENT_2META: Two-element verification (enterprise name + unified social credit code)
   * - ENT_3META: Three-element verification (enterprise name + unified social credit code + legal person\\"s name or organization head)
   * - ENT_4META: Four-element verification (enterprise name + unified social credit code + legal person\\"s name or organization head + legal person\\"s ID number)
   * 
   * This parameter is required.
   * 
   * @example
   * ENT_2META
   */
  infoVerifyType?: string;
  /**
   * @remarks
   * Legal Person\\"s ID Number. Required for four-element scenarios.
   * 
   * @example
   * 1******************9
   */
  legalPersonCertNo?: string;
  /**
   * @remarks
   * Legal Person\\"s Name. Required for three-element and four-element scenarios.
   * 
   * @example
   * 张**
   */
  legalPersonName?: string;
  /**
   * @remarks
   * Unified Social Credit Code.
   * 
   * This parameter is required.
   * 
   * @example
   * 91330106673959****
   */
  licenseNo?: string;
  /**
   * @remarks
   * A unique business identifier defined by the merchant side, used for subsequent problem localization and troubleshooting. Supports a combination of letters and numbers, with a maximum length of 32 characters. Please ensure uniqueness.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * Merchant-side user ID. Supports a combination of letters and numbers, with a maximum length of 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * mch7x9a2b4c8d3e5f6g1h2i3j4k5****
   */
  merchantUserId?: string;
  /**
   * @remarks
   * Custom scene code, defined by the user to distinguish between different business scenarios. Supports a combination of letters, numbers, and underscores, with a maximum length of 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000006
   */
  sceneCode?: string;
  /**
   * @remarks
   * Whether user authorization has been obtained.
   * - 1: Authorization obtained
   * - 0: No authorization obtained
   * 
   * This parameter is required.
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

