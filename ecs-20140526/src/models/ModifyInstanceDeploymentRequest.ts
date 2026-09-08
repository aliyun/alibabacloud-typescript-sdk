// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance is associated with the dedicated host. Valid values:
   * 
   * - host: The instance is associated with the dedicated host. When an instance that has economical mode enabled is restarted after being stopped, the instance is still deployed on the original dedicated host.
   * 
   * - default: The instance is not associated with the dedicated host. When an instance that has economical mode enabled is restarted after being stopped, if the resources of the original dedicated host are insufficient, the instance can be migrated to another dedicated host in the automatic deployment resource pool.
   * 
   * Default value when migrating an instance from a shared host to a dedicated host: default.
   * 
   * @example
   * host
   */
  affinity?: string;
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   * 
   * @example
   * dc-bp67acfmxazb4ph****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host. You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) to query available dedicated hosts.
   * 
   * When you modify the host of an ECS instance (migrate the instance from a shared host to a dedicated host or between dedicated hosts):
   * - To migrate the instance to a specified dedicated host, you must specify this parameter.
   * - To migrate the instance to a dedicated host that is automatically selected by the system, you must set this parameter to empty and set the `Tenancy` parameter to host.
   * 
   * For more information about the automatic deployment feature, see [Features of dedicated hosts](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * dh-bp67acfmxazb4ph****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The group number of the instance in the deployment set when the deployment set uses the availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
   * 
   * > If you change the deployment set of an ECS instance and the deployment set uses the availability group strategy (`AvailablilityGroup`), the system automatically distributes ECS instances evenly across groups when this parameter is not specified. If you specify the same deployment set that the instance currently belongs to, the system also redistributes ECS instances evenly across groups.
   * 
   * @example
   * 3
   */
  deploymentSetGroupNo?: number;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * This parameter is required when you add an ECS instance to a deployment set or change the deployment set of an ECS instance.
   * 
   * > When you modify dedicated host-related parameters (`Tenancy`, `Affinity`, and `DedicatedHostId`), you cannot modify the deployment set at the same time.
   * 
   * @example
   * ds-bp67acfmxazb4ph****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully change the host when the instance is added to a deployment set. Valid values:
   *          
   * - true: Allows the operation. Allows restarting ECS instances in the Running or Stopped state. Stopped instances do not include pay-as-you-go ECS instances that have economical mode enabled.
   *     > If the specified ECS instance has local disks attached, the local disks are also forcefully replaced. This may cause data loss on the local disks during host replacement. Proceed with caution.
   * 
   * - false: Does not allow the operation. The instance is added to the deployment set only on the current host. This may cause the deployment set change to fail.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph***
   */
  instanceId?: string;
  /**
   * @remarks
   * The target instance type of the ECS instance. You can call [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) to query the most recent instance type list.
   * 
   * When you modify the host of an ECS instance, you can also change ECS instance type. The target instance type must match the specifications of the specified dedicated host. For more information, see [Dedicated host types](https://help.aliyun.com/document_detail/68564.html).
   * - To change ECS instance type, you must specify the dedicated host ID by setting the `DedicatedHostId` parameter.
   * - You cannot change ECS instance type when using the automatic deployment feature to migrate an ECS instance.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to stop ECS instance before migrating it to the destination dedicated host. Valid values:
   * 
   * - reboot: Stops ECS instance before migration.
   * 
   * - live: Migrates ECS instance without stopping it. In this case, you must specify the DedicatedHostId parameter. This value does not support changing ECS instance type while migrating ECS instance.
   * 
   * Default value: reboot.
   * 
   * @example
   * live
   */
  migrationType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to remove the selected instance from the selected deployment set. Valid values:
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * Default value: false.
   * 
   * > When this parameter is set to true, you must specify the InstanceId and DeploymentSetId that have an ownership relationship.
   * 
   * @example
   * false
   */
  removeFromDeploymentSet?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the instance is deployed on a dedicated host. Valid values: host. The instance is deployed only on a dedicated host.
   * 
   * @example
   * host
   */
  tenancy?: string;
  static names(): { [key: string]: string } {
    return {
      affinity: 'Affinity',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      force: 'Force',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      migrationType: 'MigrationType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      removeFromDeploymentSet: 'RemoveFromDeploymentSet',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tenancy: 'Tenancy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affinity: 'string',
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      deploymentSetGroupNo: 'number',
      deploymentSetId: 'string',
      force: 'boolean',
      instanceId: 'string',
      instanceType: 'string',
      migrationType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      removeFromDeploymentSet: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tenancy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

