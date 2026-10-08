// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRegistrantProfileRealNameVerificationRequest extends $dara.Model {
  /**
   * @remarks
   * Detailed address (in English).  
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * chao yang qu
   */
  address?: string;
  /**
   * @remarks
   * City (in English).  
   * 
   * > This parameter is active and required only when the **RegistrantProfileId** parameter is not provided. If this parameter is not provided, domain name registration will fail.
   * 
   * @example
   * bei jing shi
   */
  city?: string;
  /**
   * @remarks
   * Country code, such as **CN**.
   * 
   * > This parameter is active and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * Email address.  
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * Base64-encoded image of the identity verification document. Image requirements:  
   * - Format must be **jpg** or **bmp**.  
   * - Original image size must be between **55 KB and 1 MB**.
   * 
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @remarks
   * Certificate number for identity verification.
   * 
   * @example
   * 4111111111111110**
   */
  identityCredentialNo?: string;
  /**
   * @remarks
   * Type of certificate used for identity verification. Valid values:  
   * - **SFZ**: Identity card.  
   * - **HZ**: Passport.  
   * - **YYZZ**: Business license.  
   * - **ORG**: Organization code certificate.  
   * - **XYDM**: Unified Social Credit Code certificate.  
   * - **TXZ**: Mainland Travel Permits for Hong Kong and Macao Residents.  
   * 
   * > For more certificate types, see [Supported Certificate Types for Identity Verification](https://help.aliyun.com/document_detail/72209.html).
   * 
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:  
   * - **zh**: Chinese  
   * - **en**: English  
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
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * 1234567
   */
  postalCode?: string;
  /**
   * @remarks
   * Province (in English).  
   * 
   * > This parameter is active and required only when the **RegistrantProfileId** parameter is not provided. If this parameter is not provided, domain name registration will fail.
   * 
   * @example
   * bei jing
   */
  province?: string;
  /**
   * @remarks
   * Domain name contact (in English).  
   * 
   * > This parameter is active and required only when the **RegistrantProfileId** parameter is not provided. If this parameter is not provided, domain name registration will fail.
   * 
   * @example
   * ce shi
   */
  registrantName?: string;
  /**
   * @remarks
   * Registrant name (in English).
   * 
   * > This parameter is active and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * ce shi
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * ID of the registrant profile template to be saved.  
   * 
   * The system automatically generates this ID after a registrant profile is successfully created. You can invoke the [QueryRegistrantProfiles](https://help.aliyun.com/document_detail/67701.html) API to query the registrant profile ID.
   * 
   * @example
   * 1234567
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * Templatetype. Valid values:  
   * - **common**: General template.  
   * - **cnnic**: CNNIC template.  
   * 
   * > The CNNIC template is supported only on the Alibaba Cloud international site (alibabacloud.com). Domains under the CNNIC registry, such as ".cn" and ".中国", registered on the Alibaba Cloud international site must use the CNNIC template. Other domains must use the general template.
   * 
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @remarks
   * Type of the registrant. Valid values:  
   * - **1**: Individual.  
   * - **2**: Enterprise or organization.  
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * Telephone country code.
   * 
   * > For example, the telephone country code for China is **86**.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * Extension number.
   * 
   * > This parameter is active and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @remarks
   * Telephone number.  
   * 
   * > This parameter is available and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * 12345678
   */
  telephone?: string;
  /**
   * @remarks
   * User IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  /**
   * @remarks
   * Full address (in Chinese).
   * 
   * > This parameter applies only to the China site (aliyun.com). It is active and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * 朝阳区
   */
  zhAddress?: string;
  /**
   * @remarks
   * City (in Chinese).  
   * 
   * > This parameter applies only to the China site (aliyun.com). It is active and required only when the **RegistrantProfileId** parameter is not provided. If this parameter is not provided, domain name registration will fail.
   * 
   * @example
   * 北京市
   */
  zhCity?: string;
  /**
   * @remarks
   * Province (in Chinese).  
   * 
   * > This parameter applies only to the China site (aliyun.com). It is available and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
   * 
   * @example
   * 北京
   */
  zhProvince?: string;
  /**
   * @remarks
   * Domain name contact (in Chinese).  
   * 
   * > This parameter applies only to the China site (aliyun.com). It is active and required only when the **RegistrantProfileId** parameter is not provided. If this parameter is not provided, domain name registration will fail.
   * 
   * @example
   * 测试
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * Registrant name (in Chinese).
   * 
   * > This parameter applies only to the China site (aliyun.com). It is active and required only when the **RegistrantProfileId** parameter is not provided. Failure to provide it will cause domain registration to fail.
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
      email: 'Email',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      lang: 'Lang',
      postalCode: 'PostalCode',
      province: 'Province',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
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
      email: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      lang: 'string',
      postalCode: 'string',
      province: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      userClientIp: 'string',
      zhAddress: 'string',
      zhCity: 'string',
      zhProvince: 'string',
      zhRegistrantName: 'string',
      zhRegistrantOrganization: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

