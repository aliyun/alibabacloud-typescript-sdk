// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEnterpriseInfoResponseBodyProfileInfoCity extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseInfoResponseBodyProfileInfoProvince extends $dara.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseInfoResponseBodyProfileInfo extends $dara.Model {
  alias?: string;
  aliyunPK?: string;
  auditStatus?: string;
  businessLicenseImgSrc?: string;
  businessLicenseNumber?: string;
  businessLicenseType?: string;
  certifiedFrom?: string;
  certifiedTime?: string;
  city?: QueryEnterpriseInfoResponseBodyProfileInfoCity;
  createTime?: string;
  detailAddress?: string;
  EInterpriseSize?: string;
  enterpriseEntity?: string;
  entityIDNumber?: string;
  extend?: string;
  fax?: string;
  name?: string;
  phone?: string;
  postalCode?: string;
  profile?: string;
  province?: QueryEnterpriseInfoResponseBodyProfileInfoProvince;
  updateTime?: string;
  years?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      aliyunPK: 'AliyunPK',
      auditStatus: 'AuditStatus',
      businessLicenseImgSrc: 'BusinessLicenseImgSrc',
      businessLicenseNumber: 'BusinessLicenseNumber',
      businessLicenseType: 'BusinessLicenseType',
      certifiedFrom: 'CertifiedFrom',
      certifiedTime: 'CertifiedTime',
      city: 'City',
      createTime: 'CreateTime',
      detailAddress: 'DetailAddress',
      EInterpriseSize: 'EInterpriseSize',
      enterpriseEntity: 'EnterpriseEntity',
      entityIDNumber: 'EntityIDNumber',
      extend: 'Extend',
      fax: 'Fax',
      name: 'Name',
      phone: 'Phone',
      postalCode: 'PostalCode',
      profile: 'Profile',
      province: 'Province',
      updateTime: 'UpdateTime',
      years: 'Years',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      aliyunPK: 'string',
      auditStatus: 'string',
      businessLicenseImgSrc: 'string',
      businessLicenseNumber: 'string',
      businessLicenseType: 'string',
      certifiedFrom: 'string',
      certifiedTime: 'string',
      city: QueryEnterpriseInfoResponseBodyProfileInfoCity,
      createTime: 'string',
      detailAddress: 'string',
      EInterpriseSize: 'string',
      enterpriseEntity: 'string',
      entityIDNumber: 'string',
      extend: 'string',
      fax: 'string',
      name: 'string',
      phone: 'string',
      postalCode: 'string',
      profile: 'string',
      province: QueryEnterpriseInfoResponseBodyProfileInfoProvince,
      updateTime: 'string',
      years: 'string',
    };
  }

  validate() {
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.province && typeof (this.province as any).validate === 'function') {
      (this.province as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEnterpriseInfoResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  profileInfo?: QueryEnterpriseInfoResponseBodyProfileInfo;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      profileInfo: 'ProfileInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      profileInfo: QueryEnterpriseInfoResponseBodyProfileInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.profileInfo && typeof (this.profileInfo as any).validate === 'function') {
      (this.profileInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

