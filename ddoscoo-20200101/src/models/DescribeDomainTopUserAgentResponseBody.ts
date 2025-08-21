// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopUserAgentResponseBodyDomainTopUa extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The page views.
   * 
   * @example
   * 22121
   */
  pv?: number;
  /**
   * @remarks
   * The Base64-encoded user agent.
   * 
   * @example
   * TW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTYuMC40NjY0LjExMCACYWZhcmkvNTM3LjM2
   */
  userAgent?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pv: 'Pv',
      userAgent: 'UserAgent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pv: 'number',
      userAgent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopUserAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the user agents.
   */
  domainTopUa?: DescribeDomainTopUserAgentResponseBodyDomainTopUa[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTopUa: 'DomainTopUa',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopUa: { 'type': 'array', 'itemType': DescribeDomainTopUserAgentResponseBodyDomainTopUa },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopUa)) {
      $dara.Model.validateArray(this.domainTopUa);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

