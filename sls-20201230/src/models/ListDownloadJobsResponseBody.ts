// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDownloadJobsResponseBodyResultsConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
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
   * The download file format.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @remarks
   * The file prefix used when downloading to the user\\"s OSS bucket.
   * 
   * @example
   * download/
   */
  prefix?: string;
  /**
   * @remarks
   * The ARN of the RAM role used for the download.
   * 
   * @example
   * acs:ram::123456:role/aliyunlogimportossrole
   */
  roleArn?: string;
  /**
   * @remarks
   * Fixed value: AliyunOSS.
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
   * Specifies whether to allow downloading incomplete results.
   * 
   * @example
   * false
   */
  allowInComplete?: string;
  /**
   * @remarks
   * The start timestamp, in seconds.
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
   * Indicates whether PowerSQL is enabled.
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
   * The log download task configuration.
   */
  sink?: ListDownloadJobsResponseBodyResultsConfigurationSink;
  /**
   * @remarks
   * The end timestamp, in seconds.
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
   * The file ETag.
   * 
   * @example
   * ETASFGASDASQWDasd
   */
  checkSum?: string;
  /**
   * @remarks
   * The download error message.
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The download execution time.
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * The download result link.
   * 
   * @example
   * https://sls-downloaded-xxxx.csv.gzip?Expiresxxx
   */
  filePath?: string;
  /**
   * @remarks
   * The download file size.
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
   * The notification information.
   * 
   * @example
   * test
   */
  notice?: string;
  /**
   * @remarks
   * The download progress.
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
   * The creation time of the log download task.
   * 
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the log download task.
   * 
   * @example
   * a download job
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * download-123
   */
  displayName?: string;
  /**
   * @remarks
   * The execution details.
   */
  executionDetails?: ListDownloadJobsResponseBodyResultsExecutionDetails;
  /**
   * @remarks
   * The name of the log download task.
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @remarks
   * The task status.
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
   * The number of log download tasks returned in the current request.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The list of log download tasks.
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

