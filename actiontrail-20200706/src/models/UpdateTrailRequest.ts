// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrailRequest extends $dara.Model {
  /**
   * @remarks
   * The read/write type of the events to be delivered. Valid values:
   * 
   * *   Write: write events. It is the default value.
   * *   Read: read events.
   * *   All: read and write events.
   * 
   * @example
   * All
   */
  eventRW?: string;
  /**
   * @remarks
   * The ARN of the MaxCompute project to which you want to deliver events.
   * 
   * >  The name of the MaxCompute project must be prefixed with actiontrail_.
   * 
   * @example
   * acs:odps:cn-hangzhou:、151277687691****:project/actiontrail_****
   */
  maxComputeProjectArn?: string;
  /**
   * @remarks
   * The ARN of the role that is assumed by ActionTrail to deliver events to the destination Simple Log Service project.
   * 
   * *   If you do not specify this parameter, ActionTrail creates a service-linked role to create the required resources. For more information, see [Manage the service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * *   If you specify this parameter and deliver events to the current account, you must grant the RAM role the permissions on the service-linked role for ActionTrail. If you want to deliver events to other accounts, you must attach a system policy to the RAM role. For more information about how to deliver events across Alibaba Cloud accounts, see [Deliver events across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::151277687691****:role/aliyunserviceroleforactiontrail
   */
  maxComputeWriteRoleArn?: string;
  /**
   * @remarks
   * The name of the trail whose configurations you want to update.
   * 
   * The name must be 6 to 36 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start with a lowercase letter.
   * 
   * >  The name must be unique within an Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-test
   */
  name?: string;
  /**
   * @remarks
   * The name of the Object Storage Service (OSS) bucket to which you want to deliver events.
   * 
   * The name must be 3 to 63 characters in length. The name must start with a lowercase letter or a digit and can contain lowercase letters, digits, and hyphens (-).
   * 
   * >  Make sure that the bucket exists before you update the configuration of the trail.
   * 
   * @example
   * audit-log
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The prefix of the files that are stored in the OSS bucket.
   * 
   * The prefix must be 6 to 32 characters in length. The prefix must start with a letter and can contain letters, digits, hyphens (-), forward slashes (/), and underscores (_).
   * 
   * @example
   * at-product-account-audit-B
   */
  ossKeyPrefix?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is assumed by ActionTrail to deliver events to the OSS bucket.
   * 
   * *   If you do not specify this parameter, ActionTrail creates a service-linked role to create the required resources. For more information, see [Manage the service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * *   If you specify this parameter, you must grant the permissions of the service-linked role that is assumed by ActionTrail to the RAM role before you can deliver events to your Alibaba Cloud account. If you need to deliver events to other Alibaba Cloud accounts, you must attach the permission policy that is used to grant permissions related to event delivery to the RAM role. For more information about how to deliver events across Alibaba Cloud accounts, see [Deliver events across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::***:role/aliyunserviceroleforactiontrail
   */
  ossWriteRoleArn?: string;
  /**
   * @remarks
   * The ARN of the Log Service project to which you want to deliver events.
   * 
   * @example
   * acs:log:cn-shanghai::project/***
   */
  slsProjectArn?: string;
  /**
   * @remarks
   * The ARN of the RAM role that is assumed by ActionTrail to deliver events to the Log Service project.
   * 
   * *   If you do not specify this parameter, ActionTrail creates a service-linked role to create the corresponding resource. For more information, see [Manage the service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * *   If you specify this parameter, you must grant the permissions of the service-linked role that is assumed by ActionTrail to the RAM role before you can deliver events to your Alibaba Cloud account. If you need to deliver events to other Alibaba Cloud accounts, you must attach the permission policy that is used to grant permissions related to event delivery to the RAM role. For more information about how to deliver events across Alibaba Cloud accounts, see [Deliver events across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::***:role/aliyunserviceroleforactiontrail
   */
  slsWriteRoleArn?: string;
  /**
   * @remarks
   * The region of the trail.
   * 
   * *   The default value is All, which indicates that the trail delivers events from all regions.
   * 
   * You can also specify specific regions. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/213597.html) operation to query all the supported regions.
   * 
   * @example
   * All
   */
  trailRegion?: string;
  static names(): { [key: string]: string } {
    return {
      eventRW: 'EventRW',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      trailRegion: 'TrailRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventRW: 'string',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
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

