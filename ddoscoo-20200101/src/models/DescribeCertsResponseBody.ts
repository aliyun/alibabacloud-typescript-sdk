// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertsResponseBodyCerts extends $dara.Model {
  /**
   * @remarks
   * The global certificate ID, which is in the certificate ID-cn-hangzhou format. If the ID of the certificate is 123, CertIdentifier is 123-cn-hangzhou.
   * 
   * @example
   * 126345-ap-southeast-1
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The domain name that is associated with the certificate.
   * 
   * @example
   * www.aliyun.com
   */
  common?: string;
  /**
   * @remarks
   * Indicates whether the certificate is associated with the domain name. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  domainRelated?: boolean;
  /**
   * @remarks
   * The expiration date of the certificate. The value is a string.
   * 
   * @example
   * 2021-09-12
   */
  endDate?: string;
  /**
   * @remarks
   * The certificate ID.
   * 
   * @example
   * 81
   */
  id?: number;
  /**
   * @remarks
   * The certificate authority (CA) that issued the certificate.
   * 
   * @example
   * Symantec
   */
  issuer?: string;
  /**
   * @remarks
   * The name of the certificate.
   * 
   * @example
   * testcert
   */
  name?: string;
  /**
   * @remarks
   * The issuance date of the certificate. The value is a string.
   * 
   * @example
   * 2019-09-12
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      common: 'Common',
      domainRelated: 'DomainRelated',
      endDate: 'EndDate',
      id: 'Id',
      issuer: 'Issuer',
      name: 'Name',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      common: 'string',
      domainRelated: 'boolean',
      endDate: 'string',
      id: 'number',
      issuer: 'string',
      name: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate information about the website.
   */
  certs?: DescribeCertsResponseBodyCerts[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certs)) {
      $dara.Model.validateArray(this.certs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

