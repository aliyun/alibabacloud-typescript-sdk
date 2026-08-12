// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceInstanceCertsResponseBodyCerts extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the certificate. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1708415521211
   */
  afterDate?: number;
  /**
   * @remarks
   * The issuance time of the certificate. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1708415521211
   */
  beforeDate?: number;
  /**
   * @remarks
   * The global certificate ID, which is in the format of certificate ID + "-cn-hangzhou". For example, if the certificate ID is 123, the CertIdentifier is "123-cn-hangzhou".
   * 
   * @example
   * 123-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * waf-cert-name
   */
  certName?: string;
  /**
   * @remarks
   * The common name (CN).
   * 
   * @example
   * www.aliyundemo.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name supported by the certificate.
   * 
   * @example
   * waf.aliyundemo.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the certificate chain is complete.
   * 
   * @example
   * true
   */
  isChainCompleted?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterDate: 'AfterDate',
      beforeDate: 'BeforeDate',
      certIdentifier: 'CertIdentifier',
      certName: 'CertName',
      commonName: 'CommonName',
      domain: 'Domain',
      isChainCompleted: 'IsChainCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDate: 'number',
      beforeDate: 'number',
      certIdentifier: 'string',
      certName: 'string',
      commonName: 'string',
      domain: 'string',
      isChainCompleted: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceInstanceCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate results.
   */
  certs?: DescribeResourceInstanceCertsResponseBodyCerts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-***-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certs: 'Certs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certs: { 'type': 'array', 'itemType': DescribeResourceInstanceCertsResponseBodyCerts },
      requestId: 'string',
      totalCount: 'number',
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

