// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpSetsRequestIpSets extends $dara.Model {
  /**
   * @remarks
   * The new bandwidth that you want to allocate to the acceleration regions. Unit: Mbit/s.
   * 
   * You must allocate at least 2 Mbit/s of bandwidth to each acceleration region. You can specify the bandwidth for up to 100 acceleration regions.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  bandwidth?: number;
  /**
   * @remarks
   * The IDs of the acceleration regions that you want to modify.
   * 
   * You can specify the IDs of up to 100 acceleration regions.
   * 
   * This parameter is required.
   * 
   * @example
   * ips-bp11c9mpphtb1xkds****
   */
  ipSetId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      ipSetId: 'IpSetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      ipSetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIpSetsRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration regions.
   * 
   * This parameter is required.
   */
  ipSets?: UpdateIpSetsRequestIpSets[];
  /**
   * @remarks
   * The region ID of the Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipSets: 'IpSets',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipSets: { 'type': 'array', 'itemType': UpdateIpSetsRequestIpSets },
      regionId: 'string',
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

