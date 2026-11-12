// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamingJobsResponseBodyJobItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database account.
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
   * The time when the job was created.
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
   * 58
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test-kafka
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The mapped fields in the destination table.
   */
  destColumns?: string[];
  /**
   * @remarks
   * The name of the destination database.
   * 
   * @example
   * dest-db
   */
  destDatabase?: string;
  /**
   * @remarks
   * The name of the destination namespace.
   * 
   * @example
   * dest-schema
   */
  destSchema?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * dest-table
   */
  destTable?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * This parameter is returned only when the return value of **Status** is **false**.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The fallback offset for data consumption.
   * 
   * *   This parameter indicates the starting offset from which data consumption resumes when a consumer does not request a consumption offset or requests a consumption offset that is beyond the range of the offset information recorded in the current Kafka cluster. Valid values: EARLIEST and LATEST.
   * 
   * @example
   * EARLIEST /  LATEST
   */
  fallbackOffset?: string;
  /**
   * @remarks
   * The description of the job.
   * 
   * @example
   * test job
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
   * The name of the job.
   * 
   * @example
   * test-job
   */
  jobName?: string;
  /**
   * @remarks
   * The update condition columns that are used to join the source data and the destination table. Typically, the columns are all the primary key columns of the destination table. If the values of all columns specified by this parameter in different rows are the same, the rows are considered duplicates.
   */
  matchColumns?: string[];
  /**
   * @remarks
   * The configuration mode. Valid values:
   * 
   * 1.  basic: In basic mode, you must configure the configuration parameters.
   * 2.  professional: In professional mode, you can submit a YAML configuration file.
   * 
   * @example
   * Basic / Professional
   */
  mode?: string;
  /**
   * @remarks
   * The time when the job was last modified.
   * 
   * @example
   * 2019-09-08T17:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The password of the database account.
   * 
   * @example
   * pwd123
   */
  password?: string;
  /**
   * @remarks
   * The source fields.
   */
  srcColumns?: string[];
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Init
   * *   Running
   * *   Exception
   * *   Paused
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The columns to be updated if a row of data meets the update condition. Typically, the columns are all non-primary key columns of the destination table. When the columns specified by the MatchColumns parameter are used as conditions to join the source data and the destination table, data in columns of the UpdateColumns type is updated if data is matched.
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
      errorMessage: 'ErrorMessage',
      fallbackOffset: 'FallbackOffset',
      jobDescription: 'JobDescription',
      jobId: 'JobId',
      jobName: 'JobName',
      matchColumns: 'MatchColumns',
      mode: 'Mode',
      modifyTime: 'ModifyTime',
      password: 'Password',
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
      errorMessage: 'string',
      fallbackOffset: 'string',
      jobDescription: 'string',
      jobId: 'string',
      jobName: 'string',
      matchColumns: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      modifyTime: 'string',
      password: 'string',
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

export class ListStreamingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried jobs.
   */
  jobItems?: ListStreamingJobsResponseBodyJobItems[];
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page.
   * 
   * @example
   * 2
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobItems: 'JobItems',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobItems: { 'type': 'array', 'itemType': ListStreamingJobsResponseBodyJobItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobItems)) {
      $dara.Model.validateArray(this.jobItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

