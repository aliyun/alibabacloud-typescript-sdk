// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class S3IngestionConfigurationSource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AKIxxxxxxxxxxYJE
   */
  awsAccessKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxxxxxfjf
   */
  awsAccessKeySecret?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ap-northeast-1
   */
  awsRegion?: string;
  /**
   * @example
   * https://sqs.ap-northeast-1.amazonaws.com/123456788/chifan
   */
  awsSQSQueueUrl?: string;
  /**
   * @example
   * false
   */
  awsUseSQS?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * s3bucket
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
   * [0-9]{0,2}\/[0-9a-zA-Z]+\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  /**
   * @example
   * false
   */
  useAwsSQSOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      awsAccessKey: 'awsAccessKey',
      awsAccessKeySecret: 'awsAccessKeySecret',
      awsRegion: 'awsRegion',
      awsSQSQueueUrl: 'awsSQSQueueUrl',
      awsUseSQS: 'awsUseSQS',
      bucket: 'bucket',
      compressionCodec: 'compressionCodec',
      encoding: 'encoding',
      endTime: 'endTime',
      format: 'format',
      interval: 'interval',
      pattern: 'pattern',
      prefix: 'prefix',
      startTime: 'startTime',
      tagPackId: 'tagPackId',
      timeField: 'timeField',
      timeFormat: 'timeFormat',
      timePattern: 'timePattern',
      timeZone: 'timeZone',
      useAwsSQSOnly: 'useAwsSQSOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      awsAccessKey: 'string',
      awsAccessKeySecret: 'string',
      awsRegion: 'string',
      awsSQSQueueUrl: 'string',
      awsUseSQS: 'boolean',
      bucket: 'string',
      compressionCodec: 'string',
      encoding: 'string',
      endTime: 'number',
      format: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      interval: 'string',
      pattern: 'string',
      prefix: 'string',
      startTime: 'number',
      tagPackId: 'boolean',
      timeField: 'string',
      timeFormat: 'string',
      timePattern: 'string',
      timeZone: 'string',
      useAwsSQSOnly: 'boolean',
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

