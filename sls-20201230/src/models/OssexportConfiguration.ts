// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSExportConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The name of the destination OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * my-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The time in seconds to buffer data before exporting. The value must be an integer from 300 to 900.
   * 
   * @example
   * 300
   */
  bufferInterval?: number;
  /**
   * @remarks
   * The amount of data in MB to buffer before exporting. The value must be an integer from 5 to 256.
   * 
   * @example
   * 256
   */
  bufferSize?: number;
  /**
   * @remarks
   * The compression type for the exported files. Valid values: `snappy`, `gzip`, `zstd`, and `none` (no compression).
   * 
   * @example
   * snappy
   */
  compressionType?: string;
  /**
   * @remarks
   * Format-specific settings. The structure of this JSON object depends on the `contentType` value.
   */
  contentDetail?: { [key: string]: any };
  /**
   * @remarks
   * The format of the files stored in OSS. Valid values: `json`, `parquet`, `csv`, and `orc`.
   * 
   * @example
   * csv
   */
  contentType?: string;
  /**
   * @remarks
   * The delivery delay.
   * 
   * > - This parameter is deprecated.
   * 
   * @example
   * 123
   * 
   * @deprecated
   */
  delaySec?: number;
  /**
   * @remarks
   * The delivery delay, in seconds. This value cannot exceed the data retention period of the source Logstore.
   * 
   * @example
   * 900
   */
  delaySeconds?: number;
  /**
   * @remarks
   * - For Object Storage Service (OSS): The OSS internal endpoint. You must use an endpoint in the same region as the Logstore. For more information, see [OSS access domains and data centers](https://help.aliyun.com/document_detail/31837.html). The endpoint must use the HTTPS protocol.
   * 
   * - For OSS-HDFS: The OSS-HDFS internal endpoint. You must use an endpoint in the same region as the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * https://oss-cn-hangzhou-internal.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The path format for exported files. For more information, see [Path format](https://help.aliyun.com/document_detail/371934.html).
   * 
   * This parameter is required.
   * 
   * @example
   * %Y/%m/%d/%H/%M
   */
  pathFormat?: string;
  /**
   * @remarks
   * The type of the path format.
   * 
   * This parameter is required.
   * 
   * @example
   * time
   */
  pathFormatType?: string;
  /**
   * @remarks
   * The prefix for files exported to the OSS bucket.
   * 
   * @example
   * prefix-demo/
   */
  prefix?: string;
  /**
   * @remarks
   * The ARN of the RAM role that Log Service assumes to write data to the OSS bucket. You must specify the ARN of your role.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::1234567890:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The suffix for the exported files.
   * 
   * @example
   * .json
   */
  suffix?: string;
  /**
   * @remarks
   * The time zone used for the path format. For more information, see [Time zones](https://help.aliyun.com/document_detail/375323.html).
   * 
   * @example
   * +0800
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      bufferInterval: 'bufferInterval',
      bufferSize: 'bufferSize',
      compressionType: 'compressionType',
      contentDetail: 'contentDetail',
      contentType: 'contentType',
      delaySec: 'delaySec',
      delaySeconds: 'delaySeconds',
      endpoint: 'endpoint',
      pathFormat: 'pathFormat',
      pathFormatType: 'pathFormatType',
      prefix: 'prefix',
      roleArn: 'roleArn',
      suffix: 'suffix',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      bufferInterval: 'number',
      bufferSize: 'number',
      compressionType: 'string',
      contentDetail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      contentType: 'string',
      delaySec: 'number',
      delaySeconds: 'number',
      endpoint: 'string',
      pathFormat: 'string',
      pathFormatType: 'string',
      prefix: 'string',
      roleArn: 'string',
      suffix: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.contentDetail) {
      $dara.Model.validateMap(this.contentDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSExportConfiguration extends $dara.Model {
  /**
   * @remarks
   * The start time for the export, specified as a Unix timestamp. Set to 1 to export from the earliest available data in the Logstore.
   * 
   * @example
   * 1718380800
   */
  fromTime?: number;
  /**
   * @remarks
   * The name of the source Logstore.
   * 
   * @example
   * my-logstore
   */
  logstore?: string;
  /**
   * @remarks
   * The ARN of the Resource Access Management (RAM) role that Log Service assumes to read data from the Logstore. You must specify the ARN of your role.
   * 
   * @example
   * acs:ram::1234567890:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The configuration of the destination OSS sink.
   */
  sink?: OSSExportConfigurationSink;
  sourceSecureTransport?: boolean;
  /**
   * @remarks
   * The end time for the export, specified as a Unix timestamp. Set to 0 to run the task continuously until it is stopped.
   * 
   * @example
   * 1718380800
   */
  toTime?: number;
  static names(): { [key: string]: string } {
    return {
      fromTime: 'fromTime',
      logstore: 'logstore',
      roleArn: 'roleArn',
      sink: 'sink',
      sourceSecureTransport: 'sourceSecureTransport',
      toTime: 'toTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTime: 'number',
      logstore: 'string',
      roleArn: 'string',
      sink: OSSExportConfigurationSink,
      sourceSecureTransport: 'boolean',
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

