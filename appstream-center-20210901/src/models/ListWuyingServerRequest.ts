// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerRequest extends $dara.Model {
  addVirtualNodePoolStatusList?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @example
   * cn-hangzhou+dir-172301****
   */
  officeSiteId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * eds.proworkstation_flagship_elite.32c64g.48g1x
   */
  serverInstanceType?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  virtualNodePoolId?: string;
  wuyingServerIdList?: string[];
  /**
   * @example
   * exampleServerName
   */
  wuyingServerNameOrId?: string;
  static names(): { [key: string]: string } {
    return {
      addVirtualNodePoolStatusList: 'AddVirtualNodePoolStatusList',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      imageId: 'ImageId',
      officeSiteId: 'OfficeSiteId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serverInstanceType: 'ServerInstanceType',
      status: 'Status',
      virtualNodePoolId: 'VirtualNodePoolId',
      wuyingServerIdList: 'WuyingServerIdList',
      wuyingServerNameOrId: 'WuyingServerNameOrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVirtualNodePoolStatusList: { 'type': 'array', 'itemType': 'string' },
      bizRegionId: 'string',
      chargeType: 'string',
      imageId: 'string',
      officeSiteId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      serverInstanceType: 'string',
      status: 'string',
      virtualNodePoolId: 'string',
      wuyingServerIdList: { 'type': 'array', 'itemType': 'string' },
      wuyingServerNameOrId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addVirtualNodePoolStatusList)) {
      $dara.Model.validateArray(this.addVirtualNodePoolStatusList);
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

