// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostUnitResourceRequestResourceInstanceList extends $dara.Model {
  /**
   * @remarks
   * The split item of the shared instance. This parameter is required only for shared instances.
   * 
   * *   Eight cloud services support bill splitting. The commodity codes of the eight services are oss, dcdn, snapshot, vod, cdn, live, and cbwp.
   * *   You can obtain the split item of a shared instance by calling QueryCostUnitResource operation to obtain all resource instances within a cost center.
   * 
   * @example
   * qwer1-cn-beijing
   */
  apportionCode?: string;
  /**
   * @remarks
   * The commodity code of the resource instance.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the resource instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou;standard
   */
  resourceId?: string;
  /**
   * @remarks
   * The user ID of the resource instance owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 273394581313325532
   */
  resourceUserId?: number;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      commodityCode: 'CommodityCode',
      resourceId: 'ResourceId',
      resourceUserId: 'ResourceUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      commodityCode: 'string',
      resourceId: 'string',
      resourceUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostUnitResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source cost center.
   * 
   * *   A value of 0 indicates that the resources to be transferred have not been allocated to a cost center.
   * *   A value greater than 0 indicates the ID of an existing cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  fromUnitId?: number;
  /**
   * @remarks
   * The user ID of the owner of the source cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 273394581313325532
   */
  fromUnitUserId?: number;
  /**
   * @remarks
   * The resource instances to be transferred.
   * 
   * This parameter is required.
   */
  resourceInstanceList?: AllocateCostUnitResourceRequestResourceInstanceList[];
  /**
   * @remarks
   * The ID of the destination cost center.
   * 
   * *   A value of -1 indicates that the allocated resources are changed to unallocated.
   * *   A value greater than 0 indicates the ID of an existing cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 186419
   */
  toUnitId?: number;
  /**
   * @remarks
   * The user ID of the owner of the destination cost center.
   * 
   * This parameter is required.
   * 
   * @example
   * 241021678450941490
   */
  toUnitUserId?: number;
  static names(): { [key: string]: string } {
    return {
      fromUnitId: 'FromUnitId',
      fromUnitUserId: 'FromUnitUserId',
      resourceInstanceList: 'ResourceInstanceList',
      toUnitId: 'ToUnitId',
      toUnitUserId: 'ToUnitUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromUnitId: 'number',
      fromUnitUserId: 'number',
      resourceInstanceList: { 'type': 'array', 'itemType': AllocateCostUnitResourceRequestResourceInstanceList },
      toUnitId: 'number',
      toUnitUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceInstanceList)) {
      $dara.Model.validateArray(this.resourceInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

