// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreInfoResponseBodyInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The maximum number of shards supported for elastic scaling.
   * 
   * @example
   * 4
   */
  maxSplitShard?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * cloudfirewall-project-14151892848****-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The storage capacity threshold. Unit: bytes.
   * 
   * @example
   * 50000000
   */
  quota?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @remarks
   * The number of shards currently in use.
   * 
   * @example
   * 2
   */
  shard?: number;
  /**
   * @remarks
   * The site to which the Logstore belongs. Valid values: cn: the Chinese mainland. intl: outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  site?: string;
  /**
   * @remarks
   * The storage duration of logs. Unit: days.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The volume of stored logs. Unit: bytes.
   * 
   * @example
   * 21852955752
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      maxSplitShard: 'MaxSplitShard',
      projectName: 'ProjectName',
      quota: 'Quota',
      regionId: 'RegionId',
      shard: 'Shard',
      site: 'Site',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      maxSplitShard: 'number',
      projectName: 'string',
      quota: 'number',
      regionId: 'string',
      shard: 'number',
      site: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogStoreInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information list.
   */
  infoList?: DescribeLogStoreInfoResponseBodyInfoList[];
  /**
   * @remarks
   * The number of times the user can switch the log mode.
   * 
   * @example
   * 2
   */
  logModifyQuota?: number;
  /**
   * @remarks
   * The name of the Simple Log Service Logstore.
   * 
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The log version. Valid values: 1: one Logstore. 2: two Logstores.
   * 
   * @example
   * 2
   */
  logVersion?: number;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * project-xxx-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * The available log storage capacity. Unit: bytes.
   * 
   * @example
   * 50000000
   */
  quota?: number;
  /**
   * @remarks
   * The region ID for log delivery.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C6C3B72B********E95FB0A161
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 132
   */
  taskId?: string;
  /**
   * @remarks
   * The total log storage capacity purchased by the user.
   * 
   * @example
   * 50000000
   */
  totalQuota?: number;
  /**
   * @remarks
   * The storage duration of logs. Unit: days.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * The used storage capacity. Unit: bytes.
   * 
   * > The statistics of Simple Log Service have a delay of about two hours.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      infoList: 'InfoList',
      logModifyQuota: 'LogModifyQuota',
      logStoreName: 'LogStoreName',
      logVersion: 'LogVersion',
      projectName: 'ProjectName',
      quota: 'Quota',
      regionId: 'RegionId',
      requestId: 'RequestId',
      taskId: 'TaskId',
      totalQuota: 'TotalQuota',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoList: { 'type': 'array', 'itemType': DescribeLogStoreInfoResponseBodyInfoList },
      logModifyQuota: 'number',
      logStoreName: 'string',
      logVersion: 'number',
      projectName: 'string',
      quota: 'number',
      regionId: 'string',
      requestId: 'string',
      taskId: 'string',
      totalQuota: 'number',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.infoList)) {
      $dara.Model.validateArray(this.infoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

