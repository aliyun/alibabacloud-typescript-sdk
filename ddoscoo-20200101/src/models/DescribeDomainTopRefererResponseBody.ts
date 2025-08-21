// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopRefererResponseBodyDomainTopReferer extends $dara.Model {
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
   * The page views.
   * 
   * @example
   * 257031
   */
  pv?: number;
  /**
   * @remarks
   * The Base64-encoded referer.
   * 
   * @example
   * aHR0cHM6Ly9zZXJ2aWNld2VjaGF0LmNvbS93eGY3ZDc5YWY0YzU4ZDH3NTEvNC9wYWdlLWZyYW1lLmh0bWw=
   */
  referer?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      pv: 'Pv',
      referer: 'Referer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      pv: 'number',
      referer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainTopRefererResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about top referers.
   */
  domainTopReferer?: DescribeDomainTopRefererResponseBodyDomainTopReferer[];
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
      domainTopReferer: 'DomainTopReferer',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopReferer: { 'type': 'array', 'itemType': DescribeDomainTopRefererResponseBodyDomainTopReferer },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopReferer)) {
      $dara.Model.validateArray(this.domainTopReferer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

