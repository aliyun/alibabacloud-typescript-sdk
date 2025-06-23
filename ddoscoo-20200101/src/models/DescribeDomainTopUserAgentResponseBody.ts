// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainTopUserAgentResponseBodyDomainTopUa } from "./DescribeDomainTopUserAgentResponseBodyDomainTopUa";


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

