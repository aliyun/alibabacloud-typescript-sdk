// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainResponseBodyDomainInfo extends $dara.Model {
  /**
   * @remarks
   * The CNAME that is assigned by WAF to the domain name.
   * 
   * @example
   * xxxxxwww.****.com
   */
  cname?: string;
  /**
   * @remarks
   * The domain name that you added to WAF.
   * 
   * @example
   * www.aliyundoc.com
   */
  domain?: string;
  /**
   * @remarks
   * The name of the protected object that is generated.
   * 
   * @example
   * www.aliyundoc.com-waf
   */
  domainId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      domainId: 'DomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      domainId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the domain name that is added.
   */
  domainInfo?: CreateDomainResponseBodyDomainInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainInfo: 'DomainInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainInfo: CreateDomainResponseBodyDomainInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainInfo && typeof (this.domainInfo as any).validate === 'function') {
      (this.domainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

