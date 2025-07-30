// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainDnsChallengeResponseBodyDomainDnsChallenge extends $dara.Model {
  /**
   * @remarks
   * The name of the DNS challenge record.
   * 
   * @example
   * _idaas-challenge.${domain}
   */
  dnsChallengeName?: string;
  /**
   * @remarks
   * The value of the DNS challenge record.
   * 
   * @example
   * exmple123xxx
   */
  dnsChallengeValue?: string;
  /**
   * @remarks
   * The type of the DNS challenge record.
   * 
   * @example
   * txt
   */
  dnsType?: string;
  static names(): { [key: string]: string } {
    return {
      dnsChallengeName: 'DnsChallengeName',
      dnsChallengeValue: 'DnsChallengeValue',
      dnsType: 'DnsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsChallengeName: 'string',
      dnsChallengeValue: 'string',
      dnsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainDnsChallengeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DNS challenge records.
   */
  domainDnsChallenge?: GetDomainDnsChallengeResponseBodyDomainDnsChallenge;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainDnsChallenge: 'DomainDnsChallenge',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainDnsChallenge: GetDomainDnsChallengeResponseBodyDomainDnsChallenge,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainDnsChallenge && typeof (this.domainDnsChallenge as any).validate === 'function') {
      (this.domainDnsChallenge as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

