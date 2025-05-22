// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobRequestSourceEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the synchronization object in the source instance belongs.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The IP address of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * rm-bp1i99e8l7913****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the source instance. Valid values:
   * 
   * *   **RDS**: ApsaraDB RDS instance
   * *   **Redis**: ApsaraDB for Redis instance
   * *   **PolarDB**: PolarDB for MySQL cluster or PolarDB O Edition cluster
   * *   **ECS**: self-managed database that is hosted on Elastic Compute Service (ECS)
   * *   **Express**: self-managed database that is connected over Express Connect
   * *   **dg**: self-managed database that is connected over Database Gateway
   * *   **cen**: self-managed database that is connected over Cloud Enterprise Network (CEN)
   * 
   * >  The default value is **RDS**.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the source RDS instance.
   * 
   * >  You can specify this parameter to synchronize data across different Alibaba Cloud accounts. In this case, you also need to specify the **SourceEndpoint.Role** parameter.
   * 
   * @example
   * 140692647406****
   */
  ownerID?: string;
  /**
   * @remarks
   * The password of the source database account.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * Test123456
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the source database.
   * 
   * >  You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The name of the RAM role configured for the Alibaba Cloud account that owns the source instance.
   * 
   * >  You must specify this parameter when you synchronize data across different Alibaba Cloud accounts. For information about the permissions and authorization methods of the RAM role, see [Configure RAM authorization for cross-account data migration and synchronization](https://help.aliyun.com/document_detail/48468.html).
   * 
   * @example
   * ram-for-dts
   */
  role?: string;
  /**
   * @remarks
   * The database account of the source database.
   * 
   * > 
   * *   You must specify this parameter only if the **SourceEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * *   If the **SourceEndpoint.InstanceType** parameter is set to **Redis**, you do not need to specify the database account.
   * *   The permissions that are required for database accounts vary with the synchronization scenario. For more information, see [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/140954.html).
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
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
      instanceId: 'string',
      instanceType: 'string',
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

