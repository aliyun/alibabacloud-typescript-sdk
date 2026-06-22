// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupDatabaseResponseBodyDatabaseList extends $dara.Model {
  /**
   * @remarks
   * The status of the database client agent. Valid values:
   * - **UNKNOWN**: unknown.
   * - **INSTALLED**: installed.
   * - **INSTALL_FAILED**: installation failed.
   * - **UNINSTALL_FAILED**: uninstallation failed.
   * 
   * @example
   * INSTALLED
   */
  agentStatus?: string;
  /**
   * @remarks
   * The method used to create the database. Valid values:
   * - **HBR**: Cloud Backup.
   * - **AEGIS**: Security Center.
   * 
   * @example
   * AEGIS
   */
  createdByProduct?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * apns_tt180
   */
  databaseName?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MYSQL**
   * - **MSSQL**
   * - **Oracle**.
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The version of the database.
   * 
   * @example
   * 12.0.4100.1
   */
  databaseVersion?: string;
  /**
   * @remarks
   * The instance ID of the server.
   * 
   * @example
   * i-bp15aho9hhftvmhw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance to which the database belongs.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The unique identifier of the database backup client on the server.
   * 
   * @example
   * 85878b284df911ec800000163e19****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware backup policy for the database.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The instance status of the ECS instance. Valid values:
   * 
   * - **Stopped**: stopped.
   * - **Running**: running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      createdByProduct: 'CreatedByProduct',
      databaseName: 'DatabaseName',
      databaseType: 'DatabaseType',
      databaseVersion: 'DatabaseVersion',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceUuid: 'InstanceUuid',
      policyId: 'PolicyId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      createdByProduct: 'string',
      databaseName: 'string',
      databaseType: 'string',
      databaseVersion: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceUuid: 'string',
      policyId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of databases on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of databases per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of databases.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniBackupDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of database details.
   */
  databaseList?: DescribeUniBackupDatabaseResponseBodyDatabaseList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeUniBackupDatabaseResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: { 'type': 'array', 'itemType': DescribeUniBackupDatabaseResponseBodyDatabaseList },
      pageInfo: DescribeUniBackupDatabaseResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseList)) {
      $dara.Model.validateArray(this.databaseList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

