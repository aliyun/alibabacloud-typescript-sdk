// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeInstanceResponseBodyData extends $dara.Model {
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
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
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
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the compute instance.
   * 
   * @example
   * streaming-prod
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek53bg4tl6fgma
   */
  resourceGroupId?: string;
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
   * VPC ID
   * 
   * @example
   * vpc-bp1abcdefg
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      cuLimitSum: 'CuLimitSum',
      cuReservedSum: 'CuReservedSum',
      cuUsedSum: 'CuUsedSum',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serviceStatus: 'ServiceStatus',
      totalJobs: 'TotalJobs',
      totalRunningJobs: 'TotalRunningJobs',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'string',
      cuLimitSum: 'number',
      cuReservedSum: 'number',
      cuUsedSum: 'number',
      expireTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

export class GetComputeInstanceResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: GetComputeInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F5939-507B-57C1-B82C-E55821456FA6
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetComputeInstanceResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

