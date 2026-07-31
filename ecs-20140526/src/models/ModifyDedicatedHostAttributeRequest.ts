// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostAttributeRequestNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The timeout period of UDP sessions for load balancing connections. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  slbUdpTimeout?: number;
  /**
   * @remarks
   * The timeout period of UDP sessions for user access to cloud services running on the dedicated host. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDedicatedHostAttributeRequest extends $dara.Model {
  networkAttributes?: ModifyDedicatedHostAttributeRequestNetworkAttributes;
  /**
   * @remarks
   * The migration plan for the instances on the dedicated host when the dedicated host fails or needs to be repaired online. Valid values:
   * 
   * - Migrate: The instances are migrated to another physical server and restarted.
   * 
   * - Stop: The instances are stopped on the current dedicated host. After the dedicated host is confirmed to be irreparable, the instances are migrated to another physical server and restarted.
   * 
   * Default value when cloud disks are attached to the dedicated host: Migrate.
   * 
   * Default value when local disks are attached to the dedicated host: Stop.
   * 
   * @example
   * Migrate
   */
  actionOnMaintenance?: string;
  /**
   * @remarks
   * Specifies whether the dedicated host is added to the automatic deployment resource pool. If you do not specify DedicatedHostId when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. Valid values:
   * 
   * - on: The dedicated host is added to the automatic deployment resource pool.
   * 
   * - off: The dedicated host is not added to the automatic deployment resource pool.
   * 
   * For more information about the automatic deployment feature, see [Features](https://help.aliyun.com/document_detail/118938.html).
   * 
   * @example
   * on
   */
  autoPlacement?: string;
  /**
   * @remarks
   * The CPU overcommit ratio. Only the custom instance families g6s, c6s, and r6s support CPU overcommit ratios. Valid values: 1 to 5.
   * 
   * The CPU overcommit ratio affects the number of available vCPUs on a dedicated host. Available vCPUs on a dedicated host = Number of physical CPU cores × 2 × CPU overcommit ratio. For example, the number of physical CPU cores on a g6s dedicated host is 52. If you set the CPU overcommit ratio to 4, the total number of vCPUs becomes 416. For scenarios that do not require absolute CPU stability or have low CPU loads, such as development and testing environments, you can increase the overcommit ratio to increase the number of available vCPUs. This way, you can deploy more ECS instances of the same specifications and reduce the unit deployment cost.
   * 
   * @example
   * 1
   */
  cpuOverCommitRatio?: number;
  /**
   * @remarks
   * The ID of the dedicated host cluster.
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
   * The name of the dedicated host. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
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
   * The region ID of the dedicated host. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

