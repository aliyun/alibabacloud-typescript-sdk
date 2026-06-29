// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchTaskRequestCreateCommand extends $dara.Model {
  /**
   * @remarks
   * The catalog for a database SQL node. This parameter takes effect only for data source types that require a catalog, such as Presto.
   * 
   * @example
   * mysql_catalog
   */
  dataSourceCatalog?: string;
  /**
   * @remarks
   * The data source ID for a database SQL node.
   * 
   * @example
   * 12131111
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The schema for a database SQL node. This parameter takes effect only for data source types that require a schema, such as Oracle.
   * 
   * @example
   * erp
   */
  dataSourceSchema?: string;
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * xx test.
   */
  description?: string;
  /**
   * @remarks
   * The folder path in the menu tree to which the node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * /a/b
   */
  directory?: string;
  /**
   * @remarks
   * The execution engine for the node, such as a Python node. Valid values:
   * - 1: PYTHON2_7
   * - 2: PYTHON3_7
   * - 3: PYTHON3_11.
   * 
   * @example
   * PYTHON3_7
   */
  engine?: string;
  /**
   * @remarks
   * The name of the batch task.
   * 
   * This parameter is required.
   * 
   * @example
   * test111
   */
  name?: string;
  /**
   * @remarks
   * The ID of the project to which the node belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10121101
   */
  projectId?: number;
  /**
   * @remarks
   * The list of third-party Python packages that the node depends on.
   */
  pythonModuleList?: string[];
  /**
   * @remarks
   * The scheduling type. Valid values:
   * - 1: periodic node.
   * - 3: manual node.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  scheduleType?: number;
  /**
   * @remarks
   * The node type. Valid values:
   * - Hive_SQL: 1
   * - Hive_SQL_23X: 101
   * - HIVE_SQL_FUSION_INSIGHT_80X: 111
   * - COMMON_HIVE_SQL: 131
   * - HADOOP_MR: 2
   * - MaxCompute_SQL: 5
   * - MaxCompute_MR: 6
   * - SPARK_SQL_ON_MAX_COMPUTE: 7
   * - SPARK_JAR_ON_MAX_COMPUTE: 8
   * - SPARK_SQL_ON_HIVE: 17
   * - Spark_JAR_ON_HIVE: 18
   * - Shell: 10
   * - PAI_DESIGNER: 71
   * - DataX: 15
   * - Merge: 16
   * - Python: 21
   * - Python37x: 22
   * - Perl: 23
   * - Python311x: 24
   * - OneService_SQL: 25
   * - ONE_SERVICE_SQL_ADB_FOR_PG: 26
   * - OneService_SQL_Hive11x: 27
   * - OneService_SQL_Hive23x: 29
   * - ONE_SERVICE_SQL_TDH_INCEPTOR: 75
   * - ONE_SERVICE_SQL_HIVE_CDP: 91
   * - ONE_SERVICE_SQL_HIVE_ASIA_INFO_DP_53X: 92
   * - Dlink: 30
   * - ONE_SERVICE_SQL_ADB_FOR_MYSQL: 33
   * - Logical: 31
   * - Flink_Streaming: 41
   * - Flink_Batch: 42
   * - ADB_FOR_PG: 51
   * - DryRun: 100
   * - CHECK: 902
   * - VIRTUAL: 999
   * - INCEPTOR_SQL: 10000
   * - HOLOGRES_SQL: 28
   * - ARGODB_SQL: 76
   * - IMPALA_SQL: 78
   * - STARROCKS_SQL: 79
   * - SPARK_SQL: 80
   * - GAUSS_SQL: 81
   * - DATABASE_SQL: 998
   * - EXTERNAL_TRIGGER: 997.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceCatalog: 'DataSourceCatalog',
      dataSourceId: 'DataSourceId',
      dataSourceSchema: 'DataSourceSchema',
      description: 'Description',
      directory: 'Directory',
      engine: 'Engine',
      name: 'Name',
      projectId: 'ProjectId',
      pythonModuleList: 'PythonModuleList',
      scheduleType: 'ScheduleType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceCatalog: 'string',
      dataSourceId: 'string',
      dataSourceSchema: 'string',
      description: 'string',
      directory: 'string',
      engine: 'string',
      name: 'string',
      projectId: 'number',
      pythonModuleList: { 'type': 'array', 'itemType': 'string' },
      scheduleType: 'number',
      taskType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pythonModuleList)) {
      $dara.Model.validateArray(this.pythonModuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The create command.
   * 
   * This parameter is required.
   */
  createCommand?: CreateBatchTaskRequestCreateCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateBatchTaskRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

