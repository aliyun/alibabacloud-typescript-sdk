// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubmitRecordsResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * Change type. 0: Create / 1: Update / 2: Delete.
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * Creation time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @remarks
   * Pending deployment record ID.
   * 
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * Object ID.
   * 
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @remarks
   * Object name.
   * 
   * @example
   * 对象A
   */
  objectName?: string;
  /**
   * @remarks
   * Object type. Valid values:
   * - MaxCompute SQL task: MAX_COMPUTE_SQL
   * - MaxCompute MR task: MAX_COMPUTE_MR
   * - Spark JAR on MaxCompute: SPARK_JAR_ON_MAX_COMPUTE
   * - Shell task: SHELL
   * - Python task: PYTHON
   * - Perl script: PERL
   * - Check: CHECK
   * - Sync task: DATA_X
   * - Virtual node: VIRTUAL
   * - Resource: IDE_RESOURCE
   * - Function: UDF
   * - Hive SQL task: HIVE_SQL
   * - Hadoop MR task: HADOOP_MR
   * - Spark JAR on Hive task: SPARK_JAR_ON_HIVE
   * - Flink SQL task: FLINK_SQL
   * - Flink SQL template task: FLINK_TEMPLATE_SQL
   * - Stream computing template: STREAM_TEMPLATE
   * - Metatable: META_TABLE
   * - Stream computing function: STREAM_UDF
   * - Real-time Flink DataStream: FLINK_DATASTREAM
   * - Real-time custom data source: STREAM_CUSTOM_DATASOURCE
   * - AnalyticDB for PostgreSQL task: ADB_FOR_PG
   * - TDH SQL task: INCEPTOR_SQL
   * - Mirror table: MIRROR_TABLE
   * - Intermediate table: MIDDLE_TABLE
   * - Application table: APPLICATION_TABLE
   * - Impala SQL task: IMPALA_SQL
   * - Offline pipeline task: OFFLINE_PIPELINE
   * - Real-time pipeline task: REAL_TIME_PIPELINE
   * - Dimension logical table: DIM_LOGICAL_TABLE
   * - Fact logical table: FCT_LOGICAL_TABLE
   * - Business condition: BIZ_CONDITION
   * - Atomic metric: ATOM_INDEX
   * - Derived metric: DERIVED_INDEX
   * - Calculated derived metric: CALC_DERIVED_INDEX
   * - PAI task: PAI_DESIGNER
   * - ArgoDB SQL task: ARGODB_SQL
   * - Hologres SQL task: HOLOGRES_SQL
   * - Impala SQL task: IMPALA_SQL
   * - StarRocks SQL task: STARROCKS_SQL
   * - Database SQL task: DATABASE_SQL
   * - Spark SQL task: SPARK_SQL
   * - Compute template: TASK_TEMPLATE
   * - External trigger node: EXTERNAL_TRIGGER
   * - Gauss SQL task: GAUSS_SQL
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @remarks
   * Object version.
   * 
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @remarks
   * Submission comment.
   * 
   * @example
   * 提交信息
   */
  submitComment?: string;
  /**
   * @remarks
   * Submitter ID.
   * 
   * @example
   * 307999999
   */
  submitter?: string;
  /**
   * @remarks
   * Submitter name.
   * 
   * @example
   * 张三
   */
  submitterName?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      id: 'Id',
      nodeId: 'NodeId',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      projectId: 'ProjectId',
      submitComment: 'SubmitComment',
      submitter: 'Submitter',
      submitterName: 'SubmitterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      id: 'number',
      nodeId: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      projectId: 'string',
      submitComment: 'string',
      submitter: 'string',
      submitterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsResponseBodyListResult extends $dara.Model {
  /**
   * @remarks
   * List of pending deployment records.
   */
  data?: ListSubmitRecordsResponseBodyListResultData[];
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListSubmitRecordsResponseBodyListResultData },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSubmitRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code. OK indicates a successful request.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Query result.
   */
  listResult?: ListSubmitRecordsResponseBodyListResult;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListSubmitRecordsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.listResult && typeof (this.listResult as any).validate === 'function') {
      (this.listResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

