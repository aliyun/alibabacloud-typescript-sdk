// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GCSIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessKeyId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  accessKeySecret?: string;
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * gcsbucket
   */
  bucket?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionCodec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @example
   * 1714360481
   */
  endTime?: number;
  /**
   * @example
   * oss-cn-hangzhou.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * never
   */
  interval?: string;
  /**
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  restoreObjectEnabled?: boolean;
  /**
   * @example
   * 1714274081
   */
  startTime?: number;
  tagPackId?: boolean;
  /**
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  timeFormat?: string;
  /**
   * @example
   * [0-9]{0,2}\/[0-9a-zA-Z]+\/[0-9:,]+
   */
  timePattern?: string;
  /**
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

