// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AzureBlobIngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * The access key for the Azure Blob Storage account.
   * 
   * This parameter is required.
   * 
   * @example
   * dGVzdGtleQ==
   */
  accountKey?: string;
  /**
   * @remarks
   * The name of the Azure Blob Storage account.
   * 
   * This parameter is required.
   * 
   * @example
   * test001
   */
  accountName?: string;
  /**
   * @remarks
   * Advanced configuration options.
   */
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * The compression codec for the source data. Valid values are `none`, `snappy`, and `gzip`.
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionCodec?: string;
  /**
   * @remarks
   * The name of the container in Azure Blob Storage.
   * 
   * This parameter is required.
   * 
   * @example
   * test-container
   */
  containerName?: string;
  /**
   * @remarks
   * The character encoding of the source files.
   * 
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * Ingests only files modified before this time, specified as a Unix timestamp.
   * 
   * @example
   * 1714360481
   */
  endTime?: number;
  /**
   * @remarks
   * The service endpoint for Azure Blob Storage.
   * 
   * @example
   * https://your-storage.blob.core.windows.net
   */
  endpoint?: string;
  /**
   * @remarks
   * The format of the source data.
   * 
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * The interval at which to check for new files to ingest.
   * 
   * This parameter is required.
   * 
   * @example
   * 30m
   */
  interval?: string;
  /**
   * @remarks
   * A pattern used to filter files by path.
   * 
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @remarks
   * The file path prefix used to filter files.
   * 
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @remarks
   * The ID of the processor that receives the data.
   * 
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * Ingests only files modified after this time, specified as a Unix timestamp.
   * 
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to enable context query.
   * 
   * @example
   * false
   */
  tagPackId?: boolean;
  /**
   * @remarks
   * The source field for the time value.
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
   * The pattern used to extract the time value.
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

