// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComputeInstancesInPageResponseBodyData extends $dara.Model {
  autoRenewFlag?: boolean;
  chargeType?: string;
  commodityCode?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   */
  createTime?: string;
  cu?: number;
  cuLimitSum?: number;
  cuReservedSum?: number;
  cuUsedSum?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   */
  expireTime?: string;
  instanceId?: string;
  instanceName?: string;
  owner?: string;
  regionId?: string;
  serviceStatus?: string;
  totalJobs?: number;
  totalRunningJobs?: number;
  vSwitchIds?: string[];
  version?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewFlag: 'AutoRenewFlag',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      cu: 'Cu',
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
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewFlag: 'boolean',
      chargeType: 'string',
      commodityCode: 'string',
      createTime: 'string',
      cu: 'number',
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
      version: 'string',
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
  code?: number;
  currentPage?: number;
  data?: ListComputeInstancesInPageResponseBodyData[];
  pageSize?: number;
  requestId?: string;
  success?: boolean;
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

