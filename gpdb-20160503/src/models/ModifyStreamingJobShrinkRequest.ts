// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStreamingJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Account name.
   * 
   * @example
   * test-account
   */
  account?: string;
  /**
   * @remarks
   * The delivery guarantee setting.
   * 
   * @example
   * ATLEAST / EXACTLY
   */
  consistency?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * ModifyStreamingJob
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Target data table mapping field list.
   */
  destColumnsShrink?: string;
  /**
   * @remarks
   * Target database name.
   * 
   * @example
   * dest-db
   */
  destDatabase?: string;
  /**
   * @remarks
   * Target schema.
   * 
   * @example
   * dest-schema
   */
  destSchema?: string;
  /**
   * @remarks
   * Target table name.
   * 
   * @example
   * dest-table
   */
  destTable?: string;
  /**
   * @remarks
   * When the data in Kafka does not match the ADBPG target table, it will cause a write failure. This value is the number of error rows allowed; exceeding this will cause the task to fail.
   * 
   * @example
   * 5
   */
  errorLimitCount?: number;
  /**
   * @remarks
   * The fallback offset for data consumption.
   * 
   * *   This parameter specifies the starting offset from which data consumption resumes when a consumer does not request a consumption offset or requests a consumption offset that is beyond the range of the offset information recorded in the current Kafka cluster. You can choose to start data consumption from the earliest or latest offset.
   * 
   * Valid values:
   * *   EARLIEST
   * *   LATEST
   * 
   * @example
   * EARLIEST /  LATEST
   */
  fallbackOffset?: string;
  /**
   * @remarks
   * Kafka group name
   * 
   * @example
   * group_name
   */
  groupName?: string;
  /**
   * @remarks
   * Job configuration file, required for professional mode.
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
   * Job description.
   * 
   * @example
   * test-job
   */
  jobDescription?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  jobId?: number;
  /**
   * @remarks
   * Match columns, usually all primary key columns of the target table. If all column values in this configuration are the same, the two rows of data are considered duplicates.
   */
  matchColumnsShrink?: string;
  /**
   * @remarks
   * Password.
   * 
   * @example
   * pwd123
   */
  password?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) API to view available region IDs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Source data field list.
   */
  srcColumnsShrink?: string;
  /**
   * @remarks
   * Specifies whether to test the real-time job. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  tryRun?: boolean;
  /**
   * @remarks
   * Update columns, usually all non-primary key columns of the target table. When data duplication is determined through MatchColumns, updating the UpdateColumns column values will result in new data overwriting old data.
   */
  updateColumnsShrink?: string;
  /**
   * @remarks
   * The write mode.
   * 
   * Valid values:
   * 
   * *   MERGE
   * *   INSERT
   * *   UPDATE
   * 
   * @example
   * INSERT/UPDATE/MERGE
   */
  writeMode?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      consistency: 'Consistency',
      DBInstanceId: 'DBInstanceId',
      destColumnsShrink: 'DestColumns',
      destDatabase: 'DestDatabase',
      destSchema: 'DestSchema',
      destTable: 'DestTable',
      errorLimitCount: 'ErrorLimitCount',
      fallbackOffset: 'FallbackOffset',
      groupName: 'GroupName',
      jobConfig: 'JobConfig',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      matchColumnsShrink: 'MatchColumns',
      password: 'Password',
      regionId: 'RegionId',
      srcColumnsShrink: 'SrcColumns',
      tryRun: 'TryRun',
      updateColumnsShrink: 'UpdateColumns',
      writeMode: 'WriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      consistency: 'string',
      DBInstanceId: 'string',
      destColumnsShrink: 'string',
      destDatabase: 'string',
      destSchema: 'string',
      destTable: 'string',
      errorLimitCount: 'number',
      fallbackOffset: 'string',
      groupName: 'string',
      jobConfig: 'string',
      jobDescription: 'string',
      jobId: 'number',
      matchColumnsShrink: 'string',
      password: 'string',
      regionId: 'string',
      srcColumnsShrink: 'string',
      tryRun: 'boolean',
      updateColumnsShrink: 'string',
      writeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

