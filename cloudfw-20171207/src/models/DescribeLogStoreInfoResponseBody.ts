// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreInfoResponseBodyInfoList extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The maximum number of shards supported for scaling.
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
   * The storage capacity threshold, in bytes.
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
   * The number of shards in use.
   * 
   * @example
   * 2
   */
  shard?: number;
  /**
   * @remarks
   * The location of the Logstore. Valid values: \\`cn\\` for the Chinese mainland and \\`intl\\` for regions outside the Chinese mainland.
   * 
   * @example
   * cn
   */
  site?: string;
  /**
   * @remarks
   * The storage duration of logs, in days.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The amount of stored logs, in bytes.
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
   * The number of times the log storage mode can be changed.
   * 
   * @example
   * 2
   */
  logModifyQuota?: number;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The log version. 1: indicates one Logstore. 2: indicates two Logstores.
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
   * The available log storage capacity, in bytes.
   * 
   * @example
   * 50000000
   */
  quota?: number;
  /**
   * @remarks
   * The ID of the region where logs are delivered.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
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
   * The total purchased log storage capacity, in bytes.
   * 
   * @example
   * 50000000
   */
  totalQuota?: number;
  /**
   * @remarks
   * The storage duration of logs, in days.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * The used storage capacity, in bytes.
   * 
   * > Statistics from Simple Log Service may be delayed by up to two hours.
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

