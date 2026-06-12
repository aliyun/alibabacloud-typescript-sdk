// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadJobsResponseBodyResultsConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The destination OSS bucket.
   * 
   * @example
   * ali-test-oss-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The compression format.
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * The file format of the downloaded file.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @remarks
   * The prefix of the object that is downloaded to the destination OSS bucket.
   * 
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is used for the download.
   * 
   * @example
   * acs:ram::123456:role/aliyunlogimportossrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The type of the sink. The value is fixed as AliyunOSS.
   * 
   * @example
   * AliyunOSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionType: 'compressionType',
      contentType: 'contentType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      compressionType: 'string',
      contentType: 'string',
      prefix: 'string',
      roleArn: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResultsConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the download of incomplete results.
   * 
   * @example
   * false
   */
  allowInComplete?: string;
  /**
   * @remarks
   * The start time of the query. This is a UNIX timestamp that is accurate to the second.
   * 
   * @example
   * 1722409260
   */
  fromTime?: number;
  /**
   * @remarks
   * The source Logstore.
   * 
   * @example
   * ali-test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * Specifies whether to enable PowerSQL.
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * The sink configuration.
   */
  sink?: ListDownloadJobsResponseBodyResultsConfigurationSink;
  /**
   * @remarks
   * The end time of the query. This is a UNIX timestamp that is accurate to the second.
   * 
   * @example
   * 1722411060
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowInComplete: 'allowInComplete',
      fromTime: 'fromTime',
      logstore: 'logstore',
      powerSql: 'powerSql',
      query: 'query',
      sink: 'sink',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInComplete: 'string',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: ListDownloadJobsResponseBodyResultsConfigurationSink,
      toTime: 'number',
    };
  }

  validate() {
    if(this.sink && typeof (this.sink as any).validate === 'function') {
      (this.sink as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResultsExecutionDetails extends $dara.Model {
  /**
   * @remarks
   * The ETag of the file.
   * 
   * @example
   * ETASFGASDASQWDasd
   */
  checkSum?: string;
  /**
   * @remarks
   * The error message that is returned if the job fails.
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The running time of the download.
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * The URL of the downloaded file.
   * 
   * @example
   * https://sls-downloaded-xxxx.csv.gzip?Expiresxxx
   */
  filePath?: string;
  /**
   * @remarks
   * The size of the downloaded file in bytes.
   * 
   * @example
   * 123456
   */
  fileSize?: number;
  /**
   * @remarks
   * The number of downloaded log entries.
   * 
   * @example
   * 123
   */
  logCount?: number;
  /**
   * @remarks
   * The notification message.
   * 
   * @example
   * test
   */
  notice?: string;
  /**
   * @remarks
   * The download progress as a percentage.
   * 
   * @example
   * 100
   */
  progress?: number;
  static names(): { [key: string]: string } {
    return {
      checkSum: 'checkSum',
      errorMessage: 'errorMessage',
      executeTime: 'executeTime',
      filePath: 'filePath',
      fileSize: 'fileSize',
      logCount: 'logCount',
      notice: 'notice',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkSum: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      filePath: 'string',
      fileSize: 'number',
      logCount: 'number',
      notice: 'string',
      progress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The download configuration.
   */
  configuration?: ListDownloadJobsResponseBodyResultsConfiguration;
  /**
   * @remarks
   * The time when the log download job was created. This is a UNIX timestamp in seconds.
   * 
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the log download job.
   * 
   * @example
   * a download job
   */
  description?: string;
  /**
   * @remarks
   * Display name
   * 
   * @example
   * download-123
   */
  displayName?: string;
  /**
   * @remarks
   * The execution details of the job.
   */
  executionDetails?: ListDownloadJobsResponseBodyResultsExecutionDetails;
  /**
   * @remarks
   * The name of the log download job.
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @remarks
   * The status of the Job.
   * 
   * @example
   * STARTING、RUNNING、SUCCEEDED、ERROR
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      executionDetails: 'executionDetails',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: ListDownloadJobsResponseBodyResultsConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: ListDownloadJobsResponseBodyResultsExecutionDetails,
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    if(this.executionDetails && typeof (this.executionDetails as any).validate === 'function') {
      (this.executionDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of log download jobs returned in the current response.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * An array that contains the list of log download jobs.
   */
  results?: ListDownloadJobsResponseBodyResults[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      results: 'results',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      results: { 'type': 'array', 'itemType': ListDownloadJobsResponseBodyResults },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

