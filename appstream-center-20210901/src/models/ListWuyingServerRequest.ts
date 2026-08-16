// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of statuses for joining a virtual node pool.
   * 
   * @example
   * RUNNING
   */
  addVirtualNodePoolStatusList?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The end time of the creation time range, in ISO 8601 format. This time point is exclusive.
   * 
   * @example
   * 2026-08-01T00:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time of the creation time range, in ISO 8601 format. This time point is inclusive.
   * 
   * @example
   * 2026-07-01T00:00:00Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The end time of the expiration time range, in ISO 8601 format. This time point is exclusive.
   * 
   * @example
   * 2026-08-01T00:00:00Z
   */
  expiredTimeEnd?: string;
  /**
   * @remarks
   * The start time of the expiration time range, in ISO 8601 format. This time point is inclusive.
   * 
   * @example
   * 2026-07-01T00:00:00Z
   */
  expiredTimeStart?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.31.1.1
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * wuying_server
   */
  productType?: string;
  /**
   * @remarks
   * The workstation instance type.
   * 
   * @example
   * eds.proworkstation_flagship_elite.32c64g.48g1x
   */
  serverInstanceType?: string;
  /**
   * @remarks
   * The workstation status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The list of authorized users.
   * 
   * @example
   * user1
   */
  users?: string[];
  /**
   * @remarks
   * The virtual node pool ID.
   * 
   * @example
   * vnp-bp1234567890abcde
   */
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The list of workstation IDs.
   * 
   * @example
   * 1
   */
  wuyingServerIdList?: string[];
  /**
   * @remarks
   * The workstation name or workstation ID.
   * 
   * @example
   * exampleServerName
   */
  wuyingServerNameOrId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addVirtualNodePoolStatusList: 'AddVirtualNodePoolStatusList',
      bizRegionId: 'BizRegionId',
      bizType: 'BizType',
      chargeType: 'ChargeType',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      expiredTimeEnd: 'ExpiredTimeEnd',
      expiredTimeStart: 'ExpiredTimeStart',
      imageId: 'ImageId',
      networkInterfaceIp: 'NetworkInterfaceIp',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      serverInstanceType: 'ServerInstanceType',
      status: 'Status',
      users: 'Users',
      virtualNodePoolId: 'VirtualNodePoolId',
      wuyingServerIdList: 'WuyingServerIdList',
      wuyingServerNameOrId: 'WuyingServerNameOrId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVirtualNodePoolStatusList: { 'type': 'array', 'itemType': 'string' },
      bizRegionId: 'string',
      bizType: 'number',
      chargeType: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      expiredTimeEnd: 'string',
      expiredTimeStart: 'string',
      imageId: 'string',
      networkInterfaceIp: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      serverInstanceType: 'string',
      status: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
      virtualNodePoolId: 'string',
      wuyingServerIdList: { 'type': 'array', 'itemType': 'string' },
      wuyingServerNameOrId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addVirtualNodePoolStatusList)) {
      $dara.Model.validateArray(this.addVirtualNodePoolStatusList);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    if(Array.isArray(this.wuyingServerIdList)) {
      $dara.Model.validateArray(this.wuyingServerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

