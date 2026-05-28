// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSExportConfigurationSink extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * test-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The interval between two data shipping operations. Valid values: 300 to 900. Unit: seconds.
   * 
   * @example
   * 300
   */
  bufferInterval?: number;
  /**
   * @remarks
   * The size of the OSS object to which data is shipped. Valid values: 5 to 256. Unit: MB.
   * 
   * @example
   * 256
   */
  bufferSize?: number;
  /**
   * @remarks
   * The compression type. Valid values: snappy, gizp, zstd, and none.
   * 
   * @example
   * snappy/gizp/zstd/none
   */
  compressionType?: string;
  /**
   * @remarks
   * The details of the OSS object. Note: The value of this parameter is in the JSON format and varies based on the value of contentType.
   */
  contentDetail?: { [key: string]: any };
  /**
   * @remarks
   * The storage format of the OSS object. Valid values: json, parquet, csv, and orc.
   * 
   * @example
   * json/parquet/csv/orc
   */
  contentType?: string;
  /**
   * @remarks
   * The latency of data shipping.
   * 
   * > 
   * 
   * *   This parameter is deprecated.
   * 
   * @example
   * 123
   * 
   * @deprecated
   */
  delaySec?: number;
  /**
   * @remarks
   * The latency of data shipping. The value of this parameter cannot exceed the data retention period of the source Logstore.
   * 
   * @example
   * 900
   */
  delaySeconds?: number;
  /**
   * @remarks
   * *   The endpoint that is used to access OSS. You can specify only an internal OSS endpoint for the region where the Simple Log Service project resides. The value is in the `http://+OSS endpoint` format. For more information, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * *   The endpoint that is used to access OSS-HDFS. You can specify only an internal OSS-HDFS endpoint for the region where the Simple Log Service project resides.
   * 
   * This parameter is required.
   * 
   * @example
   * http://xxxxxxxx
   */
  endpoint?: string;
  /**
   * @remarks
   * The partition format. For more information, see [Partition formats](https://help.aliyun.com/document_detail/371934.html).
   * 
   * This parameter is required.
   * 
   * @example
   * %Y_%m_%d/good/bad
   */
  pathFormat?: string;
  /**
   * @remarks
   * The partition format type.
   * 
   * This parameter is required.
   * 
   * @example
   * only support time
   */
  pathFormatType?: string;
  /**
   * @remarks
   * The prefix of the OSS object.
   * 
   * @example
   * prefixxxx/
   */
  prefix?: string;
  /**
   * @remarks
   * The ARN of the RAM role that is used to write data to OSS.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::xxxxxxx
   */
  roleArn?: string;
  /**
   * @remarks
   * The suffix of the OSS object.
   * 
   * @example
   * .json
   */
  suffix?: string;
  /**
   * @remarks
   * The time zone. For more information, see [Time zones](https://help.aliyun.com/document_detail/375323.html).
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
   * The beginning of the time range to ship data. The value 1 specifies that the data shipping job ships data from the first log in the Logstore.
   * 
   * @example
   * 123456789
   */
  fromTime?: number;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * logstore-demo
   */
  logstore?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that is used to read data from Simple Log Service.
   * 
   * @example
   * acs:ram::123456789:role/aliyunlogdefaultrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The configurations of the OSS data shipping job.
   */
  sink?: OSSExportConfigurationSink;
  sourceSecureTransport?: boolean;
  /**
   * @remarks
   * The end of the time range to ship data. The value 0 specifies that the data shipping job continuously ships data until the job is manually stopped.
   * 
   * @example
   * 123456789
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

