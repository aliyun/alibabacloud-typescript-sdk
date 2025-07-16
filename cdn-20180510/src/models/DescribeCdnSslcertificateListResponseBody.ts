// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 9128192
   */
  certId?: number;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * yourCertName
   */
  certName?: string;
  /**
   * @remarks
   * The region ID of the certificate. Valid values: **cn-hangzhou** and **ap-southeast-1**. Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  certRegion?: string;
  /**
   * @remarks
   * The Common Name (CN) attribute of the certificate. In most cases, the CN is a domain name.
   * 
   * @example
   * example.com
   */
  common?: string;
  /**
   * @remarks
   * The fingerprint of the certificate.
   * 
   * @example
   * 933c6ddee95c9c41a40f9f50493d82be03ad87bf
   */
  fingerprint?: string;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * yourCertIssuer
   */
  issuer?: string;
  /**
   * @remarks
   * The time when the certificate was last modified. Unit: milliseconds.
   * 
   * @example
   * 1679896965
   */
  lastTime?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      certName: 'CertName',
      certRegion: 'CertRegion',
      common: 'Common',
      fingerprint: 'Fingerprint',
      issuer: 'Issuer',
      lastTime: 'LastTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      certName: 'string',
      certRegion: 'string',
      common: 'string',
      fingerprint: 'string',
      issuer: 'string',
      lastTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList extends $dara.Model {
  cert?: DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert[];
  static names(): { [key: string]: string } {
    return {
      cert: 'Cert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cert: { 'type': 'array', 'itemType': DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertListCert },
    };
  }

  validate() {
    if(Array.isArray(this.cert)) {
      $dara.Model.validateArray(this.cert);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSSLCertificateListResponseBodyCertificateListModel extends $dara.Model {
  /**
   * @remarks
   * Details about each certificate.
   */
  certList?: DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList;
  /**
   * @remarks
   * The number of certificates.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: an integer from 1 to 1000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      certList: 'CertList',
      count: 'Count',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certList: DescribeCdnSSLCertificateListResponseBodyCertificateListModelCertList,
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(this.certList && typeof (this.certList as any).validate === 'function') {
      (this.certList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSSLCertificateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   */
  certificateListModel?: DescribeCdnSSLCertificateListResponseBodyCertificateListModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E9D3257A-1B7C-414C-90C1-8D07AC47BCAC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateListModel: 'CertificateListModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateListModel: DescribeCdnSSLCertificateListResponseBodyCertificateListModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.certificateListModel && typeof (this.certificateListModel as any).validate === 'function') {
      (this.certificateListModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

