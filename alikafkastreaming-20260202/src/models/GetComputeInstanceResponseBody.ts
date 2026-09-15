// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeInstanceResponseBodyData extends $dara.Model {
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
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2027-09-02T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * streaming-prod
   */
  instanceName?: string;
  /**
   * @example
   * cn-hangzhou
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
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      cuLimitSum: 'CuLimitSum',
      cuReservedSum: 'CuReservedSum',
      cuUsedSum: 'CuUsedSum',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
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
      chargeType: 'string',
      createTime: 'string',
      cuLimitSum: 'number',
      cuReservedSum: 'number',
      cuUsedSum: 'number',
      expireTime: 'string',
      instanceId: 'string',
      instanceName: 'string',
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

export class GetComputeInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetComputeInstanceResponseBodyData;
  /**
   * @example
   * 019F5939-507B-57C1-B82C-E55821456FA6
   */
  requestId?: string;
  /**
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

