// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchSynchronizationEndpointRequestEndpoint extends $dara.Model {
  /**
   * @remarks
   * 新数据库的IP地址。
   * > 当**Endpoint.InstanceType**取值为**Express**时，本参数才可用且必须传入。
   * 
   * @example
   * 172.15.185.***
   */
  IP?: string;
  /**
   * @remarks
   * ECS或专有网络的实例ID。
   * > - 当**Endpoint.InstanceType**取值为**ECS**时，本参数需传入ECS实例的ID。
   * - 当**Endpoint.InstanceType**取值为**Express**时，本参数需传入专有网络ID。
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp11haem1kpkhoup****
   */
  instanceId?: string;
  /**
   * @remarks
   * 新数据库所属的实例类型，取值：
   * 
   * - **LocalInstance**：有公网IP的自建数据库；
   * - **ECS**：ECS上的自建数据库。
   * - **Express**：通过专线接入的自建数据库。
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  instanceType?: string;
  /**
   * @remarks
   * 新的数据库服务端口。
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * 待调整连接信息的实例，取值：
   * 
   * - **Source**：源实例。
   * - **Destination**：目标实例。
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
   * 当源实例与目标实例所属阿里云账号不同时，您需要传入该参数指定源实例的所属阿里云账号的ID。
   * 
   * @example
   * 14069264****
   */
  ownerID?: string;
  /**
   * @remarks
   * 当源实例与目标实例所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许目标实例阿里云账号访问源实例的实例信息。
   * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](https://help.aliyun.com/document_detail/48468.html)。
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
   * The Alibaba Cloud account ID. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * - **Forward**: forward.
   * - **Reverse**: reverse.
   * 
   * > Default value: **Forward**. The value **Reverse** takes effect only when the synchronization topology of the data synchronization instance is two-way synchronization.
   * 
   * @example
   * Forward
   */
  synchronizationDirection?: string;
  /**
   * @remarks
   * Instance ID of the data synchronization instance. You can call the DescribeSynchronizationJobs operation to query instance ID.
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

