// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EntElementVerifyPRORequest extends $dara.Model {
  entName?: string;
  /**
   * @example
   * ENT_4META
   */
  infoVerifyType?: string;
  /**
   * @example
   * 370105*****3892
   */
  legalPersonCertNo?: string;
  legalPersonName?: string;
  /**
   * @example
   * 91330106673959****
   */
  licenseNo?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @example
   * mch7x9a2b4c8d3e5f6g1h2i3j4k5****
   */
  merchantUserId?: string;
  /**
   * @example
   * 1000000006
   */
  sceneCode?: string;
  /**
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

