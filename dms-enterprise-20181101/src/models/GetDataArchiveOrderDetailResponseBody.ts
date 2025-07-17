// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDagInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the task flow.
   * 
   * @example
   * 59****
   */
  creatorId?: string;
  /**
   * @remarks
   * The start time for scheduling. The task flow is not scheduled before this point in time.
   * 
   * @example
   * 1970-01-01
   */
  cronBeginDate?: string;
  /**
   * @remarks
   * The end time for scheduling. The task flow is not scheduled after this point in time.
   * 
   * @example
   * 9999-01-01
   */
  cronEndDate?: string;
  /**
   * @remarks
   * Indicates whether the archiving task is a scheduled task. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  cronTrigger?: boolean;
  /**
   * @remarks
   * Indicates whether the task is used to develop warehouses.
   * 
   * >  This field is a retained field that is not in use.
   * 
   * @example
   * false
   */
  DWDevelop?: boolean;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * @example
   * data-archive-9099197
   */
  dagName?: string;
  /**
   * @remarks
   * The ID of the owner of the workflow.
   * 
   * @example
   * 13****
   */
  dagOwnerId?: string;
  /**
   * @remarks
   * The ID of the deployment record.
   * 
   * @example
   * 93***
   */
  deployId?: number;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * order id:9099197
   */
  description?: string;
  /**
   * @remarks
   * The ID of the editable workflow version.
   * 
   * @example
   * 24***
   */
  editDagId?: number;
  /**
   * @remarks
   * The time when the workflow was created.
   * 
   * @example
   * 2023-05-15 16:00:48
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the workflow was last modified.
   * 
   * @example
   * 2023-06-15 16:00:48
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the task flow.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the workflow is public. Valid values:
   * 
   * *   **0**: not public.
   * *   **1**: public.
   * 
   * @example
   * 0
   */
  isPublic?: number;
  /**
   * @remarks
   * Indicates whether the task is a historical task. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  legacy?: boolean;
  /**
   * @remarks
   * Indicates whether the task was created by the system. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  system?: boolean;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 5***
   */
  tenantId?: string;
  /**
   * @remarks
   * Indicates whether the workflow is triggered to run once. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  triggerOnce?: boolean;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      cronBeginDate: 'CronBeginDate',
      cronEndDate: 'CronEndDate',
      cronTrigger: 'CronTrigger',
      DWDevelop: 'DWDevelop',
      dagName: 'DagName',
      dagOwnerId: 'DagOwnerId',
      deployId: 'DeployId',
      description: 'Description',
      editDagId: 'EditDagId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      isPublic: 'IsPublic',
      legacy: 'Legacy',
      system: 'System',
      tenantId: 'TenantId',
      triggerOnce: 'TriggerOnce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      cronBeginDate: 'string',
      cronEndDate: 'string',
      cronTrigger: 'boolean',
      DWDevelop: 'boolean',
      dagName: 'string',
      dagOwnerId: 'string',
      deployId: 'number',
      description: 'string',
      editDagId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isPublic: 'number',
      legacy: 'boolean',
      system: 'boolean',
      tenantId: 'string',
      triggerOnce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup extends $dara.Model {
  /**
   * @remarks
   * The type of the instance engine. For information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the security rule set.
   * 
   * @example
   * adb_mysql default
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed in Flexible Management or Stable Change mode. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  freeOrStable?: boolean;
  /**
   * @remarks
   * The time when the security rule was created.
   * 
   * @example
   * 2020-05-24 14:12:32
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the security rule was last modified.
   * 
   * @example
   * 2020-05-25 14:12:32
   */
  gmtModified?: string;
  /**
   * @remarks
   * The type of the control mode of the instance. Valid values:
   * 
   * *   **COMMON**: The instance is managed in Security Collaboration mode.
   * *   **NONE_CONTROL**: The instance is managed in Flexible Management mode.
   * *   **STABLE**: The instance is managed in Stable Change mode.
   * 
   * @example
   * COMMON
   */
  groupMode?: string;
  /**
   * @remarks
   * The name of the security rule that corresponds to the control mode.
   * 
   * @example
   * adb_mysql default
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the security rule.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The user ID of the last modified security rule.
   * 
   * @example
   * 12****
   */
  lastMenderId?: number;
  static names(): { [key: string]: string } {
    return {
      dbType: 'DbType',
      description: 'Description',
      freeOrStable: 'FreeOrStable',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupMode: 'GroupMode',
      groupName: 'GroupName',
      id: 'Id',
      lastMenderId: 'LastMenderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbType: 'string',
      description: 'string',
      freeOrStable: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupMode: 'string',
      groupName: 'string',
      id: 'number',
      lastMenderId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The alias of the database instance.
   * 
   * @example
   * tf-testAccDMSEnterpriseLogicDatabase853****
   */
  alias?: string;
  /**
   * @remarks
   * The timeout period of queries on the database.
   * 
   * @example
   * 600
   */
  alterTimeout?: number;
  /**
   * @remarks
   * Indicates whether access control is enabled for data assets. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  assetControl?: boolean;
  /**
   * @remarks
   * The name of the instance in the instance list.
   * 
   * @example
   * test
   */
  catalogName?: string;
  /**
   * @remarks
   * Indicates whether the instance is added to the DMS whitelist.
   * 
   * @example
   * whitelist_done
   */
  clusterNode?: string;
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * >  You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of a physical database or the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * @example
   * 348****
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database. For information about the valid values of this parameter, see [DbType parameter](https://help.aliyun.com/document_detail/198106.html).
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The ID of the database administrator (DBA) of the instance.
   * 
   * @example
   * 16****
   */
  dbaId?: number;
  /**
   * @remarks
   * The nickname of the DBA of the instance.
   * 
   * @example
   * DBA
   */
  dbaName?: string;
  /**
   * @remarks
   * The complete endpoint of the database.
   * 
   * @example
   * test@rm-2ze756u8837****.mysql.rds.aliyuncs.com:3306 [test]
   */
  description?: string;
  /**
   * @remarks
   * The encoding format of the database.
   * 
   * @example
   * utf8
   */
  encoding?: string;
  /**
   * @remarks
   * The type of the environment to which the database belongs. Valid values:
   * 
   * *   **product**: production environment
   * *   **dev**: development environment
   * *   **pre**: staging environment
   * *   **test**: test environment
   * *   **sit**: system integration testing (SIT) environment
   * *   **uat**: user acceptance testing (UAT) environment
   * *   **pet**: stress testing environment
   * *   **stag**: STAG environment
   * 
   * @example
   * product
   */
  envType?: string;
  /**
   * @remarks
   * Indicates whether the instance needs special attention. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  follow?: boolean;
  /**
   * @remarks
   * The endpoint that is used to connect to the database.
   * 
   * @example
   * rm-2ze756u8837****.mysql.rds.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The region in which the database instance resides.
   * 
   * @example
   * cn-beijing
   */
  idc?: string;
  /**
   * @remarks
   * The name of the region in which the database instance resides.
   * 
   * @example
   * cn-beijing
   */
  idcTitle?: string;
  /**
   * @remarks
   * The ID of the instance to which the database belongs.
   * 
   * @example
   * 175****
   */
  instanceId?: number;
  /**
   * @remarks
   * The source of the database instance.Valid values:
   * 
   * *   **RDS**: an ApsaraDB RDS instance.
   * *   **ECS_OWN**: a self-managed database deployed on an Elastic Compute Service (ECS) instance.
   * *   **PUBLIC_OWN**: a self-managed database instance that is connected over the Internet.
   * *   **VPC_ID**: a self-managed database instance in a virtual private cloud (VPC) that is connected over Express Connect circuits.
   * *   **GATEWAY**: a database instance connected by using a database gateway.
   * 
   * @example
   * RDS
   */
  instanceSource?: string;
  /**
   * @remarks
   * The time when the database information was last obtained.
   * 
   * @example
   * 2023-05-14 18:34:45
   */
  lastSyncTime?: string;
  /**
   * @remarks
   * The instance level.
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * Indicates whether the database is logical. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The IDs of the owners of the databases, which are stored as an array. You can call the [GetUser](https://help.aliyun.com/document_detail/147098.html) or [ListUsers](https://help.aliyun.com/document_detail/141938.html) operation to query the IDs of the owners.
   * 
   * >  The value of OwnerIds is the same as the value of UserId
   */
  ownerIds?: number[];
  /**
   * @remarks
   * The usernames of the database owners.
   */
  ownerNames?: string[];
  /**
   * @remarks
   * The port that is used to connect to the database.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  schemaName?: string;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * test@rm-2ze756u8837****.mysql.rds.aliyuncs.com:3306 [test]
   */
  searchName?: string;
  /**
   * @remarks
   * The details of the control mode of the instance.
   */
  standardGroup?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup;
  /**
   * @remarks
   * The status of the database. Valid values:
   * 
   * *   **NORMAL**: The database is running as expected.
   * *   **DISABLE**: The database is disabled.
   * *   **OFFLINE**: The database is unpublished.
   * *   **NOT_EXIST**: The database does not exist.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 201
   */
  tableCount?: number;
  /**
   * @remarks
   * The name of TNS.
   * 
   * @example
   * TNS_4010
   */
  tnsName?: string;
  /**
   * @remarks
   * The unit type.
   * 
   * @example
   * -1
   */
  unitType?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      alterTimeout: 'AlterTimeout',
      assetControl: 'AssetControl',
      catalogName: 'CatalogName',
      clusterNode: 'ClusterNode',
      dbId: 'DbId',
      dbType: 'DbType',
      dbaId: 'DbaId',
      dbaName: 'DbaName',
      description: 'Description',
      encoding: 'Encoding',
      envType: 'EnvType',
      follow: 'Follow',
      host: 'Host',
      idc: 'Idc',
      idcTitle: 'IdcTitle',
      instanceId: 'InstanceId',
      instanceSource: 'InstanceSource',
      lastSyncTime: 'LastSyncTime',
      level: 'Level',
      logic: 'Logic',
      ownerIds: 'OwnerIds',
      ownerNames: 'OwnerNames',
      port: 'Port',
      schemaName: 'SchemaName',
      searchName: 'SearchName',
      standardGroup: 'StandardGroup',
      state: 'State',
      tableCount: 'TableCount',
      tnsName: 'TnsName',
      unitType: 'UnitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      alterTimeout: 'number',
      assetControl: 'boolean',
      catalogName: 'string',
      clusterNode: 'string',
      dbId: 'number',
      dbType: 'string',
      dbaId: 'number',
      dbaName: 'string',
      description: 'string',
      encoding: 'string',
      envType: 'string',
      follow: 'boolean',
      host: 'string',
      idc: 'string',
      idcTitle: 'string',
      instanceId: 'number',
      instanceSource: 'string',
      lastSyncTime: 'string',
      level: 'string',
      logic: 'boolean',
      ownerIds: { 'type': 'array', 'itemType': 'number' },
      ownerNames: { 'type': 'array', 'itemType': 'string' },
      port: 'number',
      schemaName: 'string',
      searchName: 'string',
      standardGroup: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfoStandardGroup,
      state: 'string',
      tableCount: 'number',
      tnsName: 'string',
      unitType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ownerIds)) {
      $dara.Model.validateArray(this.ownerIds);
    }
    if(Array.isArray(this.ownerNames)) {
      $dara.Model.validateArray(this.ownerNames);
    }
    if(this.standardGroup && typeof (this.standardGroup as any).validate === 'function') {
      (this.standardGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataInstances extends $dara.Model {
  /**
   * @remarks
   * The business time of the task flow. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  businessTime?: string;
  /**
   * @remarks
   * The task flow ID. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to obtain the value of this parameter.
   * 
   * @example
   * 37***
   */
  dagId?: number;
  /**
   * @remarks
   * The time when the task flow ended. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-06-04 15:14:00
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the task flow was created.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task flow was last modified.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the historical task flow.
   * 
   * @example
   * 32***
   */
  historyDagId?: number;
  /**
   * @remarks
   * The ID of the instance in the task flow that is executed.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The context of the previous execution of the task flow.
   * 
   * @example
   * {
   *       "nodes": [
   *             48**
   *       ],
   *       "edges": {}
   * }
   */
  lastRunningContext?: string;
  /**
   * @remarks
   * The context of the current execution of the task flow.
   * 
   * @example
   * 2023-05-15 16:37:48[GMT+08:00] INFO - Resource Control is active!\\n2023-05-15 16:37:48[GMT+08:00] INFO - Starting job j_4834 at Mon May 15 16:37:48 CST 2023
   */
  msg?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: The task is waiting for execution.
   * *   **1**: The task is in progress.
   * *   **2**: The task is suspended.
   * *   **3**: The task failed.
   * *   **4**: The task is successful.
   * *   **5**: The task is complete.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 5***
   */
  tenantId?: string;
  /**
   * @remarks
   * The mode in which the task flow was triggered. Valid values:
   * 
   * *   **0**: The task flow was triggered based on a schedule.
   * *   **1**: The task flow was manually triggered.
   * 
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      dagId: 'DagId',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      historyDagId: 'HistoryDagId',
      id: 'Id',
      lastRunningContext: 'LastRunningContext',
      msg: 'Msg',
      status: 'Status',
      tenantId: 'TenantId',
      triggerType: 'TriggerType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      dagId: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      historyDagId: 'number',
      id: 'number',
      lastRunningContext: 'string',
      msg: 'string',
      status: 'number',
      tenantId: 'string',
      triggerType: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataNextFireTimeResult extends $dara.Model {
  /**
   * @remarks
   * The type of scheduled triggering.
   * 
   * @example
   * NOT_SET
   */
  cronFireType?: string;
  static names(): { [key: string]: string } {
    return {
      cronFireType: 'CronFireType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronFireType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData extends $dara.Model {
  /**
   * @remarks
   * The information about the workflow.
   */
  dagInfo?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDagInfo;
  /**
   * @remarks
   * The database information related to data archiving tickets.
   */
  dbBaseInfo?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfo;
  /**
   * @remarks
   * The total number of archiving tasks.
   * 
   * @example
   * 2
   */
  instanceTotal?: number;
  /**
   * @remarks
   * The list of archiving tasks.
   */
  instances?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataInstances[];
  /**
   * @remarks
   * The time when the next task is triggered.
   */
  nextFireTimeResult?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataNextFireTimeResult;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the temporary table that is generated by the archiving task (indicated by the archiving task ID).
   * 
   * @example
   * {
   *       "803***": [
   *             "tmp_dms_21321_20230704144336_temp_test_check"
   *       ]
   * }
   */
  tempTableNameMap?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dagInfo: 'DagInfo',
      dbBaseInfo: 'DbBaseInfo',
      instanceTotal: 'InstanceTotal',
      instances: 'Instances',
      nextFireTimeResult: 'NextFireTimeResult',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      tempTableNameMap: 'TempTableNameMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dagInfo: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDagInfo,
      dbBaseInfo: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataDbBaseInfo,
      instanceTotal: 'number',
      instances: { 'type': 'array', 'itemType': GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataInstances },
      nextFireTimeResult: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataNextFireTimeResult,
      pageIndex: 'number',
      pageSize: 'number',
      tempTableNameMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dagInfo && typeof (this.dagInfo as any).validate === 'function') {
      (this.dagInfo as any).validate();
    }
    if(this.dbBaseInfo && typeof (this.dbBaseInfo as any).validate === 'function') {
      (this.dbBaseInfo as any).validate();
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.nextFireTimeResult && typeof (this.nextFireTimeResult as any).validate === 'function') {
      (this.nextFireTimeResult as any).validate();
    }
    if(this.tempTableNameMap) {
      $dara.Model.validateMap(this.tempTableNameMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes extends $dara.Model {
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * tm_insured_cb
   */
  tableName?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * id<1000 or gmt_create<\\"2023-05-14 16:00:57\\"
   */
  tableWhere?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
      tableWhere: 'TableWhere',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableName: 'string',
      tableWhere: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam extends $dara.Model {
  /**
   * @remarks
   * The type of the archiving destination.
   * 
   * @example
   * inner_oss
   */
  archiveMethod?: string;
  /**
   * @remarks
   * The schema of the database and table to be archived.
   * 
   * @example
   * test
   */
  dbSchema?: string;
  /**
   * @remarks
   * Indicates whether the database is logical.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  logic?: boolean;
  /**
   * @remarks
   * The post behavior of archiving.
   */
  orderAfter?: string[];
  /**
   * @remarks
   * The running method, which indicates whether to run the task immediately or at a specific point in time.
   * 
   * @example
   * now
   */
  runMethod?: string;
  /**
   * @remarks
   * The ID of the source database.
   * 
   * @example
   * 12***
   */
  sourceDatabaseId?: number;
  /**
   * @remarks
   * The list of the archived tables and the filter conditions.
   */
  tableIncludes?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes[];
  /**
   * @remarks
   * The mapping of schemas.
   */
  tableMapping?: string[];
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * 12***
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The time variable defined for scheduled archiving.
   */
  variables?: string[];
  static names(): { [key: string]: string } {
    return {
      archiveMethod: 'ArchiveMethod',
      dbSchema: 'DbSchema',
      logic: 'Logic',
      orderAfter: 'OrderAfter',
      runMethod: 'RunMethod',
      sourceDatabaseId: 'SourceDatabaseId',
      tableIncludes: 'TableIncludes',
      tableMapping: 'TableMapping',
      targetInstanceId: 'TargetInstanceId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveMethod: 'string',
      dbSchema: 'string',
      logic: 'boolean',
      orderAfter: { 'type': 'array', 'itemType': 'string' },
      runMethod: 'string',
      sourceDatabaseId: 'number',
      tableIncludes: { 'type': 'array', 'itemType': GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParamTableIncludes },
      tableMapping: { 'type': 'array', 'itemType': 'string' },
      targetInstanceId: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.orderAfter)) {
      $dara.Model.validateArray(this.orderAfter);
    }
    if(Array.isArray(this.tableIncludes)) {
      $dara.Model.validateArray(this.tableIncludes);
    }
    if(Array.isArray(this.tableMapping)) {
      $dara.Model.validateArray(this.tableMapping);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the data archiving tickets.
   * 
   * @example
   * Archiving of test results
   */
  comment?: string;
  /**
   * @remarks
   * The user who submitted the ticket.
   * 
   * @example
   * dmstest
   */
  committer?: string;
  /**
   * @remarks
   * The ID of the user who submitted the ticket. The ID is a user ID and not the ID of an Alibaba Cloud account.
   * 
   * @example
   * 26***
   */
  committerId?: number;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2023-05-15 16:00:48
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ticket was last modified.
   * 
   * @example
   * 2023-05-23 16:00:48
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of data archiving tickets.
   * 
   * @example
   * 868****
   */
  id?: number;
  /**
   * @remarks
   * The additional information about the ticket.
   */
  pluginExtraData?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData;
  /**
   * @remarks
   * The ticket creation parameter. The value is a JSON string. For more information, see [PluginType parameter](https://help.aliyun.com/document_detail/429109.html).
   */
  pluginParam?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam;
  /**
   * @remarks
   * The plug-in type that corresponds to the type of the ticket. The plug-in type for data archiving is DATA_ARCHIVE. For more information, see [PluginType parameter](https://help.aliyun.com/document_detail/429109.html).
   * 
   * @example
   * DATA_ARCHIVE
   */
  pluginType?: string;
  /**
   * @remarks
   * The user IDs related to the ticket.
   */
  relatedUserList?: number[];
  /**
   * @remarks
   * The nicknames of the users that are related to the ticket.
   */
  relatedUserNickList?: string[];
  /**
   * @remarks
   * The status code of the ticket. Valid values:
   * 
   * *   **new**: newly created.
   * *   **toaudit**: being reviewed.
   * *   **Approved**: approved.
   * *   **reject**: rejected.
   * *   **processing**: being executed.
   * *   **Success**: successful.
   * *   **closed**: disabled.
   * 
   * @example
   * processing
   */
  statusCode?: string;
  /**
   * @remarks
   * The status description of the ticket.
   * 
   * @example
   * a ticket task is being executed.
   */
  statusDesc?: string;
  /**
   * @remarks
   * The ID of the approval process. You can call the [GetOrderBaseInfo](https://help.aliyun.com/document_detail/144642.html) operation to obtain the ID of the approval process.
   * 
   * @example
   * 29****
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * approved
   */
  workflowStatusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      pluginExtraData: 'PluginExtraData',
      pluginParam: 'PluginParam',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      relatedUserNickList: 'RelatedUserNickList',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
      workflowStatusDesc: 'WorkflowStatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      committer: 'string',
      committerId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      pluginExtraData: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraData,
      pluginParam: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginParam,
      pluginType: 'string',
      relatedUserList: { 'type': 'array', 'itemType': 'number' },
      relatedUserNickList: { 'type': 'array', 'itemType': 'string' },
      statusCode: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
      workflowStatusDesc: 'string',
    };
  }

  validate() {
    if(this.pluginExtraData && typeof (this.pluginExtraData as any).validate === 'function') {
      (this.pluginExtraData as any).validate();
    }
    if(this.pluginParam && typeof (this.pluginParam as any).validate === 'function') {
      (this.pluginParam as any).validate();
    }
    if(Array.isArray(this.relatedUserList)) {
      $dara.Model.validateArray(this.relatedUserList);
    }
    if(Array.isArray(this.relatedUserNickList)) {
      $dara.Model.validateArray(this.relatedUserNickList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataArchiveOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of data archiving tickets.
   */
  dataArchiveOrderDetail?: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * NoPermission
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * User [19929582****] not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request, which is used to query logs and troubleshoot issues.
   * 
   * @example
   * 4161CE36-28DF-5191-8A6F-A17076A0B124
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Tracks service requests.
   * 
   * @example
   * 0a06e1e316757357507896067d3780
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataArchiveOrderDetail: 'DataArchiveOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataArchiveOrderDetail: GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.dataArchiveOrderDetail && typeof (this.dataArchiveOrderDetail as any).validate === 'function') {
      (this.dataArchiveOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

