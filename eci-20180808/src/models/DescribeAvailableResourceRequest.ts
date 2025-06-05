// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceRequestDestinationResource } from "./DescribeAvailableResourceRequestDestinationResource";
import { DescribeAvailableResourceRequestSpotResource } from "./DescribeAvailableResourceRequestSpotResource";


export class DescribeAvailableResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the resource that you want to query.
   * 
   * This parameter is required.
   */
  destinationResource?: DescribeAvailableResourceRequestDestinationResource;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ECS instance families.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/146965.html) operation to query the most recent list of regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about the preemptible instances that you want to query.
   */
  spotResource?: DescribeAvailableResourceRequestSpotResource;
  /**
   * @remarks
   * The zone ID of the ECS instance families.
   * 
   * This parameter is empty by default, which indicates that ECS instance families available in all zones in the specified region are queried.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationResource: 'DestinationResource',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      spotResource: 'SpotResource',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationResource: DescribeAvailableResourceRequestDestinationResource,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      spotResource: DescribeAvailableResourceRequestSpotResource,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.destinationResource && typeof (this.destinationResource as any).validate === 'function') {
      (this.destinationResource as any).validate();
    }
    if(this.spotResource && typeof (this.spotResource as any).validate === 'function') {
      (this.spotResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

