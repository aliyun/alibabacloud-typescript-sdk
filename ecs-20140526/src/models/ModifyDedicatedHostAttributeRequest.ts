// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDedicatedHostAttributeRequestNetworkAttributes } from "./ModifyDedicatedHostAttributeRequestNetworkAttributes";


export class ModifyDedicatedHostAttributeRequest extends $dara.Model {
  networkAttributes?: ModifyDedicatedHostAttributeRequestNetworkAttributes;
  /**
   * @remarks
   * The policy for migrating the instances deployed on the dedicated host when the dedicated host fails or needs to be repaired online. Valid values:
   * 
   * *   Migrate: The instances are migrated to another physical machine and then restarted.
   * *   Stop: The instances are stopped. If the dedicated host cannot be repaired, the instances are migrated to another physical machine and then restarted.
   * 
   * If the dedicated host has cloud disks attached, the default value is Migrate.
   * 
   * If the dedicated host has local disks attached, the default value is Stop.
   * 
   * @example
   * Migrate
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * Specifies whether to add the dedicated host to the resource pool for automatic deployment. If you do not specify **DedicatedHostId** when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. Valid values:
   * 
   * *   on: adds the dedicated host to the resource pool for automatic deployment.
   * *   off: does not add the dedicated host to the resource pool for automatic deployment.
   * 
   * For information about automatic deployment, see [Functions and features](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * on
   */
  autoPlacement?: string;
  /**
   * @remarks
   * The CPU overcommit ratio. You can configure CPU overcommit ratios only for the following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
   * 
   * The CPU overcommit ratio affects the number of available vCPUs on a dedicated host. You can use the following formula to calculate the number of available vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU cores × 2 × CPU overcommit ratio. For example, the number of physical CPU cores on each g6s dedicated host is 52. If you change the CPU overcommit ratio of a g6s dedicated host to 4, the number of available vCPUs on the dedicated host is 416. For scenarios that have minimal requirements for CPU stability or where CPU load is not heavy, such as development and test environments, you can increase the number of available vCPUs on a dedicated host by increasing the CPU overcommit ratio. This allows you to deploy more ECS instances of the same specifications on the dedicated host and reduce the unit deployment cost.
   * 
   * @example
   * 1
   */
  cpuOverCommitRatio?: number;
  /**
   * @remarks
   * The ID of the dedicated host cluster to which to assign the dedicated host.
   * 
   * @example
   * dc-bp165p6xk2tlw61e****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * This parameter is required.
   * 
   * @example
   * dh-bp165p6xk2tlw61e****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The name of the dedicated host. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testDedicatedHostName
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The description of the dedicated host. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the dedicated host resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      networkAttributes: 'NetworkAttributes',
      actionOnMaintenance: 'ActionOnMaintenance',
      autoPlacement: 'AutoPlacement',
      cpuOverCommitRatio: 'CpuOverCommitRatio',
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
      description: 'Description',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkAttributes: ModifyDedicatedHostAttributeRequestNetworkAttributes,
      actionOnMaintenance: 'string',
      autoPlacement: 'string',
      cpuOverCommitRatio: 'number',
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
      description: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

