// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSubscriptionInstanceRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to be tracked.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The endpoint of the source database.
   * > This parameter is available and required only when the source database is a self-managed database.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The instance ID of the source instance.
   * > This parameter is available and required only when the source database is an ApsaraDB RDS for MySQL instance, a PolarDB-X 1.0 instance, or a PolarDB for MySQL cluster.
   * 
   * @example
   * rm-bp1zc3iyqe3qw****
   */
  instanceID?: string;
  /**
   * @remarks
   * The instance type of the source database. Valid values:
   * - **RDS**: ApsaraDB RDS for MySQL.
   * - **PolarDB**: PolarDB for MySQL.
   * - **LocalInstance**: a self-managed database with a public IP address.
   * - **ECS**: a self-managed database hosted on an ECS instance.
   * - **Express**: a self-managed database connected over an Express Connect circuit.
   * - **CEN**: a self-managed database connected over a Cloud Enterprise Network (CEN) instance.
   * - **dg**: a self-managed database connected over a database gateway.
   * 
   * > Self-managed MySQL and Oracle databases are supported. You must call the [CreateSubscriptionInstance](https://help.aliyun.com/document_detail/49436.html) operation to configure the database type in advance.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The system ID (SID) of the Oracle database.
   * > This parameter is available and required only when the source database is a self-managed Oracle database and the Oracle database is not a Real Application Clusters (RAC) instance.
   * 
   * @example
   * testsid
   */
  oracleSID?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the source instance.
   * > This parameter is available and required only when you configure change tracking across Alibaba Cloud accounts.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The password of the database account of the source instance.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * > This parameter is available and required only when the source database is a self-managed database.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The RAM role that is authorized to access the source instance. If the source instance and the change tracking task belong to different Alibaba Cloud accounts, you must specify this parameter to authorize the Alibaba Cloud account that owns the change tracking task to access the source instance.
   * > For more information about the required permissions and authorization methods for the RAM role, see [Configure RAM authorization for cross-account data migration or synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The database account of the source instance.
   * > The required permissions vary based on the database to be tracked. For more information, see the corresponding configuration examples in [Overview of DTS change tracking solutions](https://help.aliyun.com/document_detail/145715.html).
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
   * Specifies whether to track data definition language (DDL) operations. Valid values:
   * 
   * - **true**: yes. This is the default value.
   * - **false**: no.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  DDL?: boolean;
  /**
   * @remarks
   * Specifies whether to track data manipulation language (DML) operations. Valid values:
   * - **true**: yes. This is the default value.
   * - **false**: no.
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
   * The VPC ID of the change tracking instance.
   * > This parameter is available and required only when **SubscriptionInstanceNetworkType** is set to **vpc**.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the change tracking instance.
   * > This parameter is available and required only when **SubscriptionInstanceNetworkType** is set to **vpc**.
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
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  ownerId?: string;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see
   * [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * MySQL change tracking
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * The network type of the change tracking instance. Set the value to **vpc**, which specifies a virtual private cloud (VPC).
   * 
   * > - If you specify this parameter, the change tracking instance is defined as a new version instance, and you must also correctly set the **SubscriptionInstance.VPCId** and **SubscriptionInstance.VSwitchID** parameters. If you do not specify this parameter, the change tracking instance is defined as a legacy instance.
   * - Legacy change tracking instances support tracking data from self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and DRDS instances. New version change tracking instances support tracking data from self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
   * 
   * @example
   * vpc
   */
  subscriptionInstanceNetworkType?: string;
  /**
   * @remarks
   * The objects to be tracked. The value is a JSON string and supports specific regular expressions. For more information, see [Configure the objects to be tracked](https://help.aliyun.com/document_detail/141902.html).
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

