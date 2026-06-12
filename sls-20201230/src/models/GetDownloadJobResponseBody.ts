// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDownloadJobResponseBodyConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The Object Storage Service (OSS) bucket.
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
   * The file format.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @remarks
   * The prefix of the file that is saved to the bucket.
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
   * acs:ram::0123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The value is fixed to AliyunOSS.
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

export class GetDownloadJobResponseBodyConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow downloading incomplete data.
   * 
   * @example
   * true
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * The start time of the download task. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1722409860
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
   * false
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The search statement.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * The export configuration.
   */
  sink?: GetDownloadJobResponseBodyConfigurationSink;
  /**
   * @remarks
   * The end time of the download task. The value is a UNIX timestamp in seconds.
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
      allowInComplete: 'boolean',
      fromTime: 'number',
      logstore: 'string',
      powerSql: 'boolean',
      query: 'string',
      sink: GetDownloadJobResponseBodyConfigurationSink,
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

export class GetDownloadJobResponseBodyExecutionDetails extends $dara.Model {
  /**
   * @remarks
   * The ETag of the file.
   * 
   * @example
   * EXSFGSDASDASDG123ASD
   */
  checkSum?: string;
  /**
   * @remarks
   * The error message if the download fails.
   * 
   * @example
   * timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The duration of the download task in seconds.
   * 
   * @example
   * 123
   */
  executeTime?: number;
  /**
   * @remarks
   * The URL of the download result.
   * 
   * @example
   * https://xxx.csv.zst?xxx
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
   * Notification text.
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

export class GetDownloadJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The download configuration.
   */
  configuration?: GetDownloadJobResponseBodyConfiguration;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1722411060
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the task.
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
   * download-123456
   */
  displayName?: string;
  /**
   * @remarks
   * The execution details.
   */
  executionDetails?: GetDownloadJobResponseBodyExecutionDetails;
  /**
   * @remarks
   * The name of the download task.
   * 
   * @example
   * download-123
   */
  name?: string;
  /**
   * @remarks
   * The status of the download task.
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
      configuration: GetDownloadJobResponseBodyConfiguration,
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      executionDetails: GetDownloadJobResponseBodyExecutionDetails,
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

