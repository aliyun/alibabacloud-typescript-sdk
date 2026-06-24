// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of statuses for joining a virtual node pool.
   * 
   * @example
   * Added
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
   * The image ID.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
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
   * The page size.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
   * aig-bp1234567890abcde
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
  static names(): { [key: string]: string } {
    return {
      addVirtualNodePoolStatusList: 'AddVirtualNodePoolStatusList',
      bizRegionId: 'BizRegionId',
      bizType: 'BizType',
      chargeType: 'ChargeType',
      imageId: 'ImageId',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVirtualNodePoolStatusList: { 'type': 'array', 'itemType': 'string' },
      bizRegionId: 'string',
      bizType: 'number',
      chargeType: 'string',
      imageId: 'string',
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

