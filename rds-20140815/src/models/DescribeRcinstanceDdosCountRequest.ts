// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceDdosCountRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-beijing
   */
  ddosRegionId?: string;
  /**
   * @remarks
   * The type of the asset that is assigned a public IP address. Fixed value: **ecs**.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the region in which the RDS Custom instance resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosRegionId: 'DdosRegionId',
      instanceType: 'InstanceType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosRegionId: 'string',
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

