// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  vpcAccessZone?: boolean;
  /**
   * @remarks
   * The type of the zone. Default value: `AvailabilityZone`. This value indicates Alibaba Cloud zones.
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

