// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopRefererResponseBodyDomainTopReferer } from "./DescribeDomainTopRefererResponseBodyDomainTopReferer";


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

