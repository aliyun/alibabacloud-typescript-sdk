// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopHttpMethodResponseBodyDomainTopMethod } from "./DescribeDomainTopHttpMethodResponseBodyDomainTopMethod";


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

