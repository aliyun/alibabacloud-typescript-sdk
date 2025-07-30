// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the source database.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * 
   * > This parameter is available and required only if the source database is a self-managed database.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * > This parameter is available and required only if the source instance is an ApsaraDB RDS for MySQL instance, a PolarDB-X 1.0 instance, or a PolarDB for MySQL cluster.
   * 
   * @example
   * rm-bp1zc3iyqe3qw****
   */
  instanceID?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS for MySQL instance
   * *   **PolarDB**: PolarDB for MySQL cluster.
   * *   **LocalInstance**: self-managed database with a public IP address
   * *   **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
   * *   **Express**: self-managed database connected over Express Connect
   * *   **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
   * *   **dg**: self-managed database connected over Database Gateway
   * 
   * > The engine of a self-managed database can be MySQL or Oracle. You must specify the engine type when you call the [CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html) operation.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * 
   * > This parameter is available and required only if the source database is a self-managed Oracle database and the Oracle database is deployed in a non-RAC architecture.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the source database belongs.
   * 
   * > This parameter is available and required only if you track data changes across different Alibaba Cloud accounts.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The password of the account that is used to connect to the source database.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * > This parameter is available and required only if the source database is a self-managed database.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The RAM role that is authorized to access the source database. This parameter is required if the source database does not belong to the Alibaba Cloud account that you use to configure the change tracking task. In this case, you must authorize the Alibaba Cloud account to access the source database by using a RAM role.
   * 
   * > For more information about the permissions that are required for the RAM role and how to grant permissions to the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The username of the account that is used to connect to the source database.
   * 
   * > The permissions that are required for the database account vary based on change tracking scenarios. For more information, see [Overview of change tracking scenarios](https://help.aliyun.com/document_detail/145715.html).
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
   * Specifies whether to track DDL statements. Default value: true. Valid values:
   * 
   * *   **true**: tracks DDL statements.
   * *   **false**: does not track DDL statements.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  DDL?: boolean;
  /**
   * @remarks
   * Specifies whether to track DML statements. Default value: true. Valid values:
   * 
   * *   **true**: tracks DML statements.
   * *   **false**: does not track DML statements.
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
   * The ID of the VPC in which the change tracking instance is deployed.
   * 
   * > This parameter is available and required only if the **SubscriptionInstanceNetworkType** parameter is set to **vpc**.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the specified VPC.
   * 
   * > This parameter is available and required only if the **SubscriptionInstanceNetworkType** parameter is set to **vpc**.
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
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because this parameter is about to be discontinued.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  regionId?: string;
  /**
   * @remarks
   * 资源组ID。
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
   * 
   * > We recommend that you specify a descriptive name for easy identification. You do not need to use a unique name.
   * 
   * @example
   * MySQL Subscription
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * The network type of the change tracking instance. Set the value to **vpc**, which specifies the Virtual Private Cloud (VPC) network type.
   * 
   * > 
   * 
   * *   To use the new version of the change tracking feature, you must specify the SubscriptionInstanceNetworkType parameter. You must also specify the **SubscriptionInstance.VPCId** and **SubscriptionInstance.VSwitchID** parameters. If you do not specify the SubscriptionInstanceNetworkType parameter, the previous version of the change tracking feature is used.
   * 
   * *   The previous version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. The new version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
   * 
   * @example
   * vpc
   */
  subscriptionInstanceNetworkType?: string;
  /**
   * @remarks
   * The objects for which you want to track data changes. The value is a JSON string and can contain regular expressions. For more information, see [SubscriptionObjects](https://help.aliyun.com/document_detail/141902.html).
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

