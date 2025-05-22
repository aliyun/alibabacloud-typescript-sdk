// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigureSynchronizationJobRequestDestinationEndpoint extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the synchronization object in the destination instance belongs.
   * 
   * @example
   * dtstestdata
   */
  dataBaseName?: string;
  /**
   * @remarks
   * The IP address of the destination database.
   * 
   * >  You must specify this parameter only if the **DestinationEndpoint.InstanceType** parameter is set to **Express**, **dg**, or **cen**.
   * 
   * @example
   * 172.16.88.***
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * >  If the **DestinationEndpoint.InstanceType** parameter is set to **MaxCompute** or **DataHub**, you must specify the name of the MaxCompute project or the DataHub project.
   * 
   * If the destination instance is an AnalyticDB for MySQL cluster, specify the ID of the AnalyticDB for MySQL cluster.
   * 
   * @example
   * rm-bp1r46452ai50****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the destination instance. Valid values:
   * 
   * *   **Redis**: ApsaraDB for Redis instance
   * *   **RDS**: ApsaraDB RDS instance
   * *   **PolarDB**: PolarDB for MySQL cluster or PolarDB O Edition cluster
   * *   **ECS**: self-managed database that is hosted on ECS
   * *   **Express**: self-managed database that is connected over Express Connect
   * *   **DataHub**: DataHub project
   * *   **MaxCompute**: MaxCompute project
   * *   **AnalyticDB**: AnalyticDB for MySQL cluster V3.0 or V2.0
   * *   **Greenplum**: AnalyticDB for PostgreSQL instance
   * 
   * >  The default value is **RDS**.
   * 
   * @example
   * RDS
   */
  instanceType?: string;
  /**
   * @remarks
   * The password of the destination database account.
   * 
   * > 
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**, you must specify the DestinationEndpoint.Password parameter.
   * 
   * @example
   * Test654321
   */
  password?: string;
  /**
   * @remarks
   * The service port number of the destination database.
   * 
   * >  You must specify this parameter only if the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The database account of the destination database.
   * 
   * > 
   * *   The permissions that are required for database accounts vary with the synchronization scenario. For more information, see [Overview of data synchronization scenarios](https://help.aliyun.com/document_detail/140954.html).
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to **ECS**, **Express**, **dg**, or **cen**, you must specify the DestinationEndpoint.UserName parameter.
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to RDS and the database version is MySQL 5.5 or MySQL 5.6, you do not need to specify the DestinationEndpoint.UserName and **DestinationEndpoint.Password** parameters.
   * *   If the **DestinationEndpoint.InstanceType** parameter is set to **Redis**, you do not need to specify the DestinationEndpoint.UserName parameter.
   * 
   * @example
   * dtstestaccount
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dataBaseName: 'DataBaseName',
      IP: 'IP',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      password: 'Password',
      port: 'Port',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataBaseName: 'string',
      IP: 'string',
      instanceId: 'string',
      instanceType: 'string',
      password: 'string',
      port: 'string',
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

