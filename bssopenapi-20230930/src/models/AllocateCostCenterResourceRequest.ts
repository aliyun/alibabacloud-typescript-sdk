// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateCostCenterResourceRequestResourceInstanceList extends $dara.Model {
  /**
   * @example
   * qwer1-cn-beijing
   */
  apportionCode?: string;
  /**
   * @example
   * split-item-test1
   */
  apportionName?: string;
  /**
   * @example
   * oss
   */
  commodityCode?: string;
  /**
   * @example
   * RESOURCE_UDR
   */
  commodityName?: string;
  instanceId?: string;
  /**
   * @example
   * ecs
   */
  pipCode?: string;
  /**
   * @example
   * related-resource
   */
  relatedResources?: string;
  /**
   * @example
   * xihe_mpp
   */
  resourceGroup?: string;
  /**
   * @example
   * cn-hangzhou;standard
   */
  resourceId?: string;
  /**
   * @example
   * ecs-test-1
   */
  resourceNick?: string;
  /**
   * @example
   * AUTO_ALLOCATE
   */
  resourceSource?: string;
  /**
   * @example
   * 0
   */
  resourceStatus?: string;
  /**
   * @example
   * tag-test1
   */
  resourceTag?: string;
  /**
   * @example
   * SCU
   */
  resourceType?: string;
  /**
   * @example
   * 273394581313325532
   */
  resourceUserId?: number;
  /**
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
   * @example
   * 637180
   */
  fromCostCenterId?: number;
  /**
   * @example
   * 1529600453335198
   */
  fromOwnerAccountId?: number;
  /**
   * @example
   * 2684201000001
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceInstanceList?: AllocateCostCenterResourceRequestResourceInstanceList[];
  /**
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

