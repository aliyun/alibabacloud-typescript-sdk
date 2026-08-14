// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * 待订阅的数据库名称。
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * 源数据库的连接地址。
   * > 当源数据库为自建数据库时，本参数才可用且必须传入。
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * 源实例ID。
   * > 源数据库的实例类型为RDS MySQL、PolarDB-X 1.0、PolarDB MySQL时，本参数才可用且必须传入。
   * 
   * @example
   * rm-bp1zc3iyqe3qw****
   */
  instanceID?: string;
  /**
   * @remarks
   * 源数据库的实例类型，取值：
   * - **RDS**：RDS MySQL。
   * - **PolarDB**：PolarDB MySQL。
   * - **LocalInstance**：有公网IP的自建数据库。
   * - **ECS**：ECS上的自建数据库。
   * - **Express**：通过专线接入的自建数据库。
   * - **CEN**：通过云企业网CEN接入的自建数据库。
   * - **dg**：通过数据库网关接入的自建数据库。
   * 
   * > 支持自建数据库的数据库类型为MySQL、Oracle，您需要提前调用[CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html)设置。
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * Oracle数据库的SID信息。
   * > 当源数据库为自建Oracle时，且Oracle数据库为非RAC实例时，本参数才可用且必须传入。
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * 源实例所属的阿里云账号ID。
   * > 仅在配置跨阿里云账号的数据订阅时本参数才可用，且必须传入。
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * 源实例的数据库账号密码。
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * 源数据库的服务端口。
   * > 当源数据库为自建数据库时，本参数才可用且必须传入。
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * 源实例的授权角色。当源实例与配置订阅任务所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许配置订阅任务所属阿里云账号访问源实例的实例信息。
   * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](https://help.aliyun.com/document_detail/48468.html)。
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * 源实例的数据库账号。
   * > 订阅不同的数据库所需的权限有所差异，详情请参见[DTS数据订阅方案概览](https://help.aliyun.com/document_detail/145715.html)中对应的配置案例。
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      IP: 'IP',
      instanceID: 'InstanceID',
      instanceType: 'InstanceType',
      oracleSID: 'OracleSID',
      ownerID: 'OwnerID',
      password: 'Password',
      port: 'Port',
      role: 'Role',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      IP: 'string',
      instanceID: 'string',
      instanceType: 'string',
      oracleSID: 'string',
      ownerID: 'string',
      password: 'string',
      port: 'string',
      role: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequestSubscriptionDataType extends $dara.Model {
  /**
   * @remarks
   * 是否订阅DDL类型的数据，取值：
   * 
   * - **true**：是，为默认值。
   * - **false**：否。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  DDL?: boolean;
  /**
   * @remarks
   * 是否订阅DML类型的数据，取值：
   * - **true**：是，为默认值。
   * - **false**：否。
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  DML?: boolean;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      DML: 'DML',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'boolean',
      DML: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequestSubscriptionInstance extends $dara.Model {
  /**
   * @remarks
   * 订阅实例的专有网络ID。
   * > 当**SubscriptionInstanceNetworkType**取值为**vpc**时，本参数才可用且必须传入。
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  VPCId?: string;
  /**
   * @remarks
   * 订阅实例的虚拟交换机ID。
   * > 当**SubscriptionInstanceNetworkType**取值为**vpc**时，本参数才可用且必须传入。
   * 
   * @example
   * vsw-bp10df3mxae6lpmku****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigureSubscriptionInstanceRequest extends $dara.Model {
  sourceEndpoint?: ConfigureSubscriptionInstanceRequestSourceEndpoint;
  subscriptionDataType?: ConfigureSubscriptionInstanceRequestSubscriptionDataType;
  subscriptionInstance?: ConfigureSubscriptionInstanceRequestSubscriptionInstance;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * The ID of the change tracking instance. You can call the [DescribeSubscriptionInstances](https://help.aliyun.com/document_detail/49442.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dtshp8n2ze4r5x****
   */
  subscriptionInstanceId?: string;
  /**
   * @remarks
   * The name of the change tracking instance.
   * > Specify a descriptive name for easy identification. The name does not need to be unique.
   * 
   * @example
   * MySQL订阅
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * The network type of the change tracking instance. The only valid value is **vpc**, which indicates a virtual private cloud (VPC).
   * 
   * > - If you specify this parameter, the change tracking instance is defined as the new version. You must also correctly set the **SubscriptionInstance.VPCId** and **SubscriptionInstance.VSwitchID** parameters. If you do not specify this parameter, the change tracking instance is defined as the legacy version.
   * > - The legacy version supports change tracking for self-managed MySQL, ApsaraDB RDS for MySQL, and DRDS. The new version supports change tracking for self-managed MySQL, ApsaraDB RDS for MySQL, PolarDB for MySQL, and Oracle.
   * 
   * @example
   * vpc
   */
  subscriptionInstanceNetworkType?: string;
  /**
   * @remarks
   * The objects to be subscribed to. The value is a JSON string that supports regular expressions. For more information, see [Subscription object configuration](https://help.aliyun.com/document_detail/141902.html).
   * 
   * This parameter is required.
   * 
   * @example
   * [{     "DBName": "dtstestdata" }]
   */
  subscriptionObject?: string;
  static names(): { [key: string]: string } {
    return {
      sourceEndpoint: 'SourceEndpoint',
      subscriptionDataType: 'SubscriptionDataType',
      subscriptionInstance: 'SubscriptionInstance',
      accountId: 'AccountId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceId: 'SubscriptionInstanceId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      subscriptionInstanceNetworkType: 'SubscriptionInstanceNetworkType',
      subscriptionObject: 'SubscriptionObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceEndpoint: ConfigureSubscriptionInstanceRequestSourceEndpoint,
      subscriptionDataType: ConfigureSubscriptionInstanceRequestSubscriptionDataType,
      subscriptionInstance: ConfigureSubscriptionInstanceRequestSubscriptionInstance,
      accountId: 'string',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceId: 'string',
      subscriptionInstanceName: 'string',
      subscriptionInstanceNetworkType: 'string',
      subscriptionObject: 'string',
    };
  }

  validate() {
    if(this.sourceEndpoint && typeof (this.sourceEndpoint as any).validate === 'function') {
      (this.sourceEndpoint as any).validate();
    }
    if(this.subscriptionDataType && typeof (this.subscriptionDataType as any).validate === 'function') {
      (this.subscriptionDataType as any).validate();
    }
    if(this.subscriptionInstance && typeof (this.subscriptionInstance as any).validate === 'function') {
      (this.subscriptionInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

