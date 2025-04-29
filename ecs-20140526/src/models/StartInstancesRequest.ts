// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Valid values:
   * 
   * *   AllTogether: starts all ECS instances at the same time. If all ECS instances are started, a success message is returned. If an ECS instance fails to be started, all the specified instances fail to be started and an error message is returned.
   * *   SuccessFirst: separately starts each ECS instance. The response contains the operation results of each ECS instance.
   * 
   * Default value: AllTogether.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including required parameters, request syntax, and instance status. If the request fails the dry run, an error message is returned. If the request passes the dry run, `DRYRUN.SUCCESS` is returned.
   * 
   * > If you set `BatchOptimization` to `SuccessFirst` and `DryRun` to true, only `DRYRUN.SUCCESS` is returned regardless of whether the request passes the dry run.
   * 
   * *   false: performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The IDs of ECS instances. Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the ECS instance. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the most recent region list.
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
      batchOptimization: 'BatchOptimization',
      dryRun: 'DryRun',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      dryRun: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

