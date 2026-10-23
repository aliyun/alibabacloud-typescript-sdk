// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the instance is associated with the dedicated host. Valid values:
   * 
   * - host: Associated. When an instance for which the economical mode is enabled is stopped and then started, the instance is still deployed on the original dedicated host.
   * 
   * - default: Not associated. When an instance for which the economical mode is enabled is stopped and then started, if the resources on the original dedicated host are insufficient, the instance can be migrated to another dedicated host in the automatic deployment resource pool.
   * 
   * When an instance is migrated from a shared host to a dedicated host, the default value is default.
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
   * The ID of the dedicated host. You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query available dedicated hosts.
   * 
   * When you change the host of an ECS instance (that is, instance migration from a shared host to a dedicated host, or instance migration between dedicated hosts):
   * - To migrate the instance to a specified dedicated host, you must specify this parameter.
   * - To migrate the instance to a dedicated host automatically selected by the system, you must leave this parameter empty and set the `Tenancy` parameter to host.
   * 
   * For more information about the automatic deployment feature, see [Features of dedicated hosts](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * dh-bp67acfmxazb4ph****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The group number of the instance in the deployment set. This parameter is valid when the deployment set strategy of the deployment set to which the ECS instance is to be added or adjusted is the high availability strategy for deployment set groups (AvailabilityGroup). Valid values: 1 to 7.
   * 
   * > If you change the deployment set of an ECS instance and the deployment set strategy is `AvailabilityGroup`, the system automatically distributes ECS instances evenly among the groups when you do not specify this parameter. If you specify the current deployment set of the ECS instance, the system also redistributes the ECS instances evenly among the groups.
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
   * > When you modify the dedicated host-related parameters (`Tenancy`, `Affinity`, and `DedicatedHostId`), you cannot modify the deployment set at the same time.
   * 
   * @example
   * ds-bp67acfmxazb4ph****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly change the host of the instance when you adjust the deployment set. Valid values:
   *          
   * - true: Yes. ECS instances in the Running or Stopped state can be restarted. Stopped instances do not include pay-as-you-go ECS instances for which the economical mode is enabled.
   *     > If the specified ECS instance is equipped with local disks, the local disks are also forcibly changed. This may cause data loss on the local disks during the host change. Proceed with caution.
   * 
   * - false: No. The instance is added to the deployment set only on the current host. This may cause the deployment set change to fail.
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
   * The target instance type to which the ECS instance is to be changed. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent instance type list.
   * 
   * When you change the host of an ECS instance, you can also change ECS instance type. The target instance type must match the specifications of the specified dedicated host. For more information, see [Dedicated host types](https://help.aliyun.com/document_detail/68564.html).
   * - When you change ECS instance type, you must specify the dedicated host ID by setting the `DedicatedHostId` parameter.
   * - When you use the automatic deployment feature to migrate an ECS instance, you cannot change ECS instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to stop ECS instance before migrating it to the destination dedicated host. Valid values:
   * 
   * - reboot: Stop ECS instance before migration.
   * 
   * - live: Migrate ECS instance without stopping it. In this case, you must specify the DedicatedHostId parameter. This value does not support changing ECS instance type during the migration.
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
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
   * > When this parameter is set to true, you must specify the InstanceId and DeploymentSetId parameters that have an association.
   * 
   * @example
   * false
   */
  removeFromDeploymentSet?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether the instance is deployed on a dedicated host. Valid value: host. Only deployment on a dedicated host is supported.
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

