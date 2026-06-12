// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GCSIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * The access key ID for authenticating with the GCS service. This parameter is required.
   * 
   * This parameter is required.
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The secret access key corresponding to the `accessKeyId`. This value is sensitive and must be managed securely.
   * 
   * This parameter is required.
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * A nested object for specifying advanced configuration options as key-value pairs.
   */
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the GCS bucket that contains the source data files.
   * 
   * This parameter is required.
   * 
   * @example
   * gcsbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The compression format of the source files. Supported values are `none`, `gzip`, and `zstd`. If not specified, the system infers the format from the file extension.
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionCodec?: string;
  /**
   * @remarks
   * The character encoding of the source files. The default value is `UTF-8`.
   * 
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * The end of the time range for data ingestion, specified as a Unix timestamp (in seconds). Only objects modified before this time are ingested.
   * 
   * @example
   * 1714360481
   */
  endTime?: number;
  /**
   * @remarks
   * The service endpoint for GCS. You can use a custom endpoint for private or accelerated connections.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * A nested object that defines the format of the source data, such as CSV, JSON, or Parquet.
   * 
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * The interval for checking for new data. Specify the value in a duration format, such as `15m` for 15 minutes. Set to `never` to perform a one-time ingestion.
   * 
   * This parameter is required.
   * 
   * @example
   * never
   */
  interval?: string;
  /**
   * @remarks
   * A regular expression that specifies which files to ingest. The pattern is matched against the full object key within the specified prefix.
   * 
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @remarks
   * The object key prefix used to discover files. This limits the scope of ingestion to a specific "folder" within the bucket.
   * 
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The unique ID of the processor or pipeline that handles the ingested data.
   * 
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * Specifies whether to automatically restore objects from archival storage classes before ingestion. Set to `true` to enable this feature. The default is `false`.
   */
  restoreObjectEnabled?: boolean;
  /**
   * @remarks
   * The start of the time range for data ingestion, specified as a Unix timestamp (in seconds). Only objects modified at or after this time are ingested.
   * 
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of a predefined tag pack to apply to the ingested data. Tag packs contain rules for data enrichment and categorization.
   */
  tagPackId?: boolean;
  /**
   * @remarks
   * The name of the field in your data that contains the timestamp. This timestamp is used as the event time for the ingested records.
   * 
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @remarks
   * The format of the timestamp in the `timeField`, specified using the Java `SimpleDateFormat` pattern. For example: `yyyy-MM-dd\\"T\\"HH:mm:ss.SSSZ`.
   * 
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  timeFormat?: string;
  /**
   * @remarks
   * A regular expression used to extract a timestamp from unstructured data, such as a log entry or filename, if a structured `timeField` is not available.
   * 
   * @example
   * [0-9]{0,2}\\/[0-9a-zA-Z]+\\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @remarks
   * The time zone for parsing timestamps that lack explicit time zone information. Specify a valid time zone identifier, such as `UTC` or `America/Los_Angeles`.
   * 
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      advancedParameters: 'advancedParameters',
      bucket: 'bucket',
      compressionCodec: 'compressionCodec',
      encoding: 'encoding',
      endTime: 'endTime',
      endpoint: 'endpoint',
      format: 'format',
      interval: 'interval',
      pattern: 'pattern',
      prefix: 'prefix',
      processorId: 'processorId',
      restoreObjectEnabled: 'restoreObjectEnabled',
      startTime: 'startTime',
      tagPackId: 'tagPackId',
      timeField: 'timeField',
      timeFormat: 'timeFormat',
      timePattern: 'timePattern',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      advancedParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bucket: 'string',
      compressionCodec: 'string',
      encoding: 'string',
      endTime: 'number',
      endpoint: 'string',
      format: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      interval: 'string',
      pattern: 'string',
      prefix: 'string',
      processorId: 'string',
      restoreObjectEnabled: 'boolean',
      startTime: 'number',
      tagPackId: 'boolean',
      timeField: 'string',
      timeFormat: 'string',
      timePattern: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.advancedParameters) {
      $dara.Model.validateMap(this.advancedParameters);
    }
    if(this.format) {
      $dara.Model.validateMap(this.format);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

