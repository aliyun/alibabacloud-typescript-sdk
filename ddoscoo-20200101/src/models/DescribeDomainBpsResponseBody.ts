// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainBpsResponseBodyDomainBps extends $dara.Model {
  /**
   * @remarks
   * The inbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  inBps?: number;
  /**
   * @remarks
   * The index number of the returned data.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The outbound bandwidth. Unit: bit/s.
   * 
   * @example
   * 0
   */
  outBps?: number;
  static names(): { [key: string]: string } {
    return {
      inBps: 'InBps',
      index: 'Index',
      outBps: 'OutBps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inBps: 'number',
      index: 'number',
      outBps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

