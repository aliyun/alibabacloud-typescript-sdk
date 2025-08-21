// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopFingerprintResponseBodyDomainTopFp extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The fingerprint of the client.
   * 
   * @example
   * 8a374c9724582b14a4cfa58c8c9fb2bc
   */
  fingerprinting?: string;
  /**
   * @remarks
   * The page views.
   * 
   * @example
   * 22121
   */
  pv?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      fingerprinting: 'Fingerprinting',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      fingerprinting: 'string',
      pv: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopFingerprintResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the fingerprints of the clients.
   */
  domainTopFp?: DescribeDomainTopFingerprintResponseBodyDomainTopFp[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTopFp: 'DomainTopFp',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopFp: { 'type': 'array', 'itemType': DescribeDomainTopFingerprintResponseBodyDomainTopFp },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopFp)) {
      $dara.Model.validateArray(this.domainTopFp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

