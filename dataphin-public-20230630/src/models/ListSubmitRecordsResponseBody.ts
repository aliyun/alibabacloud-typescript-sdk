// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSubmitRecordsResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * The change type. Valid values:
   * - 0: create
   * - 1: update
   * - 2: delete
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * The time when the record was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the record was updated. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @remarks
   * The ID of the pending publish record.
   * 
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * Object A
   */
  objectName?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * - MAX_COMPUTE_SQL: MaxCompute SQL node
   * - MAX_COMPUTE_MR: MaxCompute MR node
   * - SPARK_JAR_ON_MAX_COMPUTE: Spark JAR on MaxCompute node
   * - SHELL: Shell node
   * - PYTHON: Python node
   * - PERL: Perl script
   * - CHECK: Check node
   * - DATA_X: Data synchronization node
   * - VIRTUAL: Virtual node
   * - IDE_RESOURCE: Resource
   * - UDF: Function
   * - HIVE_SQL: Hive SQL node
   * - HADOOP_MR: Hadoop MR node
   * - SPARK_JAR_ON_HIVE: Spark JAR on Hive node
   * - FLINK_SQL: Flink SQL node
   * - FLINK_TEMPLATE_SQL: Flink SQL template node
   * - STREAM_TEMPLATE: Stream computing template
   * - META_TABLE: Metatable
   * - STREAM_UDF: Stream computing function
   * - FLINK_DATASTREAM: Real-time Flink DataStream node
   * - STREAM_CUSTOM_DATASOURCE: Real-time custom data source
   * - ADB_FOR_PG: AnalyticDB for PostgreSQL node
   * - INCEPTOR_SQL: Inceptor SQL node
   * - MIRROR_TABLE: Mirror table
   * - MIDDLE_TABLE: Intermediate table
   * - APPLICATION_TABLE: Application table
   * - IMPALA_SQL: Impala SQL node
   * - OFFLINE_PIPELINE: Offline pipeline node
   * - REAL_TIME_PIPELINE: Real-time pipeline node
   * - DIM_LOGICAL_TABLE: Logical dimension table
   * - FCT_LOGICAL_TABLE: Logical fact table
   * - BIZ_CONDITION: Business filter
   * - ATOM_INDEX: Atomic metric
   * - DERIVED_INDEX: Derived metric
   * - CALC_DERIVED_INDEX: Derivative metric
   * - PAI_DESIGNER: PAI Designer node
   * - ARGODB_SQL: ArgoDB SQL node
   * - HOLOGRES_SQL: Hologres SQL node
   * - IMPALA_SQL: Impala SQL node
   * - STARROCKS_SQL: StarRocks SQL node
   * - DATABASE_SQL: Database SQL node
   * - SPARK_SQL: Spark SQL node
   * - TASK_TEMPLATE: Task template
   * - EXTERNAL_TRIGGER: External trigger node
   * - GAUSS_SQL: Gauss SQL node
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @remarks
   * The version of the object.
   * 
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @remarks
   * The submission comment.
   * 
   * @example
   * Submission comment
   */
  submitComment?: string;
  /**
   * @remarks
   * The ID of the submitter.
   * 
   * @example
   * 307999999
   */
  submitter?: string;
  /**
   * @remarks
   * The name of the submitter.
   * 
   * @example
   * Zhang San
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
   * The list of pending publish records.
   */
  data?: ListSubmitRecordsResponseBodyListResultData[];
  /**
   * @remarks
   * The total count.
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
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The query result.
   */
  listResult?: ListSubmitRecordsResponseBodyListResult;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

