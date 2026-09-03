// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to retrieve the list of regions supported by Alibaba Cloud Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether the zone supports VPC access.
   */
  vpcAccessZone?: boolean;
  /**
   * @remarks
   * The type of zone to query. Default value: `AvailabilityZone`, which indicates a standard cloud zone.
   * 
   * @example
   * AvailabilityZone
   */
  zoneType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpcAccessZone: 'VpcAccessZone',
      zoneType: 'ZoneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpcAccessZone: 'boolean',
      zoneType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

