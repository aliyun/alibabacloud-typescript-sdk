// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopFingerprintResponseBodyDomainTopFp extends $dara.Model {
  domain?: string;
  fingerprinting?: string;
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
  domainTopFp?: DescribeDomainTopFingerprintResponseBodyDomainTopFp[];
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

