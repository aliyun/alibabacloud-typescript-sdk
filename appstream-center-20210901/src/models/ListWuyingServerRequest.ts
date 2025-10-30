// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWuyingServerRequest extends $dara.Model {
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
   * The billing method of the Internet access package.
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
   * The office network IDs.
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
   * The number of records per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Workstation specifications.
   * 
   * @example
   * eds.proworkstation_flagship_elite.32c64g.48g1x
   */
  serverInstanceType?: string;
  /**
   * @remarks
   * The status of the workstation.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The list of workstation IDs.
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

