// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountRealNameInfoResponseBodyProfileInfo extends $dara.Model {
  accountCertifyType?: string;
  authAlipay?: string;
  authBeiAnCid?: string;
  authDomain?: string;
  certifiedFrom?: string;
  certifiedTime?: string;
  isBankIDAuth?: string;
  isCertified?: string;
  licenseNumber?: string;
  licenseType?: string;
  name?: string;
  processingEnterpriseCertify?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountCertifyType: 'AccountCertifyType',
      authAlipay: 'AuthAlipay',
      authBeiAnCid: 'AuthBeiAnCid',
      authDomain: 'AuthDomain',
      certifiedFrom: 'CertifiedFrom',
      certifiedTime: 'CertifiedTime',
      isBankIDAuth: 'IsBankIDAuth',
      isCertified: 'IsCertified',
      licenseNumber: 'LicenseNumber',
      licenseType: 'LicenseType',
      name: 'Name',
      processingEnterpriseCertify: 'ProcessingEnterpriseCertify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCertifyType: 'string',
      authAlipay: 'string',
      authBeiAnCid: 'string',
      authDomain: 'string',
      certifiedFrom: 'string',
      certifiedTime: 'string',
      isBankIDAuth: 'string',
      isCertified: 'string',
      licenseNumber: 'string',
      licenseType: 'string',
      name: 'string',
      processingEnterpriseCertify: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAccountRealNameInfoResponseBody extends $dara.Model {
  profileInfo?: QueryAccountRealNameInfoResponseBodyProfileInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      profileInfo: 'ProfileInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profileInfo: QueryAccountRealNameInfoResponseBodyProfileInfo,
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

