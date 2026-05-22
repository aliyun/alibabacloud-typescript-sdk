// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesByRecordResponseBodyResultCertificates extends $dara.Model {
  casId?: string;
  commonName?: string;
  createTime?: string;
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
      casId: 'CasId',
      commonName: 'CommonName',
      createTime: 'CreateTime',
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
      casId: 'string',
      commonName: 'string',
      createTime: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesByRecordResponseBodyResult extends $dara.Model {
  applylingCount?: number;
  certificates?: ListCertificatesByRecordResponseBodyResultCertificates[];
  count?: number;
  recordName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applylingCount: 'ApplylingCount',
      certificates: 'Certificates',
      count: 'Count',
      recordName: 'RecordName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applylingCount: 'number',
      certificates: { 'type': 'array', 'itemType': ListCertificatesByRecordResponseBodyResultCertificates },
      count: 'number',
      recordName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesByRecordResponseBody extends $dara.Model {
  requestId?: string;
  result?: ListCertificatesByRecordResponseBodyResult[];
  siteId?: number;
  siteName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCertificatesByRecordResponseBodyResult },
      siteId: 'number',
      siteName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

