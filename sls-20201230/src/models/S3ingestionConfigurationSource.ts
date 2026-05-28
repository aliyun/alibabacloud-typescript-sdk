// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class S3IngestionConfigurationSource extends $dara.Model {
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * aws access key
   * 
   * This parameter is required.
   * 
   * @example
   * AKIxxxxxxxxxxYJE
   */
  awsAccessKey?: string;
  /**
   * @remarks
   * aws access key secret
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxxxxxfjf
   */
  awsAccessKeySecret?: string;
  /**
   * @remarks
   * s3 region
   * 
   * This parameter is required.
   * 
   * @example
   * ap-northeast-1
   */
  awsRegion?: string;
  /**
   * @remarks
   * sqs queue url
   * 
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
   * s3 bucket
   * 
   * This parameter is required.
   * 
   * @example
   * s3bucket
   */
  bucket?: string;
  cloudFrontEndpoint?: string;
  cloudFrontToken?: string;
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
   * s3 endpoint
   * 
   * @example
   * s3.us-east-1.amazonaws.com
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
  /**
   * @example
   * false
   */
  useAwsSQSOnly?: boolean;
  useCloudFront?: boolean;
  static names(): { [key: string]: string } {
    return {
      advancedParameters: 'advancedParameters',
      awsAccessKey: 'awsAccessKey',
      awsAccessKeySecret: 'awsAccessKeySecret',
      awsRegion: 'awsRegion',
      awsSQSQueueUrl: 'awsSQSQueueUrl',
      awsUseSQS: 'awsUseSQS',
      bucket: 'bucket',
      cloudFrontEndpoint: 'cloudFrontEndpoint',
      cloudFrontToken: 'cloudFrontToken',
      compressionCodec: 'compressionCodec',
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
      useAwsSQSOnly: 'useAwsSQSOnly',
      useCloudFront: 'useCloudFront',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      awsAccessKey: 'string',
      awsAccessKeySecret: 'string',
      awsRegion: 'string',
      awsSQSQueueUrl: 'string',
      awsUseSQS: 'boolean',
      bucket: 'string',
      cloudFrontEndpoint: 'string',
      cloudFrontToken: 'string',
      compressionCodec: 'string',
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
      useAwsSQSOnly: 'boolean',
      useCloudFront: 'boolean',
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

