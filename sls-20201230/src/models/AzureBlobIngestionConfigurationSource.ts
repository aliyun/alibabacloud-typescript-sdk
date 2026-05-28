// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AzureBlobIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dGVzdGtleQ==
   */
  accountKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test001
   */
  accountName?: string;
  advancedParameters?: { [key: string]: any };
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
   * test-container
   */
  containerName?: string;
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
   * https://your-storage.blob.core.windows.net
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
   * 30m
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
  /**
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @example
   * false
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
   * [0-9]{0,2}\\/[0-9a-zA-Z]+\\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      accountKey: 'accountKey',
      accountName: 'accountName',
      advancedParameters: 'advancedParameters',
      compressionCodec: 'compressionCodec',
      containerName: 'containerName',
      encoding: 'encoding',
      endTime: 'endTime',
      endpoint: 'endpoint',
      format: 'format',
      interval: 'interval',
      pattern: 'pattern',
      prefix: 'prefix',
      processorId: 'processorId',
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
      accountKey: 'string',
      accountName: 'string',
      advancedParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      compressionCodec: 'string',
      containerName: 'string',
      encoding: 'string',
      endTime: 'number',
      endpoint: 'string',
      format: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      interval: 'string',
      pattern: 'string',
      prefix: 'string',
      processorId: 'string',
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

