// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The read/write type of the events to be delivered.
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
   * ARN of the Big Data Compute Service project for tracking delivery.
   * 
   * @example
   * acs:odps:cn-hangzhou:151266687691****:project/actiontrail_****
   */
  maxComputeProjectArn?: string;
  /**
   * @remarks
   * The ARN of the role that Operation Audit assumes when delivering operation events to the Big Data Compute Service project.
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
   * The name of the OSS bucket to which events are to be delivered.
   * 
   * @example
   * audit-log
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The prefix of the log files to be stored in the destination OSS bucket.
   * 
   * @example
   * at-product-account-audit-B
   */
  ossKeyPrefix?: string;
  /**
   * @remarks
   * The ARN of the service-linked role that is assumed by ActionTrail to deliver events to the destination OSS bucket.
   * 
   * @example
   * acs:ram::***:role/aliyunserviceroleforactiontrail
   */
  ossWriteRoleArn?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 442DDADF-DA58-4029-8E8B-82C73E9A7A70
   */
  requestId?: string;
  /**
   * @remarks
   * The ARN of the Log Service project to which events are to be delivered.
   * 
   * @example
   * acs:log:cn-hangzhou:151266687691****:project/test-project
   */
  slsProjectArn?: string;
  /**
   * @remarks
   * The ARN of the service-linked role that is assumed by ActionTrail to deliver events to the destination Log Service project.
   * 
   * @example
   * acs:ram::***:role/aliyunserviceroleforactiontrail
   */
  slsWriteRoleArn?: string;
  /**
   * @remarks
   * The one or more regions from which the trail delivers events.
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

