// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostCenterResourceRequestResourceInstanceList extends $dara.Model {
  /**
   * @remarks
   * The attached resource type of the attached-resource instance. This parameter is required only for attached-resource product instances.
   * - Currently, eight commodities support attached resources. The commodity codes are oss, dcdn, snapshot, vod, cdn, live, and cbwp.
   * - You can call the QueryCostUnitResource operation to obtain all billing instances (including attached-resource instances with their attached resources) under a specific cost center (including the unallocated cost center) of a user.
   * 
   * @example
   * qwer1-cn-beijing
   */
  apportionCode?: string;
  /**
   * @remarks
   * The attached resource name.
   * 
   * @example
   * split-item-test1
   */
  apportionName?: string;
  /**
   * @remarks
   * The commodity code of the billing instance. This parameter is required.
   * 
   * @example
   * oss
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name of the resource.
   * 
   * @example
   * RESOURCE_UDR
   */
  commodityName?: string;
  /**
   * @remarks
   * The billing granularity ID. This parameter is required.
   * 
   * @example
   * cn-hangzhou;standard
   */
  instanceId?: string;
  /**
   * @remarks
   * The product code, which is the same as the product code in User Center bills.
   * 
   * @example
   * ecs
   */
  pipCode?: string;
  /**
   * @remarks
   * The resources related to the resource instance.
   * 
   * @example
   * related-resource
   */
  relatedResources?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * xihe_mpp
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * cn-hangzhou;standard:app
   */
  resourceId?: string;
  /**
   * @remarks
   * The custom nickname of the resource.
   * 
   * @example
   * ecs-test-1
   */
  resourceNick?: string;
  /**
   * @remarks
   * The resource source. Valid values:
   * - AUTO_ALLOCATE: automatic allocation.
   * - MANUAL_ALLOCATE: manual allocation.
   * 
   * @example
   * AUTO_ALLOCATE
   */
  resourceSource?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * 0
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The tag of the resource.
   * 
   * @example
   * tag-test1
   */
  resourceTag?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * SCU
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the owner of the billing instance. This parameter is required.
   * 
   * @example
   * 273394581313325532
   */
  resourceUserId?: number;
  /**
   * @remarks
   * The resource ownership username.
   * 
   * @example
   * test
   */
  resourceUserName?: string;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      apportionName: 'ApportionName',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      instanceId: 'InstanceId',
      pipCode: 'PipCode',
      relatedResources: 'RelatedResources',
      resourceGroup: 'ResourceGroup',
      resourceId: 'ResourceId',
      resourceNick: 'ResourceNick',
      resourceSource: 'ResourceSource',
      resourceStatus: 'ResourceStatus',
      resourceTag: 'ResourceTag',
      resourceType: 'ResourceType',
      resourceUserId: 'ResourceUserId',
      resourceUserName: 'ResourceUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionCode: 'string',
      apportionName: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      instanceId: 'string',
      pipCode: 'string',
      relatedResources: 'string',
      resourceGroup: 'string',
      resourceId: 'string',
      resourceNick: 'string',
      resourceSource: 'string',
      resourceStatus: 'string',
      resourceTag: 'string',
      resourceType: 'string',
      resourceUserId: 'number',
      resourceUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateCostCenterResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the source cost center. This parameter is required.
   * 
   * - 0 indicates that the cost center is unallocated.
   * - A value greater than 0 indicates an allocated cost center ID.
   * 
   * @example
   * 637180
   */
  fromCostCenterId?: number;
  /**
   * @remarks
   * The ID of the owner of the source cost center.
   * 
   * @example
   * 1529600453335198
   */
  fromOwnerAccountId?: number;
  /**
   * @remarks
   * The primary sales channel ID. If this parameter is left empty, the sales channel ID of the current user is used by default.
   * 
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * The list of resource instances.
   * 
   * This parameter is required.
   */
  resourceInstanceList?: AllocateCostCenterResourceRequestResourceInstanceList[];
  /**
   * @remarks
   * The ID of the destination cost center. Valid values:
   * 
   * - -1: moves the allocated resource to the unallocated state.
   * - A value greater than 0: allocates the resource to the specified cost center.
   * 
   * @example
   * 638288
   */
  toCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      fromCostCenterId: 'FromCostCenterId',
      fromOwnerAccountId: 'FromOwnerAccountId',
      nbid: 'Nbid',
      resourceInstanceList: 'ResourceInstanceList',
      toCostCenterId: 'ToCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromCostCenterId: 'number',
      fromOwnerAccountId: 'number',
      nbid: 'string',
      resourceInstanceList: { 'type': 'array', 'itemType': AllocateCostCenterResourceRequestResourceInstanceList },
      toCostCenterId: 'number',
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

