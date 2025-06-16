// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that is associated with the next hop.
   * 
   * @example
   * vpc-bp1t36rn9l53iwbsf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the instance associated with the next hop. Valid values:
   * 
   * *   **VPC**: a VPC
   * *   **VBR**: a VBR
   * *   **PCONN**: an Express Connect circuit
   * 
   * @example
   * VPC
   */
  instanceType?: string;
  /**
   * @remarks
   * The region ID of the instance associated with the next hop. Valid values:
   * 
   * @example
   * ch-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

