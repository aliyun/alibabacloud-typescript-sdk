// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainH2FingerprintResponseBodyDomainH2Fp } from "./DescribeDomainH2fingerprintResponseBodyDomainH2fp";


export class DescribeDomainH2FingerprintResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about top N HTTP/2 fingerprints.
   */
  domainH2Fp?: DescribeDomainH2FingerprintResponseBodyDomainH2Fp[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 112777CC-2AD6-46FC-A263-00B931406FCD
   */
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

