// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesInPageResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenewFlag?: boolean;
  /**
   * @example
   * POST_PAID
   */
  chargeType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-02T16:00:00Z
   */
  createTime?: string;
  /**
   * @example
   * 4.0
   */
  cuLimitSum?: number;
  /**
   * @example
   * 2.0
   */
  cuReservedSum?: number;
  /**
   * @example
   * 2.5
   */
  cuUsedSum?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2027-09-02T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * alikafka_streaming-cn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * streaming-prod
   */
  instanceName?: string;
  /**
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * RUNNING
   */
  serviceStatus?: string;
  /**
   * @example
   * 3
   */
  totalJobs?: number;
  /**
   * @example
   * 2
   */
  totalRunningJobs?: number;
  vSwitchIds?: string[];
  /**
   * @example
   * vpc-bp1abcdefg
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewFlag: 'AutoRenewFlag',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      cuLimitSum: 'CuLimitSum',
      cuReservedSum: 'CuReservedSum',
      cuUsedSum: 'CuUsedSum',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      owner: 'Owner',
      regionId: 'RegionId',
      serviceStatus: 'ServiceStatus',
      totalJobs: 'TotalJobs',
      totalRunningJobs: 'TotalRunningJobs',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewFlag: 'boolean',
      chargeType: 'string',
      createTime: 'string',
      cuLimitSum: 'number',
      cuReservedSum: 'number',
      cuUsedSum: 'number',
      expireTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      owner: 'string',
      regionId: 'string',
      serviceStatus: 'string',
      totalJobs: 'number',
      totalRunningJobs: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComputeInstancesInPageResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListComputeInstancesInPageResponseBodyData[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 9079DD86-09F1-5303-A64F-D9089F96BC16
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListComputeInstancesInPageResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

