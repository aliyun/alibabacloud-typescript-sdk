// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTrailsResponseBodyTrailList extends $dara.Model {
  /**
   * @remarks
   * The time when the trail was created.
   * 
   * @example
   * 2021-03-01T06:27:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * The read/write type of the events that are delivered. Valid values:
   * 
   * *   Write: write events. This is the default value.
   * *   Read: read events.
   * *   All: read and write events.
   * 
   * @example
   * All
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
   * Indicates whether the trail is a multi-account trail. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  isOrganizationTrail?: boolean;
  /**
   * @remarks
   * The ARN of the MaxCompute project.
   * 
   * @example
   * acs:odps:cn-hangzhou:141266687691****:project/actiontrail_****
   */
  maxComputeProjectArn?: string;
  /**
   * @remarks
   * The ARN of the role that is assumed by ActionTrail to deliver events to the MaxCompute project.
   * 
   * @example
   * acs:ram::141266687691****:role/aliyunserviceroleforactiontrail
   */
  maxComputeWriteRoleArn?: string;
  /**
   * @remarks
   * The name of the trail.
   * 
   * @example
   * test-4
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * >  This parameter is returned only when the trail is a multi-account trail.
   * 
   * @example
   * rd-EV****
   */
  organizationId?: string;
  /**
   * @remarks
   * The region where the OSS bucket resides.
   * 
   * @example
   * oss-cn-hangzhou
   */
  ossBucketLocation?: string;
  /**
   * @remarks
   * The name of the OSS bucket to which events are delivered.
   * 
   * @example
   * secloud
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The prefix of the files that are stored in the Object Storage Service (OSS) bucket.
   * 
   * @example
   * trail1
   */
  ossKeyPrefix?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the RAM role that is assumed by ActionTrail to deliver events to the OSS bucket.
   * 
   * @example
   * acs:ram::***:role/aliyunserviceroleforactiontrail
   */
  ossWriteRoleArn?: string;
  /**
   * @remarks
   * The region where the trail resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ARN of the Log Service project to which events are delivered.
   * 
   * @example
   * acs:log:cn-qingdao:159498693826****:project/zhengze-audit-log
   */
  slsProjectArn?: string;
  /**
   * @remarks
   * The ARN of the RAM role that is assumed by ActionTrail to deliver events to the Log Service project.
   * 
   * @example
   * acs:ram::159498693826****:role/aliyunserviceroleforactiontrail
   */
  slsWriteRoleArn?: string;
  /**
   * @remarks
   * The time when the trail was last enabled.
   * 
   * @example
   * 2021-04-06T02:08:38Z
   */
  startLoggingTime?: string;
  /**
   * @remarks
   * The status of the trail. Valid values:
   * 
   * *   Disable: disabled.
   * *   Enable: enabled.
   * *   Fresh: The trail is created but is not enabled.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The time when the trail was last disabled.
   * 
   * @example
   * 2021-04-06T02:09:04Z
   */
  stopLoggingTime?: string;
  /**
   * @remarks
   * The ARN of the trail.
   * 
   * @example
   * acs:actiontrail:cn-hangzhou:159498693826****:trail/test-delivery-other
   */
  trailArn?: string;
  /**
   * @remarks
   * The region of the trail.
   * 
   * @example
   * All
   */
  trailRegion?: string;
  /**
   * @remarks
   * The time when the configurations of the trail were last updated.
   * 
   * @example
   * 2021-04-06T02:16:24Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventRW: 'EventRW',
      homeRegion: 'HomeRegion',
      isOrganizationTrail: 'IsOrganizationTrail',
      maxComputeProjectArn: 'MaxComputeProjectArn',
      maxComputeWriteRoleArn: 'MaxComputeWriteRoleArn',
      name: 'Name',
      organizationId: 'OrganizationId',
      ossBucketLocation: 'OssBucketLocation',
      ossBucketName: 'OssBucketName',
      ossKeyPrefix: 'OssKeyPrefix',
      ossWriteRoleArn: 'OssWriteRoleArn',
      region: 'Region',
      slsProjectArn: 'SlsProjectArn',
      slsWriteRoleArn: 'SlsWriteRoleArn',
      startLoggingTime: 'StartLoggingTime',
      status: 'Status',
      stopLoggingTime: 'StopLoggingTime',
      trailArn: 'TrailArn',
      trailRegion: 'TrailRegion',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      eventRW: 'string',
      homeRegion: 'string',
      isOrganizationTrail: 'boolean',
      maxComputeProjectArn: 'string',
      maxComputeWriteRoleArn: 'string',
      name: 'string',
      organizationId: 'string',
      ossBucketLocation: 'string',
      ossBucketName: 'string',
      ossKeyPrefix: 'string',
      ossWriteRoleArn: 'string',
      region: 'string',
      slsProjectArn: 'string',
      slsWriteRoleArn: 'string',
      startLoggingTime: 'string',
      status: 'string',
      stopLoggingTime: 'string',
      trailArn: 'string',
      trailRegion: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTrailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ED8BC689-69DA-42AC-855E-3B06C1271194
   */
  requestId?: string;
  /**
   * @remarks
   * The trails.
   */
  trailList?: DescribeTrailsResponseBodyTrailList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trailList: 'TrailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trailList: { 'type': 'array', 'itemType': DescribeTrailsResponseBodyTrailList },
    };
  }

  validate() {
    if(Array.isArray(this.trailList)) {
      $dara.Model.validateArray(this.trailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

