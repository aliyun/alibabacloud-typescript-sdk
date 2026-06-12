// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class S3IngestionConfigurationSource extends $dara.Model {
  advancedParameters?: { [key: string]: any };
  /**
   * @remarks
   * Amazon Web Services (AWS) access key ID
   * 
   * This parameter is required.
   * 
   * @example
   * AKIxxxxxxxxxxYJE
   */
  awsAccessKey?: string;
  /**
   * @remarks
   * Amazon Web Services (AWS) secret access key
   * 
   * This parameter is required.
   * 
   * @example
   * 123xxxxxxxxxxfjf
   */
  awsAccessKeySecret?: string;
  /**
   * @remarks
   * Amazon S3 region
   * 
   * This parameter is required.
   * 
   * @example
   * ap-northeast-1
   */
  awsRegion?: string;
  /**
   * @remarks
   * Amazon SQS queue URL
   * 
   * @example
   * https://sqs.ap-northeast-1.amazonaws.com/123456788/chifan
   */
  awsSQSQueueUrl?: string;
  /**
   * @remarks
   * Specifies whether to use SQS.
   * 
   * @example
   * false
   */
  awsUseSQS?: boolean;
  /**
   * @remarks
   * Amazon S3 bucket name
   * 
   * This parameter is required.
   * 
   * @example
   * s3bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The endpoint for the CloudFront distribution.
   * 
   * @example
   * dtfsb7voqy76q.cloudfront.net
   */
  cloudFrontEndpoint?: string;
  /**
   * @remarks
   * The authentication token for accessing the CloudFront endpoint.
   * 
   * @example
   * @test-s3-access/ABS
   */
  cloudFrontToken?: string;
  /**
   * @remarks
   * Compression codec. Valid values: none, snappy, gzip
   * 
   * This parameter is required.
   * 
   * @example
   * none
   */
  compressionCodec?: string;
  /**
   * @remarks
   * Character encoding
   * 
   * This parameter is required.
   * 
   * @example
   * UTF-8
   */
  encoding?: string;
  /**
   * @remarks
   * Include only files modified before this Unix timestamp
   * 
   * @example
   * 1714360481
   */
  endTime?: number;
  /**
   * @remarks
   * Amazon S3 endpoint
   * 
   * @example
   * s3.us-east-1.amazonaws.com
   */
  endpoint?: string;
  /**
   * @remarks
   * Format
   * 
   * This parameter is required.
   */
  format?: { [key: string]: any };
  /**
   * @remarks
   * Polling interval for new files
   * 
   * This parameter is required.
   * 
   * @example
   * 30m
   */
  interval?: string;
  /**
   * @remarks
   * Regular expression to filter file paths
   * 
   * @example
   * .*
   */
  pattern?: string;
  /**
   * @remarks
   * Prefix to filter file paths
   * 
   * @example
   * prefix
   */
  prefix?: string;
  /**
   * @remarks
   * Ingest processor ID
   * 
   * @example
   * ingest-processor-1756802123-953901
   */
  processorId?: string;
  /**
   * @remarks
   * Include only files modified after this Unix timestamp
   * 
   * @example
   * 1714274081
   */
  startTime?: number;
  /**
   * @remarks
   * Enable context browsing
   * 
   * @example
   * false
   */
  tagPackId?: boolean;
  /**
   * @remarks
   * Name of the field that contains event timestamps
   * 
   * @example
   * __time__
   */
  timeField?: string;
  /**
   * @remarks
   * Timestamp format in the time field
   * 
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  timeFormat?: string;
  /**
   * @remarks
   * Regular expression to extract timestamps from file names or content
   * 
   * @example
   * [0-9]{0,2}\\/[0-9a-zA-Z]+\\/[0-9:,]+
   */
  timePattern?: string;
  /**
   * @remarks
   * Time zone for the time field
   * 
   * @example
   * GMT+08:00
   */
  timeZone?: string;
  /**
   * @remarks
   * Use only Amazon SQS to detect new files
   * 
   * @example
   * false
   */
  useAwsSQSOnly?: boolean;
  /**
   * @remarks
   * Specifies whether to access S3 through a CloudFront distribution.
   */
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

