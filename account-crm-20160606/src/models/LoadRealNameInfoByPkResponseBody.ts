// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadRealNameInfoByPkResponseBodyData extends $dara.Model {
  accountCertifyType?: string;
  authAlipay?: string;
  authAlipayDomain?: string;
  authAlipayLoginId?: string;
  authBeiAnCid?: string;
  authDomain?: string;
  certifiedFrom?: string;
  certifiedTime?: string;
  certifyStatus?: number;
  cicCertifyFrom?: number;
  cicCertifyProduct?: number;
  isBankIDAuth?: boolean;
  isCertified?: boolean;
  licenseNumber?: string;
  licenseType?: string;
  name?: string;
  newUnityRealNameAccount?: string;
  processingEnterpriseCertify?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountCertifyType: 'AccountCertifyType',
      authAlipay: 'AuthAlipay',
      authAlipayDomain: 'AuthAlipayDomain',
      authAlipayLoginId: 'AuthAlipayLoginId',
      authBeiAnCid: 'AuthBeiAnCid',
      authDomain: 'AuthDomain',
      certifiedFrom: 'CertifiedFrom',
      certifiedTime: 'CertifiedTime',
      certifyStatus: 'CertifyStatus',
      cicCertifyFrom: 'CicCertifyFrom',
      cicCertifyProduct: 'CicCertifyProduct',
      isBankIDAuth: 'IsBankIDAuth',
      isCertified: 'IsCertified',
      licenseNumber: 'LicenseNumber',
      licenseType: 'LicenseType',
      name: 'Name',
      newUnityRealNameAccount: 'NewUnityRealNameAccount',
      processingEnterpriseCertify: 'ProcessingEnterpriseCertify',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountCertifyType: 'string',
      authAlipay: 'string',
      authAlipayDomain: 'string',
      authAlipayLoginId: 'string',
      authBeiAnCid: 'string',
      authDomain: 'string',
      certifiedFrom: 'string',
      certifiedTime: 'string',
      certifyStatus: 'number',
      cicCertifyFrom: 'number',
      cicCertifyProduct: 'number',
      isBankIDAuth: 'boolean',
      isCertified: 'boolean',
      licenseNumber: 'string',
      licenseType: 'string',
      name: 'string',
      newUnityRealNameAccount: 'string',
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

export class LoadRealNameInfoByPkResponseBody extends $dara.Model {
  code?: string;
  data?: LoadRealNameInfoByPkResponseBodyData;
  msg?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: LoadRealNameInfoByPkResponseBodyData,
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

