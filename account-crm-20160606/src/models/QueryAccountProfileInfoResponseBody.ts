// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountProfileInfoResponseBodyProfileInfoCity extends $dara.Model {
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

export class QueryAccountProfileInfoResponseBodyProfileInfoDistrict extends $dara.Model {
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

export class QueryAccountProfileInfoResponseBodyProfileInfoProvince extends $dara.Model {
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

export class QueryAccountProfileInfoResponseBodyProfileInfo extends $dara.Model {
  accountAttr?: string;
  accountCertifyType?: string;
  activeNotSetMobile?: string;
  address?: string;
  address2?: string;
  address3?: string;
  address4?: string;
  address5?: string;
  address6?: string;
  alipayAccount?: string;
  alipayUid?: string;
  aliyunID?: string;
  aliyunPK?: string;
  authAlipay?: string;
  authDomainUserId?: string;
  b2bhid?: string;
  bankId?: string;
  bankName?: string;
  beiAnAuthCId?: string;
  beiAnIcpNumber?: string;
  beiAnMobile?: string;
  bindAlipayNo?: string;
  certType?: string;
  certifiedFrom?: string;
  certifiedTime?: string;
  city?: QueryAccountProfileInfoResponseBodyProfileInfoCity;
  contactMethod?: string;
  createTime?: string;
  district?: QueryAccountProfileInfoResponseBodyProfileInfoDistrict;
  eid?: string;
  email?: string;
  fax?: string;
  firstName?: string;
  fyl?: string;
  havanaId?: string;
  head?: string;
  headUrl?: string;
  IDNumber?: string;
  isBankIDAuth?: string;
  isCertified?: string;
  lastName?: string;
  mobile?: string;
  nationalityCode?: string;
  nickName?: string;
  own?: string;
  phone?: string;
  postCode?: string;
  preferredLanguage?: string;
  processingEnterpriseCertify?: boolean;
  province?: QueryAccountProfileInfoResponseBodyProfileInfoProvince;
  registerIP?: string;
  securityMobile?: string;
  securityQuestionExists?: boolean;
  selfServicingBusinessRegNum?: string;
  selfServicingIdentificationNum?: string;
  showNickName?: string;
  src?: string;
  taobaoAccount?: string;
  taobaoNickFromHavana?: string;
  tbhid?: string;
  trueName?: string;
  updateTime?: string;
  yahooEmail?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttr: 'AccountAttr',
      accountCertifyType: 'AccountCertifyType',
      activeNotSetMobile: 'ActiveNotSetMobile',
      address: 'Address',
      address2: 'Address2',
      address3: 'Address3',
      address4: 'Address4',
      address5: 'Address5',
      address6: 'Address6',
      alipayAccount: 'AlipayAccount',
      alipayUid: 'AlipayUid',
      aliyunID: 'AliyunID',
      aliyunPK: 'AliyunPK',
      authAlipay: 'AuthAlipay',
      authDomainUserId: 'AuthDomainUserId',
      b2bhid: 'B2bhid',
      bankId: 'BankId',
      bankName: 'BankName',
      beiAnAuthCId: 'BeiAnAuthCId',
      beiAnIcpNumber: 'BeiAnIcpNumber',
      beiAnMobile: 'BeiAnMobile',
      bindAlipayNo: 'BindAlipayNo',
      certType: 'CertType',
      certifiedFrom: 'CertifiedFrom',
      certifiedTime: 'CertifiedTime',
      city: 'City',
      contactMethod: 'ContactMethod',
      createTime: 'CreateTime',
      district: 'District',
      eid: 'Eid',
      email: 'Email',
      fax: 'Fax',
      firstName: 'FirstName',
      fyl: 'Fyl',
      havanaId: 'HavanaId',
      head: 'Head',
      headUrl: 'HeadUrl',
      IDNumber: 'IDNumber',
      isBankIDAuth: 'IsBankIDAuth',
      isCertified: 'IsCertified',
      lastName: 'LastName',
      mobile: 'Mobile',
      nationalityCode: 'NationalityCode',
      nickName: 'NickName',
      own: 'Own',
      phone: 'Phone',
      postCode: 'PostCode',
      preferredLanguage: 'PreferredLanguage',
      processingEnterpriseCertify: 'ProcessingEnterpriseCertify',
      province: 'Province',
      registerIP: 'RegisterIP',
      securityMobile: 'SecurityMobile',
      securityQuestionExists: 'SecurityQuestionExists',
      selfServicingBusinessRegNum: 'SelfServicingBusinessRegNum',
      selfServicingIdentificationNum: 'SelfServicingIdentificationNum',
      showNickName: 'ShowNickName',
      src: 'Src',
      taobaoAccount: 'TaobaoAccount',
      taobaoNickFromHavana: 'TaobaoNickFromHavana',
      tbhid: 'Tbhid',
      trueName: 'TrueName',
      updateTime: 'UpdateTime',
      yahooEmail: 'YahooEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttr: 'string',
      accountCertifyType: 'string',
      activeNotSetMobile: 'string',
      address: 'string',
      address2: 'string',
      address3: 'string',
      address4: 'string',
      address5: 'string',
      address6: 'string',
      alipayAccount: 'string',
      alipayUid: 'string',
      aliyunID: 'string',
      aliyunPK: 'string',
      authAlipay: 'string',
      authDomainUserId: 'string',
      b2bhid: 'string',
      bankId: 'string',
      bankName: 'string',
      beiAnAuthCId: 'string',
      beiAnIcpNumber: 'string',
      beiAnMobile: 'string',
      bindAlipayNo: 'string',
      certType: 'string',
      certifiedFrom: 'string',
      certifiedTime: 'string',
      city: QueryAccountProfileInfoResponseBodyProfileInfoCity,
      contactMethod: 'string',
      createTime: 'string',
      district: QueryAccountProfileInfoResponseBodyProfileInfoDistrict,
      eid: 'string',
      email: 'string',
      fax: 'string',
      firstName: 'string',
      fyl: 'string',
      havanaId: 'string',
      head: 'string',
      headUrl: 'string',
      IDNumber: 'string',
      isBankIDAuth: 'string',
      isCertified: 'string',
      lastName: 'string',
      mobile: 'string',
      nationalityCode: 'string',
      nickName: 'string',
      own: 'string',
      phone: 'string',
      postCode: 'string',
      preferredLanguage: 'string',
      processingEnterpriseCertify: 'boolean',
      province: QueryAccountProfileInfoResponseBodyProfileInfoProvince,
      registerIP: 'string',
      securityMobile: 'string',
      securityQuestionExists: 'boolean',
      selfServicingBusinessRegNum: 'string',
      selfServicingIdentificationNum: 'string',
      showNickName: 'string',
      src: 'string',
      taobaoAccount: 'string',
      taobaoNickFromHavana: 'string',
      tbhid: 'string',
      trueName: 'string',
      updateTime: 'string',
      yahooEmail: 'string',
    };
  }

  validate() {
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.district && typeof (this.district as any).validate === 'function') {
      (this.district as any).validate();
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

export class QueryAccountProfileInfoResponseBody extends $dara.Model {
  profileInfo?: QueryAccountProfileInfoResponseBodyProfileInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      profileInfo: 'ProfileInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profileInfo: QueryAccountProfileInfoResponseBodyProfileInfo,
      requestId: 'string',
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

