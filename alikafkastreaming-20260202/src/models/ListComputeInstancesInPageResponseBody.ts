// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesInPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenewFlag?: boolean;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POST_PAID
   */
  chargeType?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2026-09-02T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The total CU limit.
   * 
   * @example
   * 4.0
   */
  cuLimitSum?: number;
  /**
   * @remarks
   * The total number of reserved CUs.
   * 
   * @example
   * 2.0
   */
  cuReservedSum?: number;
  /**
   * @remarks
   * The total number of used CUs.
   * 
   * @example
   * 2.5
   */
  cuUsedSum?: number;
  /**
   * @remarks
   * The expiration time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2027-09-02T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The compute instance ID.
   * 
   * @example
   * alikafka_streaming-cn-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * streaming-prod
   */
  instanceName?: string;
  /**
   * @remarks
   * The owner of the resource.
   * 
   * @example
   * 1234567890123456
   */
  owner?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The service status of the instance.
   * 
   * @example
   * RUNNING
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 3
   */
  totalJobs?: number;
  /**
   * @remarks
   * The number of running jobs.
   * 
   * @example
   * 2
   */
  totalRunningJobs?: number;
  /**
   * @remarks
   * The list of vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID.
   * 
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
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListComputeInstancesInPageResponseBodyData[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9079DD86-09F1-5303-A64F-D9089F96BC16
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that meet the query conditions.
   * 
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

