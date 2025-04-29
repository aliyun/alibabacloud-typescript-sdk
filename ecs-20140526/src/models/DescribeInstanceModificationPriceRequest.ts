// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceModificationPriceRequestSystemDisk } from "./DescribeInstanceModificationPriceRequestSystemDisk";
import { DescribeInstanceModificationPriceRequestDataDisk } from "./DescribeInstanceModificationPriceRequestDataDisk";


export class DescribeInstanceModificationPriceRequest extends $dara.Model {
  systemDisk?: DescribeInstanceModificationPriceRequestSystemDisk;
  /**
   * @remarks
   * The information about data disks.
   */
  dataDisk?: DescribeInstanceModificationPriceRequestDataDisk[];
  /**
   * @remarks
   * The ID of the instance for which you want to query pricing information for a configuration upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f2o4ldh8l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new instance type. We recommend that you call the [DescribeResourcesModification](https://help.aliyun.com/document_detail/66187.html) operation to query the instance types available for configuration upgrades in a specified zone.
   * 
   * > When you call the DescribeInstanceModificationPrice operation, you must specify at least one of the following parameters: `InstanceType` and `DataDisk.N.*`.
   * 
   * @example
   * ecs.g6e.large
   */
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      systemDisk: 'SystemDisk',
      dataDisk: 'DataDisk',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      systemDisk: DescribeInstanceModificationPriceRequestSystemDisk,
      dataDisk: { 'type': 'array', 'itemType': DescribeInstanceModificationPriceRequestDataDisk },
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

