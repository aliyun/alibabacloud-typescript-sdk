// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultiContainerGroupMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. The value is a JSON array. You can specify up to 20 instance IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * ["eci-2zegym1qhbmdfr1s****","eci-2ze39w5svzj5ic34****"]
   */
  containerGroupIds?: string;
  /**
   * @remarks
   * The type of the monitoring data. Set the value to summary. This value indicates that records are returned.
   * 
   * @example
   * summary
   */
  metricType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the elastic container instances belong.
   * 
   * @example
   * rg-acfmzw2jz2z****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroupIds: 'ContainerGroupIds',
      metricType: 'MetricType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupIds: 'string',
      metricType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

