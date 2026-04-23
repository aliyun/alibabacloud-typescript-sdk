// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile extends $dara.Model {
  address?: string;
  city?: string;
  country?: string;
  createTime?: string;
  credentialNo?: string;
  credentialType?: string;
  defaultRegistrantProfile?: boolean;
  email?: string;
  emailVerificationStatus?: number;
  params?: string;
  postalCode?: string;
  province?: string;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantProfileType?: string;
  registrantType?: string;
  remark?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  updateTime?: string;
  zhAddress?: string;
  zhCity?: string;
  zhProvince?: string;
  zhRegistrantName?: string;
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

