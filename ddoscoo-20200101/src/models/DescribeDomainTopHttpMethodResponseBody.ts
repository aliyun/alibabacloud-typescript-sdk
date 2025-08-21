// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainTopHttpMethodResponseBodyDomainTopMethod extends $dara.Model {
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
   * The HTTP method.
   * 
   * @example
   * GET
   */
  httpMethod?: string;
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
      httpMethod: 'HttpMethod',
      pv: 'Pv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      httpMethod: 'string',
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

export class DescribeDomainTopHttpMethodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about top HTTP methods.
   */
  domainTopMethod?: DescribeDomainTopHttpMethodResponseBodyDomainTopMethod[];
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
      domainTopMethod: 'DomainTopMethod',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTopMethod: { 'type': 'array', 'itemType': DescribeDomainTopHttpMethodResponseBodyDomainTopMethod },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTopMethod)) {
      $dara.Model.validateArray(this.domainTopMethod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

