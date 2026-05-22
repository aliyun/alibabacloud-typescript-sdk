// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesResponseBodyResultDCV extends $dara.Model {
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

export class ListCertificatesResponseBodyResult extends $dara.Model {
  applyCode?: number;
  applyMessage?: string;
  casId?: string;
  commonName?: string;
  createTime?: string;
  DCV?: ListCertificatesResponseBodyResultDCV[];
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
      DCV: { 'type': 'array', 'itemType': ListCertificatesResponseBodyResultDCV },
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

export class ListCertificatesResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  result?: ListCertificatesResponseBodyResult[];
  siteId?: number;
  siteName?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      siteId: 'SiteId',
      siteName: 'SiteName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCertificatesResponseBodyResult },
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

