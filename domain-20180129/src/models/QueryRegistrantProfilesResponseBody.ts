// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile extends $dara.Model {
  /**
   * @remarks
   * The address of the domain name registrant.
   * 
   * @example
   * zhe jiang sheng hang zhou shi shi li qu shi li zhen shi li da sha 1001 hao
   */
  address?: string;
  /**
   * @remarks
   * The city where the domain name registrant is located, in English.
   * 
   * @example
   * hang zhou shi
   */
  city?: string;
  /**
   * @remarks
   * The code of the country or region where the domain name registrant is located, such as **CN** or **US**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The time when the registrant profile was created.
   * 
   * @example
   * 2019-02-18 10:46:47
   */
  createTime?: string;
  /**
   * @remarks
   * The certificate number.
   * 
   * @example
   * 4****************1
   */
  credentialNo?: string;
  /**
   * @remarks
   * The certificate type.
   * 
   * @example
   * YYZZ
   */
  credentialType?: string;
  /**
   * @remarks
   * Indicates whether the template is the default template. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * Default value: **false**.
   * 
   * @example
   * false
   */
  defaultRegistrantProfile?: boolean;
  /**
   * @remarks
   * The email address of the domain name registrant.
   * 
   * @example
   * 82106****@qq.com
   */
  email?: string;
  /**
   * @remarks
   * The status of the verification for the email address. Valid values:
   * 
   * *   **0**: not verified
   * *   **1**: verified
   * 
   * @example
   * 1
   */
  emailVerificationStatus?: number;
  params?: string;
  /**
   * @remarks
   * The postal code of the region where the domain name registrant is located.
   * 
   * @example
   * 310024
   */
  postalCode?: string;
  /**
   * @remarks
   * The province where the domain name registrant is located.
   * 
   * @example
   * zhe jiang
   */
  province?: string;
  /**
   * @remarks
   * The state of real-name verification for the domain name registrant. Valid values:
   * 
   * *   **FAILED**: Real-name verification for the domain name fails.
   * *   **SUCCEED**: Real-name verification for the domain name is successful.
   * *   **NONAUDIT**: Real-name verification for the domain name is not performed.
   * *   **AUDITING**: Real-name verification for the domain name is in progress.
   * 
   * @example
   * SUCCEED
   */
  realNameStatus?: string;
  /**
   * @remarks
   * The name of the domain name contact.
   * 
   * @example
   * li si
   */
  registrantName?: string;
  /**
   * @remarks
   * The name of the domain name registrant.
   * 
   * @example
   * li si
   */
  registrantOrganization?: string;
  /**
   * @remarks
   * The ID of the registrant profile.
   * 
   * @example
   * 1000001
   */
  registrantProfileId?: number;
  /**
   * @remarks
   * The type of the registrant profile. Valid values:
   * 
   * *   **common**: common profile.
   * *   **cnnic**: CNNIC profile.
   * 
   * >  Only the Alibaba Cloud international site (alibabacloud.com) supports CNNIC profiles. To register domain names provided by CNNIC such as the .cn and . domain names on the Alibaba Cloud international site, you must use a CNNIC profile. To register other domain names, use a common profile.
   * 
   * @example
   * common
   */
  registrantProfileType?: string;
  /**
   * @remarks
   * The type of the domain name registrant. Valid values:
   * 
   * *   **1**: individual.
   * *   **2**: enterprise.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  registrantType?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * Test domain name
   */
  remark?: string;
  /**
   * @remarks
   * The international dialing code of the country or region where the domain name contact is located. For example, the international dialing code of China is **86**.
   * 
   * @example
   * 86
   */
  telArea?: string;
  /**
   * @remarks
   * The extension of the phone number.
   * 
   * @example
   * 1234
   */
  telExt?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 1829756****
   */
  telephone?: string;
  /**
   * @remarks
   * The time when the registrant profile was updated.
   * 
   * @example
   * 2019-03-15 15:32:45
   */
  updateTime?: string;
  /**
   * @remarks
   * The address of the domain name registrant, in Chinese.
   */
  zhAddress?: string;
  /**
   * @remarks
   * The city where the domain name registrant is located, in Chinese.
   */
  zhCity?: string;
  /**
   * @remarks
   * The province where the domain name registrant is located, in Chinese.
   */
  zhProvince?: string;
  /**
   * @remarks
   * The Chinese name of the domain name contact.
   */
  zhRegistrantName?: string;
  /**
   * @remarks
   * The Chinese name of the domain name registrant.
   */
  zhRegistrantOrganization?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createTime: 'CreateTime',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      emailVerificationStatus: 'EmailVerificationStatus',
      params: 'Params',
      postalCode: 'PostalCode',
      province: 'Province',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      remark: 'Remark',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      updateTime: 'UpdateTime',
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
      createTime: 'string',
      credentialNo: 'string',
      credentialType: 'string',
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      emailVerificationStatus: 'number',
      params: 'string',
      postalCode: 'string',
      province: 'string',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      remark: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      updateTime: 'string',
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

export class QueryRegistrantProfilesResponseBodyRegistrantProfiles extends $dara.Model {
  registrantProfile?: QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile[];
  static names(): { [key: string]: string } {
    return {
      registrantProfile: 'RegistrantProfile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfile: { 'type': 'array', 'itemType': QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile },
    };
  }

  validate() {
    if(Array.isArray(this.registrantProfile)) {
      $dara.Model.validateArray(this.registrantProfile);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRegistrantProfilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number returned.
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  nextPage?: boolean;
  /**
   * @remarks
   * The number of entries returned on each page. Default value: **0**. Maximum value: **5000**.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the current page is preceded by a page. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  prePage?: boolean;
  /**
   * @remarks
   * The list of registrant profiles.
   */
  registrantProfiles?: QueryRegistrantProfilesResponseBodyRegistrantProfiles;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94053D79-7455-4F71-BF06-20EB2DEDE6BD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * >  This parameter indicates the total number of queried registrant profiles. If multiple registrant profiles are queried, the information about these profiles is returned in sequence by profile.
   * 
   * @example
   * 9
   */
  totalItemNum?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      registrantProfiles: 'RegistrantProfiles',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      registrantProfiles: QueryRegistrantProfilesResponseBodyRegistrantProfiles,
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(this.registrantProfiles && typeof (this.registrantProfiles as any).validate === 'function') {
      (this.registrantProfiles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

