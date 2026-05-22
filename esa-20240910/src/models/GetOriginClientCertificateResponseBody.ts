// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginClientCertificateResponseBodyResult extends $dara.Model {
  commonName?: string;
  createTime?: string;
  fingerprintSha256?: string;
  hostnames?: string[];
  id?: string;
  issuer?: string;
  name?: string;
  notAfter?: string;
  notBefore?: string;
  pubkeyAlgorithm?: string;
  SAN?: string;
  serialNumber?: string;
  signatureAlgorithm?: string;
  status?: string;
  type?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      createTime: 'CreateTime',
      fingerprintSha256: 'FingerprintSha256',
      hostnames: 'Hostnames',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      pubkeyAlgorithm: 'PubkeyAlgorithm',
      SAN: 'SAN',
      serialNumber: 'SerialNumber',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      createTime: 'string',
      fingerprintSha256: 'string',
      hostnames: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      issuer: 'string',
      name: 'string',
      notAfter: 'string',
      notBefore: 'string',
      pubkeyAlgorithm: 'string',
      SAN: 'string',
      serialNumber: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOriginClientCertificateResponseBody extends $dara.Model {
  certificate?: string;
  requestId?: string;
  result?: GetOriginClientCertificateResponseBodyResult;
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
      result: GetOriginClientCertificateResponseBodyResult,
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

