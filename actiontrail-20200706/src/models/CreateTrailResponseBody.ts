// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The read/write type of events that the trail delivers.
   * 
   * @example
   * Write
   */
  eventRW?: string;
  /**
   * @remarks
   * The home region of the trail.
   * 
   * @example
   * cn-hangzhou
   */
  homeRegion?: string;
  /**
   * @remarks
   * The ARN of the MaxCompute project to which the trail delivers events.
   * 
   * @example
   * acs:odps:cn-hangzhou:151266687691****:project/actiontrail_****
   */
  maxComputeProjectArn?: string;
  /**
   * @remarks
   * The ARN of the RAM role that ActionTrail assumes to deliver events to the MaxCompute project.
   * 
   * @example
   * acs:ram::151266687691****:role/aliyunserviceroleforactiontrail
   */
  maxComputeWriteRoleArn?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * @example
   * trail-test
   */
  name?: string;
  /**
   * @remarks
   * The name of the destination OSS bucket.
   * 
   * @example
   * audit-log
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The prefix for the names of log files in the OSS bucket.
   * 
   * @example
   * at-product-account-audit-B
   */
  ossKeyPrefix?: string;
  /**
   * @remarks
   * The ARN of the RAM role that ActionTrail assumes to deliver events to the OSS bucket.
   * 
   * @example
   * acs:ram::151266687691****:role/aliyunserviceroleforactiontrail
   */
  ossWriteRoleArn?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 442DDADF-DA58-4029-8E8B-82C73E9A7A70
   */
  requestId?: string;
  /**
   * @remarks
   * The ARN of the SLS project to which the trail delivers events.
   * 
   * @example
   * acs:log:cn-hangzhou:151266687691****:project/test-project
   */
  slsProjectArn?: string;
  /**
   * @remarks
   * The ARN of the RAM role that ActionTrail assumes to deliver events to the SLS project.
   * 
   * @example
   * acs:ram::151266687691****:role/aliyunserviceroleforactiontrail
   */
  slsWriteRoleArn?: string;
  /**
   * @remarks
   * The region in which the trail is created. A value of `All` indicates that the trail processes events from all regions.
   * 
   * @example
   * All
   */
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      eventRW: 'EventRW',
      homeRegion: 'HomeRegion',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      requestId: 'RequestId',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRW: 'string',
      homeRegion: 'string',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      requestId: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      trailRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

