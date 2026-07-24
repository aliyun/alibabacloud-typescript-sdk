// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeInstanceResponseBodyData extends $dara.Model {
  chargeType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  cuLimitSum?: number;
  cuReservedSum?: number;
  cuUsedSum?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  expireTime?: string;
  instanceId?: string;
  instanceName?: string;
  orderId?: string;
  regionId?: string;
  serviceStatus?: string;
  serviceVersion?: string;
  totalJobs?: number;
  totalRunningJobs?: number;
  vSwitchIds?: string[];
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
      orderId: 'OrderId',
      regionId: 'RegionId',
      serviceStatus: 'ServiceStatus',
      serviceVersion: 'ServiceVersion',
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
      orderId: 'string',
      regionId: 'string',
      serviceStatus: 'string',
      serviceVersion: 'string',
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
  code?: number;
  data?: GetComputeInstanceResponseBodyData;
  requestId?: string;
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

