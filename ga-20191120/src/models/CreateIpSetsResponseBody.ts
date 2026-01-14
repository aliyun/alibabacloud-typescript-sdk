// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpSetsResponseBodyIpSets extends $dara.Model {
  /**
   * @remarks
   * The acceleration region ID.
   * 
   * @example
   * cn-qingdao
   */
  accelerateRegionId?: string;
  /**
   * @remarks
   * The bandwidth allocated to the acceleration region. Unit: **Mbit/s**.
   * 
   * @example
   * 2
   */
  bandwidth?: number;
  /**
   * @remarks
   * The acceleration region ID.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The line type of the EIP in the acceleration region.
   * 
   * @example
   * BGP
   */
  ispType?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateRegionId: 'AccelerateRegionId',
      bandwidth: 'Bandwidth',
      ipSetId: 'IpSetId',
      ispType: 'IspType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateRegionId: 'string',
      bandwidth: 'number',
      ipSetId: 'string',
      ispType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIpSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The GA instance ID.
   * 
   * @example
   * ga-bp1yeeq8yfoyszmq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The details about the acceleration regions.
   */
  ipSets?: CreateIpSetsResponseBodyIpSets[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F4B6A4A-C89E-489E-BAF1-52777EE148EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      ipSets: 'IpSets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      ipSets: { 'type': 'array', 'itemType': CreateIpSetsResponseBodyIpSets },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipSets)) {
      $dara.Model.validateArray(this.ipSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

