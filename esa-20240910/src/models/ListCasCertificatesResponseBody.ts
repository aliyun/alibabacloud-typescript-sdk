// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasCertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @remarks
   * The common name of the certificate.
   * 
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The certificate fingerprint.
   * 
   * @example
   * 0151xxxx
   */
  fingerprint?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 30000145
   */
  id?: number;
  /**
   * @remarks
   * The certificate issuer.
   * 
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * demo
   */
  name?: string;
  /**
   * @remarks
   * The expiration time of the certificate.
   * 
   * @example
   * 1708423200000
   */
  notAfter?: string;
  /**
   * @remarks
   * The region where the certificate resides. Supported values: **cn-hangzhou** and **ap-southeast-1**.
   * 
   * @example
   * ap-southeast-1
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      commonName: 'CommonName',
      fingerprint: 'Fingerprint',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      notAfter: 'NotAfter',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonName: 'string',
      fingerprint: 'string',
      id: 'number',
      issuer: 'string',
      name: 'string',
      notAfter: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCasCertificatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate list.
   */
  certificates?: ListCasCertificatesResponseBodyCertificates[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ListCasCertificatesResponseBodyCertificates },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

