// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreInfoResponseBodyInfoList extends $dara.Model {
  /**
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @example
   * 4
   */
  maxSplitShard?: number;
  /**
   * @example
   * cloudfirewall-project-14151892848****-cn-hangzhou
   */
  projectName?: string;
  /**
   * @example
   * 50000000
   */
  quota?: number;
  /**
   * @example
   * cn-qingdao
   */
  regionId?: string;
  /**
   * @example
   * 2
   */
  shard?: number;
  /**
   * @example
   * cn
   */
  site?: string;
  /**
   * @example
   * 180
   */
  ttl?: number;
  /**
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
  infoList?: DescribeLogStoreInfoResponseBodyInfoList[];
  /**
   * @example
   * 2
   */
  logModifyQuota?: number;
  /**
   * @remarks
   * The name of the SLS LogStore in the log service.
   * 
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @example
   * 2
   */
  logVersion?: number;
  /**
   * @remarks
   * The Project name of the log service.
   * 
   * @example
   * project-xxx-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * Available log storage capacity. Unit: Byte.
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
   * The ID of this request.
   * 
   * @example
   * C6C3B72B********E95FB0A161
   */
  requestId?: string;
  /**
   * @example
   * 用户进行日志修改所产生的任务id。
   */
  taskId?: string;
  /**
   * @example
   * 50000000
   */
  totalQuota?: number;
  /**
   * @remarks
   * Log storage duration. Unit: days.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * Used storage capacity. Unit: Byte.
   * 
   * > The statistics of the log service have a delay of approximately two hours.
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

