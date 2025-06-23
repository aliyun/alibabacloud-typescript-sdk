// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainH2FingerprintResponseBodyDomainH2Fp extends $dara.Model {
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
   * The HTTP/2 fingerprint.
   * 
   * @example
   * 532501bc316d02c8b1a007db76f2c796
   */
  h2Fingerprint?: string;
  /**
   * @remarks
   * The page views.
   * 
   * @example
   * 471755
   */
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

