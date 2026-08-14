// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainH2FingerprintResponseBodyDomainH2Fp extends $dara.Model {
  domain?: string;
  h2Fingerprint?: string;
  pv?: number;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      h2Fingerprint: 'H2Fingerprint',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      h2Fingerprint: 'string',
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

export class DescribeDomainH2FingerprintResponseBody extends $dara.Model {
  domainH2Fp?: DescribeDomainH2FingerprintResponseBodyDomainH2Fp[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainH2Fp: 'DomainH2Fp',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainH2Fp: { 'type': 'array', 'itemType': DescribeDomainH2FingerprintResponseBodyDomainH2Fp },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainH2Fp)) {
      $dara.Model.validateArray(this.domainH2Fp);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

