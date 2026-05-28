// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSIngestionConfigurationSource extends $dara.Model {
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * The OSS bucket.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbucket
   */
  bucket?: string;
  /**
   * @remarks
   * The compression type.
   * 
   * This parameter is required.
   * 
   * @example
   * none,snappy,gzip
   */
  compressionCodec?: string;
  /**
   * @remarks
   * The encoding type.
   * 
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * The point in time before which modified OSS objects are imported.
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
   * The format.
   * 
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * The interval at which the system checks for new files.
   * 
   * This parameter is required.
   * 
   * @example
   * never
   */
  interval?: string;
  /**
   * @remarks
   * The regular expression that is used to filter OSS objects by directory.
   * 
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @remarks
   * The directory of the OSS objects.
   * 
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * Specifies whether to import OSS objects of the Archive class.
   * 
   * @example
   * true
   */
  restoreObjectEnabled?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role.
   * 
   * @example
   * acs:ram::12345:role/aliyunlogdefaultrole
   */
  roleARN?: string;
  /**
   * @remarks
   * The point in time after which modified OSS objects are imported.
   * 
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @example
   * true
   */
  tagPackId?: boolean;
  /**
   * @remarks
   * The time field to extract.
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
   * The regular expression that is used to extract time.
   * 
   * @example
   * [0-9]{0,2}\\/[0-9a-zA-Z]+\\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @remarks
   * The time zone of the time field.
   * 
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  /**
   * @remarks
   * Specifies whether to enable OSS metadata indexing.
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

