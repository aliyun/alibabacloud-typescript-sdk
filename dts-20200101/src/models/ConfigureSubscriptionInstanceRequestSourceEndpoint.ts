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

