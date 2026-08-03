// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the read/write type of events that the trail delivers. Valid values:
   * 
   * - Write: Write events.
   * 
   * - Read: Read events.
   * 
   * - All (default): All read and write events.
   * 
   * @example
   * Write
   */
  eventRW?: string;
  /**
   * @remarks
   * Specifies whether the trail is a multi-account trail. Valid values:
   * 
   * - true
   * 
   * - false (default)
   * 
   * To create a trail for an organization, set this parameter to `true`. The trail will collect events from all member accounts in the organization.
   * 
   * @example
   * false
   */
  isOrganizationTrail?: boolean;
  /**
   * @remarks
   * The ARN of the MaxCompute project to which ActionTrail delivers events.
   * 
   * > You must specify a destination for the trail by providing at least one of the following parameters: `OssBucketName`, `SlsProjectArn`, or `MaxComputeProjectArn`.
   * 
   * > The project name in the ARN must start with `actiontrail_`.
   * 
   * @example
   * acs:odps:cn-hangzhou:15127787691****:project/actiontrail_****
   */
  maxComputeProjectArn?: string;
  /**
   * @remarks
   * The ARN of the RAM role that ActionTrail assumes to deliver events to the MaxCompute project.
   * 
   * - If this parameter is not specified, ActionTrail creates a service-linked role to deliver events. For more information, see [ActionTrail service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * 
   * - If you specify a role, it must be a RAM role that you created. This role must have a trust policy that allows the ActionTrail service (\\`actiontrail.aliyuncs.com\\`) to assume it. The role\\"s permission policy must grant permissions to write to the specified MaxCompute project. For more information about cross-account delivery, see [Deliver events from multiple Alibaba Cloud accounts to the same account](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::15127787691****:role/aliyunserviceroleforactiontrail
   */
  maxComputeWriteRoleArn?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * > - Length: 6 to 36 characters.
   * >
   * > - Characters: Lowercase letters, digits, hyphens (-), and underscores (_).
   * >
   * > - Must start with a lowercase letter.
   * >
   * > - Must be uniquewithin an Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * trail-test
   */
  name?: string;
  /**
   * @remarks
   * The name of the OSS bucket to which ActionTrail delivers events.
   * 
   * - Length: 3 to 63 characters.
   * 
   * - Characters: Lowercase letters, digits, and hyphens (-).
   * 
   * - Must start with a lowercase letter or a digit.
   * 
   * > You must specify a destination for the trail by providing at least one of the following parameters: `OssBucketName`, `SlsProjectArn`, or `MaxComputeProjectArn`.
   * 
   * @example
   * audit-log
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The prefix for the names of log files that ActionTrail delivers to your OSS bucket.
   * 
   * - Length: 6 to 32 characters.
   * 
   * - Characters: Letters, digits, hyphens (-), forward slashes (/), and underscores (_).
   * 
   * - Must start with a letter.
   * 
   * @example
   * at-product-account-audit-B
   */
  ossKeyPrefix?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that ActionTrail assumes to deliver events to the OSS bucket.
   * 
   * - If you do not specify this parameter, ActionTrail creates a service-linked role to deliver events. For more information, see [ActionTrail service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * 
   * - If you specify a role, it must be a RAM role that you created. This role must have a trust policy that allows the ActionTrail service (actiontrail.aliyuncs.com) to assume it. The role\\"s RAM policy must grant permissions to write to the specified OSS bucket. For more information about cross-account delivery, see [Deliver events from multiple Alibaba Cloud accounts to the same account](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::15127787691****:role/aliyunserviceroleforactiontrail
   */
  ossWriteRoleArn?: string;
  /**
   * @remarks
   * The ARN of the SLS project to which ActionTrail delivers events.
   * 
   * > You must specify a destination for the trail by providing at least one of the following parameters: `OssBucketName`, `SlsProjectArn`, or `MaxComputeProjectArn`.
   * 
   * @example
   * acs:log:cn-shanghai:151266687691****:project/test-project
   */
  slsProjectArn?: string;
  /**
   * @remarks
   * The ARN of the RAM role that ActionTrail assumes to deliver events to the SLS project.
   * 
   * - If this parameter is not specified, ActionTrail creates a service-linked role to deliver events. For more information, see [ActionTrail service-linked role](https://help.aliyun.com/document_detail/169244.html).
   * 
   * - If you specify a role, it must be a RAM role that you created. This role must have a trust policy that allows the ActionTrail service (actiontrail.aliyuncs.com) to assume it. The role\\"s permission policy must grant permissions to write to the specified SLS project. For more information about cross-account delivery, see [Deliver events from multiple Alibaba Cloud accounts to the same account](https://help.aliyun.com/document_detail/207462.html).
   * 
   * @example
   * acs:ram::151266687691****:role/aliyunserviceroleforactiontrail
   */
  slsWriteRoleArn?: string;
  /**
   * @remarks
   * The region in which the trail is created. By default, a trail is created in all regions and this parameter is set to `All`. To create a trail in a specific region, provide the region ID. For more information about regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/213597.html) operation.
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

