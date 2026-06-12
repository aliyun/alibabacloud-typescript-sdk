// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSIngestionConfigurationSource extends $dara.Model {
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The compression type of the source files.
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionCodec?: string;
  /**
   * @remarks
   * The encoding of the source files.
   * 
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * Imports only files modified before this time. The value is a Unix timestamp in seconds.
   * 
   * @example
   * 1714360481
   */
  endTime?: number;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Defines the format of the source data.
   * 
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * The check interval for new files.
   * 
   * This parameter is required.
   * 
   * @example
   * never
   */
  interval?: string;
  /**
   * @remarks
   * A regular expression to filter files by path.
   * 
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @remarks
   * The path prefix for filtering files.
   * 
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The ID of the writer processor.
   * 
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * Specifies whether to import archived files.
   * 
   * @example
   * true
   */
  restoreObjectEnabled?: boolean;
  /**
   * @remarks
   * The Role ARN to use for accessing the OSS bucket.
   * 
   * @example
   * acs:ram::12345:role/aliyunlogdefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * Imports only files modified after this time. The value is a Unix timestamp in seconds.
   * 
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to enable context retrieval.
   * 
   * @example
   * true
   */
  tagPackId?: boolean;
  /**
   * @remarks
   * The field containing the log time.
   * 
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @remarks
   * The format of the time field.
   * 
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  timeFormat?: string;
  /**
   * @remarks
   * The regular expression to extract the time value from a log.
   * 
   * @example
   * [0-9]{0,2}\\/[0-9a-zA-Z]+\\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @remarks
   * The time zone of the timestamp in the source data.
   * 
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  /**
   * @remarks
   * Specifies whether to use the OSS metadata index to accelerate file discovery.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  useMetaIndex?: boolean;
  static names(): { [key: string]: string } {
    return {
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
      roleARN: 'roleARN',
      startTime: 'startTime',
      tagPackId: 'tagPackId',
      timeField: 'timeField',
      timeFormat: 'timeFormat',
      timePattern: 'timePattern',
      timeZone: 'timeZone',
      useMetaIndex: 'useMetaIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      roleARN: 'string',
      startTime: 'number',
      tagPackId: 'boolean',
      timeField: 'string',
      timeFormat: 'string',
      timePattern: 'string',
      timeZone: 'string',
      useMetaIndex: 'boolean',
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

