// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to associate the instance with a dedicated host. Valid values:
   * 
   * *   host: associates the instance with a dedicated host. When you start a stopped instance in economical mode, the instance remains on its original dedicated host.
   * *   default: does not associate the instance with a dedicated host. When you start a stopped instance in economical mode, the instance can be automatically deployed to another dedicated host in the automatic deployment resource pool if the resources of the original dedicated host are insufficient.
   * 
   * If you want to migrate the instance from a shared host to a dedicated host, use the default value. Default value: default.
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
   * The ID of the destination dedicated host. You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query the most recent list of dedicated hosts.
   * 
   * When you migrate an instance from a shared host to a dedicated host or between dedicated hosts, take note of the following items:
   * 
   * *   To migrate the instance to a specific dedicated host, specify this parameter.
   * *   To migrate the instance to a system-selected dedicated host, leave this parameter empty and set `Tenancy` to host.
   * 
   * For information about the automatic deployment feature, see [Functions and features](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * dh-bp67acfmxazb4ph****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The number of the deployment set group in which to deploy the instance in the destination deployment set. This parameter is valid only when the destination deployment set uses the high availability group strategy (AvailabilityGroup). Valid values: 1 to 7.
   * 
   * > If you call this operation to deploy an instance to a deployment set that uses the high availability group strategy (`AvailablilityGroup`) and leave this parameter empty, the system evenly distributes instances among the deployment set groups in the deployment set. If you call this operation to change the deployment set of an instance and specify the current deployment set of the instance as the destination deployment set, the system evenly distributes instances again among the deployment set groups in the deployment set.
   * 
   * @example
   * 3
   */
  deploymentSetGroupNo?: number;
  /**
   * @remarks
   * The ID of the destination deployment set.
   * 
   * This parameter is required when you add an instance to a deployment set or change the deployment set of an instance.
   * 
   * > You cannot change the deployment set when you modify dedicated host configurations, including the `Tenancy`, `Affinity`, and `DedicatedHostId` parameters.
   * 
   * @example
   * ds-bp67acfmxazb4ph****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully change the host of the instance when the deployment set of the instance is changed. Valid values:
   * 
   * *   true: forcefully changes the host of the instance when the deployment set of the instance is changed. Hosts can be forcefully changed only for instances in the Running (Running) or Stopped (Stopped) state. The instances that are in the Stopped (Stopped) state do not include pay-as-you-go instances that are stopped in economical mode.
   * 
   *     **
   * 
   *     **Note** If the specified instance has local disks attached, the local disks are forcefully changed when the host of the instance is forcefully changed. This may cause data loss in the local disks. Proceed with caution.
   * 
   * *   false: does not forcefully change the host of the instance when the deployment set of the instance is changed. You can add the instance to a deployment set only when the instance remains on the current host. When the Force parameter is set to false, the deployment set may fail to be changed.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph***
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type to which the instance is changed. You can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the most recent list of instance types.
   * 
   * You can change the instance type of an instance when you migrate the instance to a dedicated host. The new instance type must match the type of the specified dedicated host. For more information, see [Dedicated host types](https://help.aliyun.com/document_detail/68564.html).
   * 
   * *   If you specify this parameter, you must also specify `DedicatedHostId`.
   * *   You cannot change the instance type of an instance if you use the automatic deployment feature to migrate the instance.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether to stop the instance before it is migrated to the destination dedicated host. Valid values:
   * 
   * *   reboot: stops the instance before it is migrated.
   * *   live: migrates the instance without stopping it. If you set MigrationType to live, you must specify DedicatedHostId. In this case, you cannot change the instance type of the instance when the instance is migrated.
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
   * Specifies whether to remove the specified instance from the specified deployment set. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * > If you set this parameter to true, you must specify InstanceId and DeploymentSetId and make sure that the specified instance belongs to the specified deployment set.
   * 
   * @example
   * false
   */
  removeFromDeploymentSet?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to deploy the instance on a dedicated host. Set the value to host, which indicates that the instance is deployed on a dedicated host.
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

