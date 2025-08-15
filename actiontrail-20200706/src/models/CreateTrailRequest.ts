// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrailRequest extends $dara.Model {
  /**
   * @remarks
   * The read/write type of the events to be delivered. Valid values:
   * 
   * *   Write: write events. It is the default value.
   * *   Read: read events.
   * *   All: read and write events.
   * 
   * @example
   * Write
   */
  eventRW?: string;
  /**
   * @remarks
   * Specifies whether to create a multi-account trail. Valid values:
   * 
   * *   true: creates a multi-account trail.
   * *   false (default): creates a single-account trail.
   * 
   * @example
   * false
   */
  isOrganizationTrail?: boolean;
  /**
   * @remarks
   * The ARN of the MaxCompute project to which you want to deliver events.
   * 
   * >  You must specify at least one of the following parameters: OssBucketName, SlsProjectArn, and MaxComputeProjectArn.
   * 
   * >  The name of the MaxCompute project must be prefixed with actiontrail_.
   * 
   * @example
   * acs:odps:cn-hangzhou:15127787691****:project/actiontrail_****
   */
  maxComputeProjectArn?: string;
  /**
   * @remarks
   * The ARN of the role that is assumed by ActionTrail to deliver events to the MaxCompute project.
   * 
   * *   If you do not specify this parameter, ActionTrail creates a service-linked role to create the corresponding resource. For more information, see [Manage the service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * *   If you specify this parameter and deliver events to the current account, you must grant the RAM role the permissions on the service-linked role for ActionTrail. If you want to deliver events to other accounts, you must attach a system policy to the RAM role. For more information about how to deliver events across Alibaba Cloud accounts, see [Deliver events across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::15127787691****:role/aliyunserviceroleforactiontrail
   */
  maxComputeWriteRoleArn?: string;
  /**
   * @remarks
   * The name of the trail to be created.
   * 
   * The name must be 6 to 36 characters in length. The name must start with a lowercase letter and can contain lowercase letters, digits, hyphens (-), and underscores (_).
   * 
   * > The name must be unique within your Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-test
   */
  name?: string;
  /**
   * @remarks
   * The name of the OSS bucket to which events are to be delivered.
   * 
   * The name must be 3 to 63 characters in length. The name must start with a lowercase letter or a digit and can contain lowercase letters, digits, and hyphens (-).
   * 
   * > You must specify at least one of the OssBucketName and SlsProjectArn parameters.
   * 
   * @example
   * audit-log
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The prefix of the log files to be stored in the destination OSS bucket. This parameter can be left empty.
   * 
   * The prefix must be 6 to 32 characters in length. The prefix must start with a letter and can contain letters, digits, hyphens (-), forward slashes (/), and underscores (_).
   * 
   * @example
   * at-product-account-audit-B
   */
  ossKeyPrefix?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the service-linked role that is assumed by ActionTrail to deliver events to the destination Object Storage Service (OSS) bucket.
   * 
   * *   If you do not specify this parameter, ActionTrail creates a service-linked role to create the corresponding resource. For more information, see [Manage the service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * *   If you specify this parameter and deliver events to the current account, you must grant the RAM role the permissions on the service-linked role for ActionTrail. If you want to deliver events to other accounts, you must attach a system policy to the RAM role. For more information about how to deliver events across Alibaba Cloud accounts, see [Deliver events across Alibaba Cloud accounts](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::***:role/aliyunserviceroleforactiontrail
   */
  ossWriteRoleArn?: string;
  /**
   * @remarks
   * The ARN of the Log Service project to which events are to be delivered.
   * 
   * > You must specify at least one of the OssBucketName and SlsProjectArn parameters.
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
   * The one or more regions from which the trail delivers events.
   * 
   * The default value is All, which indicates that the trail delivers events from all regions.
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
      isOrganizationTrail: 'IsOrganizationTrail',
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
      isOrganizationTrail: 'boolean',
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

