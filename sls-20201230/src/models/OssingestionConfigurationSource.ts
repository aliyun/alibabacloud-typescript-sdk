// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OSSIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ossbucket
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
   * @remarks
   * This parameter is required.
   * 
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
   * true
   */
  restoreObjectEnabled?: boolean;
  /**
   * @example
   * acs:ram::12345:role/aliyunlogdefaultrole
   */
  roleARN?: string;
  /**
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  useMetaIndex?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      compressionCodec: 'compressionCodec',
      encoding: 'encoding',
      endTime: 'endTime',
      endpoint: 'endpoint',
      format: 'format',
      interval: 'interval',
      pattern: 'pattern',
      prefix: 'prefix',
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
      bucket: 'string',
      compressionCodec: 'string',
      encoding: 'string',
      endTime: 'number',
      endpoint: 'string',
      format: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      interval: 'string',
      pattern: 'string',
      prefix: 'string',
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
    if(this.format) {
      $dara.Model.validateMap(this.format);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

