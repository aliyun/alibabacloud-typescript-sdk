// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCertsResponseBodyCerts extends $dara.Model {
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 1976256736582
   */
  afterDate?: number;
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 1976256836582
   */
  beforeDate?: number;
  /**
   * @remarks
   * The globally unique ID of the certificate. The value follows a "\\<Certificate ID>-ap-southeast-1" format. For example, if the ID of the certificate is 123, the value of the CertIdentifier parameter is 123-ap-southeast-1.
   * 
   * @example
   * 123-ap-southeast-1
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The name of the certificate.
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
   * The domain that is supported by the certificate.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the certificate chain is complete. Valid values:
   * 
   * *   **true**
   * *   **false**
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

