// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmsQualificationRequestBusinessLicensePics extends $dara.Model {
  /**
   * @remarks
   * 证件图片标识的osskey
   * 
   * @example
   * 123456/111.png
   */
  licensePic?: string;
  /**
   * @remarks
   * 企业证件类型，businessLicense:营业执照;organizationCodeLicense:组织机构代码证;taxRegistrationLicense:税务登记证;socialCreditLicense:社会信用代码证书;newStyleBusinessLicense:三证合一;signLegalLicense:签名归属方的事业单位法人证书;otherLicense:其他类型执照证书
   * 
   * @example
   * businessLicense
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      licensePic: 'LicensePic',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licensePic: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

