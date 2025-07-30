// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSynchronizationEndpointRequestEndpoint extends $dara.Model {
  /**
   * @remarks
   * The IP address of the database.
   * 
   * >  You must specify the IP address only if the **Endpoint.InstanceType** parameter is set to **Express**.
   * 
   * @example
   * 172.15.185.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the ECS instance or the virtual private cloud (VPC).
   * 
   * > 
   * *   If the **Endpoint.InstanceType** parameter is set to **ECS**, you must specify the ID of the ECS instance.
   * *   If the **Endpoint.InstanceType** parameter is set to **Express**, you must specify the ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp11haem1kpkhoup****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance type of the database. Valid values:
   * 
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **ECS**: self-managed database that is hosted on ECS
   * *   **Express**: self-managed database that is connected over Express Connect
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * The service port number of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Specifies whether to update the connection settings of the source instance or the destination instance. Valid values:
   * 
   * *   **Source**
   * *   **Destination**
   * 
   * This parameter is required.
   * 
   * @example
   * Destination
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      port: 'Port',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      port: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source instance belongs. You must specify this parameter only if the source instance and the destination instance belong to different Alibaba Cloud accounts.
   * 
   * @example
   * 14069264****
   */
  ownerID?: string;
  /**
   * @remarks
   * The authorized Resource Access Management (RAM) role of the source instance. You must specify the RAM role only if the source instance and the destination instance belong to different Alibaba Cloud accounts. You can use the RAM role to allow the Alibaba Cloud account that owns the destination instance to access the source instance.
   * 
   * >  For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      ownerID: 'OwnerID',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerID: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SwitchSynchronizationEndpointRequest extends $dara.Model {
  endpoint?: SwitchSynchronizationEndpointRequestEndpoint;
  sourceEndpoint?: SwitchSynchronizationEndpointRequestSourceEndpoint;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter will be removed in the future.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **Forward**
   * *   **Reverse**
   * 
   * >  Default value: **Forward**.
   * 
   * The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * The ID of the data synchronization instance. You can call the DescribeSynchronizationJobs operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsexjk1alb116****
   */
  synchronizationJobId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      sourceEndpoint: 'SourceEndpoint',
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationDirection: 'SynchronizationDirection',
      synchronizationJobId: 'SynchronizationJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: SwitchSynchronizationEndpointRequestEndpoint,
      sourceEndpoint: SwitchSynchronizationEndpointRequestSourceEndpoint,
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      synchronizationDirection: 'string',
      synchronizationJobId: 'string',
    };
  }

  validate() {
    if(this.endpoint && typeof (this.endpoint as any).validate === 'function') {
      (this.endpoint as any).validate();
    }
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

