// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForUpdatingRegistrantInfoByIdentityCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * Specific address.
   * 
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @remarks
   * City.
   * 
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * Country code, such as **CN** or **US**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * List of domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * alibabacloud.com
   */
  domainName?: string[];
  /**
   * @remarks
   * Mailbox.
   * 
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * Base64-encoded image of the identity verification document. Image requirements:
   * - Format must be **jpg** or **bmp**.
   * - Original image size must be between **55 KB and 1 MB**.
   * 
   * This parameter is required.
   * 
   * @example
   * h6UPhXz/ADP/2Q==
   */
  identityCredential?: string;
  /**
   * @remarks
   * Certificate number used for identity verification, such as an ID card number or Unified Social Credit Code.
   * 
   * This parameter is required.
   * 
   * @example
   * 5****************9
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * Identity verification certificate type. Valid values:
   * - **SFZ**: Identity card.
   * - **HZ**: Passport.
   * - **YYZZ**: Business license.
   * - **ORG**: Organization code certificate.
   * - **XYDM**: Unified Social Credit Code certificate.
   * - **TXZ**: Mainland Travel Permits for Hong Kong and Macao Residents.
   * 
   * If your certificate type is not listed above, see [Supported identity verification certificate types](https://help.aliyun.com/document_detail/72209.html) for valid values of other certificate types.
   * 
   * > You must select the certificate type that matches the document you are submitting.
   * 
   * This parameter is required.
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Postal code.
   * 
   * @example
   * 123456
   */
  postalCode?: string;
  /**
   * @remarks
   * Province.
   * 
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @remarks
   * Contact name.
   * 
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @remarks
   * Registrant organization name.
   * 
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * Domain registrant type. Valid values:
   * - **1**: Individual.
   * - **2**: Organization.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * Telephone country code.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * Telephone extension number.
   * 
   * @example
   * 12345
   */
  telExt?: string;
  /**
   * @remarks
   * Telephone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @remarks
   * Whether to add a transfer-out prohibition restriction. This indicates whether modifying the registrant imposes a 60-day restriction on domain name transfer-out. Default value: **false**, which means transfer-out is not restricted.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  transferOutProhibited?: boolean;
  /**
   * @remarks
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * Chinese address.
   * 
   * @example
   * 朝阳区
   */
  zhAddress?: string;
  /**
   * @remarks
   * Chinese city name.
   * 
   * @example
   * 北京市
   */
  zhCity?: string;
  /**
   * @remarks
   * Chinese province name.
   * 
   * @example
   * 北京
   */
  zhProvince?: string;
  /**
   * @remarks
   * Chinese contact name.
   * 
   * @example
   * 测试
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * Chinese registrant organization name.
   * 
   * @example
   * 测试
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      domainName: 'DomainName',
      email: 'Email',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      transferOutProhibited: 'TransferOutProhibited',
      userClientIp: 'UserClientIp',
      zhAddress: 'ZhAddress',
      zhCity: 'ZhCity',
      zhProvince: 'ZhProvince',
      zhRegistrantName: 'ZhRegistrantName',
      zhRegistrantOrganization: 'ZhRegistrantOrganization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      transferOutProhibited: 'boolean',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

