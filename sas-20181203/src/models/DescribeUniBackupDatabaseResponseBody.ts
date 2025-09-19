// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniBackupDatabaseResponseBodyDatabaseList extends $dara.Model {
  /**
   * @remarks
   * The status of the anti-ransomware agent. Valid values:
   * 
   * *   **UNKNOWN**: unknown
   * *   **INSTALLED**: installed
   * *   **INSTALL_FAILED**: installation failed
   * *   **UNINSTALL_FAILED**: uninstallation failed
   * 
   * @example
   * INSTALLED
   */
  agentStatus?: string;
  /**
   * @remarks
   * The service from which the database is created. Valid values:
   * 
   * *   **HBR**: HBR
   * *   **AEGIS**: Security Center
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
   * *   **MYSQL**
   * *   **MSSQL**
   * *   **Oracle**
   * 
   * @example
   * MYSQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 12.0.4100.1
   */
  databaseVersion?: string;
  /**
   * @remarks
   * The ID of the server.
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
   * The UUID of the Hybrid Backup Recovery (HBR) agent that is used to back up the data of the database.
   * 
   * @example
   * 85878b284df911ec800000163e19****
   */
  instanceUuid?: string;
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * @example
   * 123
   */
  policyId?: number;
  /**
   * @remarks
   * The status of the ECS instance. Valid values:
   * 
   * *   **Stopped**
   * *   **Running**
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * An array that consists of the information about the databases.
   */
  databaseList?: DescribeUniBackupDatabaseResponseBodyDatabaseList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeUniBackupDatabaseResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

