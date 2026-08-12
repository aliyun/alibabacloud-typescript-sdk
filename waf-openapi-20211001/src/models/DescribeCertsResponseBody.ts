// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertsResponseBodyCerts extends $dara.Model {
  /**
   * @remarks
   * The expiration time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1976256736582
   */
  afterDate?: number;
  /**
   * @remarks
   * The effective period. The value is a UNIX timestamp in the format of milliseconds (ms).
   * 
   * @example
   * 1976256836582
   */
  beforeDate?: number;
  /**
   * @remarks
   * The global certificate ID, which is in the format of certificate ID + "-cn-hangzhou". For example, if the certificate ID is 123, the CertIdentifier is "123-cn-hangzhou".
   * 
   * @example
   * 12345-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The certificate name.
   * 
   * @example
   * waf1234
   */
  certName?: string;
  /**
   * @remarks
   * The common name.
   * 
   * @example
   * *.example.com
   */
  commonName?: string;
  /**
   * @remarks
   * The domain name supported by the certificate.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the certificate chain is complete. Valid values:
   * 
   * - **true**: The certificate chain is complete.
   * 
   * - **false**: The certificate chain is incomplete.
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

export class DescribeCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The certificate list.
   */
  certs?: DescribeCertsResponseBodyCerts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19511B0D-5AE0-5600-BB8A-DC2C8345****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
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
      certs: { 'type': 'array', 'itemType': DescribeCertsResponseBodyCerts },
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

