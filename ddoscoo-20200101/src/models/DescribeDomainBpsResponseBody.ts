// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainBpsResponseBodyDomainBps } from "./DescribeDomainBpsResponseBodyDomainBps";


export class DescribeDomainBpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The bandwidths.
   */
  domainBps?: DescribeDomainBpsResponseBodyDomainBps[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainBps: 'DomainBps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainBps: { 'type': 'array', 'itemType': DescribeDomainBpsResponseBodyDomainBps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainBps)) {
      $dara.Model.validateArray(this.domainBps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

