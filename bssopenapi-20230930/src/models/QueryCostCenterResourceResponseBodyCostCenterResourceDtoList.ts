// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResourceResponseBodyCostCenterResourceDtoList extends $dara.Model {
  /**
   * @example
   * test
   */
  apportionItemCode?: string;
  /**
   * @example
   * test
   */
  apportionItemName?: string;
  /**
   * @example
   * otsbag
   */
  commodityCode?: string;
  commodityName?: string;
  /**
   * @example
   * code
   */
  costCenterCode?: string;
  /**
   * @example
   * 2025-05-18 12:12:25
   */
  costCenterCreateTime?: string;
  /**
   * @example
   * 123456
   */
  costCenterId?: number;
  /**
   * @example
   * test
   */
  costCenterName?: string;
  /**
   * @example
   * 2025-05-18 16:12:25
   */
  costCenterUpdateTime?: string;
  /**
   * @example
   * 1234567812345678
   */
  ownerAccountId?: number;
  ownerAccountName?: string;
  /**
   * @example
   * 123456
   */
  parentCostCenterId?: number;
  /**
   * @example
   * rds
   */
  pipCode?: string;
  pipName?: string;
  resourceGroup?: string;
  /**
   * @example
   * OSSBAG-cn-v0h1s4hma018
   */
  resourceId?: string;
  /**
   * @example
   * testResource
   */
  resourceNick?: string;
  /**
   * @example
   * MANUAL_ALLOCATE
   */
  resourceSource?: string;
  /**
   * @example
   * tag
   */
  resourceTag?: string;
  /**
   * @example
   * FPT_ossbag_absolute_Storage_bj
   */
  resourceType?: string;
  /**
   * @example
   * 2025-05-18 16:12:25
   */
  resourceUpdateTime?: string;
  /**
   * @example
   * 1234567812345678
   */
  resourceUserId?: number;
  /**
   * @example
   * test@test.aliyun.com
   */
  resourceUserName?: string;
  /**
   * @example
   * -1
   */
  rootCostCenterId?: number;
  static names(): { [key: string]: string } {
    return {
      apportionItemCode: 'ApportionItemCode',
      apportionItemName: 'ApportionItemName',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      costCenterCode: 'CostCenterCode',
      costCenterCreateTime: 'CostCenterCreateTime',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      costCenterUpdateTime: 'CostCenterUpdateTime',
      ownerAccountId: 'OwnerAccountId',
      ownerAccountName: 'OwnerAccountName',
      parentCostCenterId: 'ParentCostCenterId',
      pipCode: 'PipCode',
      pipName: 'PipName',
      resourceGroup: 'ResourceGroup',
      resourceId: 'ResourceId',
      resourceNick: 'ResourceNick',
      resourceSource: 'ResourceSource',
      resourceTag: 'ResourceTag',
      resourceType: 'ResourceType',
      resourceUpdateTime: 'ResourceUpdateTime',
      resourceUserId: 'ResourceUserId',
      resourceUserName: 'ResourceUserName',
      rootCostCenterId: 'RootCostCenterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apportionItemCode: 'string',
      apportionItemName: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      costCenterCode: 'string',
      costCenterCreateTime: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterUpdateTime: 'string',
      ownerAccountId: 'number',
      ownerAccountName: 'string',
      parentCostCenterId: 'number',
      pipCode: 'string',
      pipName: 'string',
      resourceGroup: 'string',
      resourceId: 'string',
      resourceNick: 'string',
      resourceSource: 'string',
      resourceTag: 'string',
      resourceType: 'string',
      resourceUpdateTime: 'string',
      resourceUserId: 'number',
      resourceUserName: 'string',
      rootCostCenterId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

