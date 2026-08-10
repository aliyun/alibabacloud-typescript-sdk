// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadJobRequestConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * oss-test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The compression format. Valid values: zstd, lz4, gzip, none.
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionType?: string;
  /**
   * @remarks
   * The download file format. Valid values: csv, json.
   * 
   * This parameter is required.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @remarks
   * The path prefix for downloading data to the user\\"s OSS bucket.
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
   * acs:ram::0123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * Fixed value: AliyunOSS.
   * 
   * This parameter is required.
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

export class CreateDownloadJobRequestConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow downloading imprecise results. Valid values: true, false.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowInComplete?: boolean;
  /**
   * @remarks
   * The start timestamp, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1722406260
   */
  fromTime?: number;
  /**
   * @remarks
   * The source Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * Specifies whether to enable PowerSQL. Valid values: true, false.
   * 
   * @example
   * true
   */
  powerSql?: boolean;
  /**
   * @remarks
   * The query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * * | select *
   */
  query?: string;
  /**
   * @remarks
   * The export configuration.
   * 
   * This parameter is required.
   */
  sink?: CreateDownloadJobRequestConfigurationSink;
  /**
   * @remarks
   * The end timestamp, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1722409860
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
      sink: CreateDownloadJobRequestConfigurationSink,
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

export class CreateDownloadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The download configuration.
   * 
   * This parameter is required.
   */
  configuration?: CreateDownloadJobRequestConfiguration;
  /**
   * @remarks
   * The description of the log download task.
   * 
   * @example
   * Log download task
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * This parameter is required.
   * 
   * @example
   * download-123456789
   */
  displayName?: string;
  /**
   * @remarks
   * The job name. The naming rules are as follows:
   * 
   * Job names must be unique within the same project.
   * * The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
   * * The name must start and end with a lowercase letter or digit.
   * * The name must be 2 to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * download-123
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: CreateDownloadJobRequestConfiguration,
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

