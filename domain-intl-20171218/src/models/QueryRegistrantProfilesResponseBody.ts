// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRegistrantProfilesResponseBodyRegistrantProfilesRegistrantProfile extends $dara.Model {
  address?: string;
  city?: string;
  country?: string;
  createTime?: string;
  defaultRegistrantProfile?: boolean;
  email?: string;
  emailVerificationStatus?: number;
  postalCode?: string;
  province?: string;
  realNameStatus?: string;
  registrantName?: string;
  registrantOrganization?: string;
  registrantProfileId?: number;
  registrantProfileType?: string;
  registrantType?: string;
  telArea?: string;
  telExt?: string;
  telephone?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      city: 'City',
      country: 'Country',
      createTime: 'CreateTime',
      defaultRegistrantProfile: 'DefaultRegistrantProfile',
      email: 'Email',
      emailVerificationStatus: 'EmailVerificationStatus',
      postalCode: 'PostalCode',
      province: 'Province',
      realNameStatus: 'RealNameStatus',
      registrantName: 'RegistrantName',
      registrantOrganization: 'RegistrantOrganization',
      registrantProfileId: 'RegistrantProfileId',
      registrantProfileType: 'RegistrantProfileType',
      registrantType: 'RegistrantType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telephone: 'Telephone',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      city: 'string',
      country: 'string',
      createTime: 'string',
      defaultRegistrantProfile: 'boolean',
      email: 'string',
      emailVerificationStatus: 'number',
      postalCode: 'string',
      province: 'string',
      realNameStatus: 'string',
      registrantName: 'string',
      registrantOrganization: 'string',
      registrantProfileId: 'number',
      registrantProfileType: 'string',
      registrantType: 'string',
      telArea: 'string',
      telExt: 'string',
      telephone: 'string',
      updateTime: 'string',
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
  currentPageNum?: number;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  registrantProfiles?: QueryRegistrantProfilesResponseBodyRegistrantProfiles;
  requestId?: string;
  totalItemNum?: number;
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

