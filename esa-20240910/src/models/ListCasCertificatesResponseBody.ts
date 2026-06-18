// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasCertificatesResponseBodyCertificates extends $dara.Model {
  /**
   * @example
   * example.com
   */
  commonName?: string;
  /**
   * @example
   * 0151xxxx
   */
  fingerprint?: string;
  /**
   * @example
   * 30000145
   */
  id?: number;
  /**
   * @example
   * DigiCert
   */
  issuer?: string;
  /**
   * @example
   * demo
   */
  name?: string;
  /**
   * @example
   * 1708423200000
   */
  notAfter?: string;
  /**
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
  certificates?: ListCasCertificatesResponseBodyCertificates[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  /**
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

