// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCertificateResponseBodyResultDCV extends $dara.Model {
  id?: string;
  key?: string;
  status?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      status: 'Status',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      status: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponseBodyResult extends $dara.Model {
  applyCode?: number;
  applyMessage?: string;
  casId?: string;
  commonName?: string;
  createTime?: string;
  DCV?: GetCertificateResponseBodyResultDCV[];
  fingerprintSha256?: string;
  id?: string;
  issuer?: string;
  issuerCN?: string;
  keyServerId?: string;
  name?: string;
  notAfter?: string;
  notBefore?: string;
  pubAlg?: string;
  region?: string;
  SAN?: string;
  serialNumber?: string;
  sigAlg?: string;
  status?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      applyCode: 'ApplyCode',
      applyMessage: 'ApplyMessage',
      casId: 'CasId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
      DCV: 'DCV',
      fingerprintSha256: 'FingerprintSha256',
      id: 'Id',
      issuer: 'Issuer',
      issuerCN: 'IssuerCN',
      keyServerId: 'KeyServerId',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubAlg: 'PubAlg',
      region: 'Region',
      SAN: 'SAN',
      serialNumber: 'SerialNumber',
      sigAlg: 'SigAlg',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyCode: 'number',
      applyMessage: 'string',
      casId: 'string',
      commonName: 'string',
      createTime: 'string',
      DCV: { 'type': 'array', 'itemType': GetCertificateResponseBodyResultDCV },
      fingerprintSha256: 'string',
      id: 'string',
      issuer: 'string',
      issuerCN: 'string',
      keyServerId: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubAlg: 'string',
      region: 'string',
      SAN: 'string',
      serialNumber: 'string',
      sigAlg: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DCV)) {
      $dara.Model.validateArray(this.DCV);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponseBody extends $dara.Model {
  certificate?: string;
  requestId?: string;
  result?: GetCertificateResponseBodyResult;
  siteId?: number;
  siteName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      requestId: 'string',
      result: GetCertificateResponseBodyResult,
      siteId: 'number',
      siteName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

