// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The destination database account.
   * 
   * @example
   * test-account
   */
  account?: string;
  /**
   * @remarks
   * The delivery guarantee.
   * 
   * @example
   * ATLEAST / EXACTLY
   */
  consistency?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 2
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * test_kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The list of mapped columns in the destination table.
   */
  destColumns?: string[];
  /**
   * @remarks
   * The destination database name.
   * 
   * @example
   * dest-db
   */
  destDatabase?: string;
  /**
   * @remarks
   * The destination namespace.
   * 
   * @example
   * dest-schema
   */
  destSchema?: string;
  /**
   * @remarks
   * The destination table name.
   * 
   * @example
   * dest-table
   */
  destTable?: string;
  /**
   * @remarks
   * The maximum number of allowed error rows. If data in Kafka does not match the destination AnalyticDB for PostgreSQL table, a write failure occurs. If the number of error rows exceeds this value, the job fails.
   * 
   * @example
   * 5
   */
  errorLimitCount?: number;
  /**
   * @remarks
   * The service status message. For example, if an exception occurs, the cause of the exception is displayed. This parameter is empty when the service is in the Running state.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The fallback offset.
   * 
   * - The FallbackOffset parameter defines the behavior when a consumer does not request a specific offset to consume, or when the requested offset exceeds the offset range recorded in the current Kafka cluster. You can choose to start consuming from the earliest or latest offset.
   * 
   * @example
   * EARLIEST /  LATEST
   */
  fallbackOffset?: string;
  /**
   * @remarks
   * The Kafka group name.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The job configuration file.
   * 
   * @example
   * DATABASE: adbpgss_test
   * USER: adbpgss_test
   * PASSWORD: adbpgssTest
   * HOST: gp-xxx-master.gpdb.rds-aliyun-pre.rds.aliyuncs.com
   * PORT: 5432
   * KAFKA:
   *   INPUT:
   *     SOURCE:
   *       BROKERS: broker1:9092,broker2:9092,broker3:9092
   *       TOPIC: testtopic
   *       FALLBACK_OFFSET: earliest
   *     KEY:
   *       COLUMNS:
   *       - NAME: customer_id
   *         TYPE: int
   *       FORMAT: delimited
   *       DELIMITED_OPTION:
   *         DELIMITER: \\"|\\"
   *     VALUE:
   *       COLUMNS:
   *       - TYPE: integer
   *         NAME: l_orderkey
   *       - TYPE: integer
   *         NAME: l_partkey
   *       - TYPE: integer
   *         NAME: l_suppkey
   *       - TYPE: integer
   *         NAME: l_linenumber
   *       - TYPE: decimal
   *         NAME: l_quantity
   *       - TYPE: decimal
   *         NAME: l_extendedprice
   *       - TYPE: decimal
   *         NAME: l_discount
   *       - TYPE: decimal
   *         NAME: l_tax
   *       - TYPE: char
   *         NAME: l_returnflag
   *       - TYPE: char
   *         NAME: l_linestatus
   *       - TYPE: date
   *         NAME: l_shipdate
   *       - TYPE: date
   *         NAME: l_commitdate
   *       - TYPE: date
   *         NAME: l_receiptdate
   *       - TYPE: text
   *         NAME: l_shipinstruct
   *       - TYPE: text
   *         NAME: l_shipmode
   *       - TYPE: text
   *         NAME: l_comment
   *       FORMAT: delimited
   *       DELIMITED_OPTION:
   *         DELIMITER: \\"|\\"
   *     ERROR_LIMIT: 10
   *   OUTPUT:
   *     SCHEMA: adbpgss_test
   *     TABLE: write_with_insert_plaintext
   *     MODE: MERGE
   *     MATCH_COLUMNS:
   *     - l_orderkey
   *     - l_partkey
   *     - l_suppkey
   *     UPDATE_COLUMNS:
   *     - l_linenumber
   *     - l_quantity
   *     - l_extendedprice
   *     - l_discount
   *     - l_tax
   *     - l_returnflag
   *     - l_linestatus
   *     - l_shipdate
   *     - l_commitdate
   *     - l_receiptdate
   *     - l_shipinstruct
   *     - l_shipmode
   *     - l_comment
   *     MAPPING:
   *     - EXPRESSION: l_orderkey
   *       NAME: l_orderkey
   *     - EXPRESSION: l_partkey
   *       NAME: l_partkey
   *     - EXPRESSION: l_suppkey
   *       NAME: l_suppkey
   *     - EXPRESSION: l_linenumber
   *       NAME: l_linenumber
   *     - EXPRESSION: l_quantity
   *       NAME: l_quantity
   *     - EXPRESSION: l_extendedprice
   *       NAME: l_extendedprice
   *     - EXPRESSION: l_discount
   *       NAME: l_discount
   *     - EXPRESSION: l_tax
   *       NAME: l_tax
   *     - EXPRESSION: l_returnflag
   *       NAME: l_returnflag
   *     - EXPRESSION: l_linestatus
   *       NAME: l_linestatus
   *     - EXPRESSION: l_shipdate
   *       NAME: l_shipdate
   *     - EXPRESSION: l_commitdate
   *       NAME: l_commitdate
   *     - EXPRESSION: l_receiptdate
   *       NAME: l_receiptdate
   *     - EXPRESSION: l_shipinstruct
   *       NAME: l_shipinstruct
   *     - EXPRESSION: l_shipmode
   *       NAME: l_shipmode
   *     - EXPRESSION: l_comment
   *       NAME: l_comment
   *   COMMIT:
   *     MAX_ROW: 1000
   *     MINIMAL_INTERVAL: 1000
   *     CONSISTENCY: ATLEAST
   *   POLL:
   *     BATCHSIZE: 1000
   *     TIMEOUT: 1000
   *   PROPERTIES:
   *     group.id: testgroup
   */
  jobConfig?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * test_job
   */
  jobDescription?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 1
   */
  jobId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The match columns. Typically, these are all primary key columns of the destination table. If the values of all columns in this configuration are the same, the two rows of data are considered duplicate.
   */
  matchColumns?: string[];
  /**
   * @remarks
   * The configuration mode.
   * 1. basic: requires specific configuration fields.
   * 2. professional: supports submitting YAML files.
   * 
   * @example
   * basic/professional
   */
  mode?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2019-09-08T17:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The destination database password.
   * 
   * @example
   * pwd123
   */
  password?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The list of source columns.
   */
  srcColumns?: string[];
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - Init: initializing.
   * 
   * - Running: running.
   * 
   * - Exception: an exception occurred.
   * 
   * - Paused: paused.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The update columns. Typically, these are all non-primary key columns of the destination table. When duplicate data is identified based on the match columns, the values of the update columns are updated so that the new data overwrites the old data.
   */
  updateColumns?: string[];
  /**
   * @remarks
   * The write mode.
   * 
   * @example
   * INSERT/UPDATE/MERGE
   */
  writeMode?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      consistency: 'Consistency',
      createTime: 'CreateTime',
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      destColumns: 'DestColumns',
      destDatabase: 'DestDatabase',
      destSchema: 'DestSchema',
      destTable: 'DestTable',
      errorLimitCount: 'ErrorLimitCount',
      errorMessage: 'ErrorMessage',
      fallbackOffset: 'FallbackOffset',
      groupName: 'GroupName',
      jobConfig: 'JobConfig',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      matchColumns: 'MatchColumns',
      mode: 'Mode',
      modifyTime: 'ModifyTime',
      password: 'Password',
      requestId: 'RequestId',
      srcColumns: 'SrcColumns',
      status: 'Status',
      updateColumns: 'UpdateColumns',
      writeMode: 'WriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      consistency: 'string',
      createTime: 'string',
      dataSourceId: 'string',
      dataSourceName: 'string',
      destColumns: { 'type': 'array', 'itemType': 'string' },
      destDatabase: 'string',
      destSchema: 'string',
      destTable: 'string',
      errorLimitCount: 'number',
      errorMessage: 'string',
      fallbackOffset: 'string',
      groupName: 'string',
      jobConfig: 'string',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      matchColumns: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      modifyTime: 'string',
      password: 'string',
      requestId: 'string',
      srcColumns: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      updateColumns: { 'type': 'array', 'itemType': 'string' },
      writeMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destColumns)) {
      $dara.Model.validateArray(this.destColumns);
    }
    if(Array.isArray(this.matchColumns)) {
      $dara.Model.validateArray(this.matchColumns);
    }
    if(Array.isArray(this.srcColumns)) {
      $dara.Model.validateArray(this.srcColumns);
    }
    if(Array.isArray(this.updateColumns)) {
      $dara.Model.validateArray(this.updateColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

