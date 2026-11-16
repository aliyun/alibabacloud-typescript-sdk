// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResourceResponseBodyCostCenterResourceDtoList extends $dara.Model {
  /**
   * @remarks
   * The allocation strategy.
   * 
   * @example
   * AUTO_ALLOCATE
   */
  addStrategy?: string;
  /**
   * @remarks
   * The added policy name.
   * 
   * @example
   * Automatic allocation
   */
  addStrategyName?: string;
  /**
   * @remarks
   * The number of refreshed billing cycles.
   * 
   * @example
   * 3
   */
  applicablePeriodNum?: number;
  /**
   * @remarks
   * The code of the attached resource.
   * 
   * @example
   * test
   */
  apportionItemCode?: string;
  /**
   * @remarks
   * The name of the attached resource.
   * 
   * @example
   * test
   */
  apportionItemName?: string;
  /**
   * @remarks
   * The commodity code of the resource.
   * 
   * @example
   * otsbag
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name of the resource.
   * 
   * @example
   * ApsaraDB
   */
  commodityName?: string;
  /**
   * @remarks
   * The code of the cost center.
   * 
   * @example
   * code
   */
  costCenterCode?: string;
  /**
   * @remarks
   * The creation time of the cost center. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-05-18 12:12:25
   */
  costCenterCreateTime?: string;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 123456
   */
  costCenterId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * @example
   * test
   */
  costCenterName?: string;
  /**
   * @remarks
   * The last update time of the cost center. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-05-18 16:12:25
   */
  costCenterUpdateTime?: string;
  /**
   * @remarks
   * The version of the rule.
   * 
   * @example
   * 3
   */
  financeUnitRuleVersion?: number;
  /**
   * @remarks
   * The ID of the billing granularity.
   * 
   * @example
   * cn-hangzhou;standard
   */
  instanceId?: string;
  /**
   * @remarks
   * The code of the associated commodity.
   * 
   * @example
   * ecs
   */
  masterCommodityCode?: string;
  /**
   * @remarks
   * The associated instance ID.
   * 
   * @example
   * i-xxxxx
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The ID of the customer to which the cost center belongs.
   * 
   * @example
   * 1234567812345678
   */
  ownerAccountId?: number;
  /**
   * @remarks
   * The name of the customer to which the cost center belongs.
   * 
   * @example
   * Customer A
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * The ID of the parent cost center.
   * 
   * @example
   * 123456
   */
  parentCostCenterId?: number;
  /**
   * @remarks
   * The product code, which is the same as the product code in the User Center bill.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The name of the product.
   * 
   * @example
   * ApsaraDB
   */
  pipName?: string;
  /**
   * @remarks
   * The latest billing cycle.
   * 
   * @example
   * 202509
   */
  recentBillingMonth?: number;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * Shanghai
   */
  regionName?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The resource group to which the resource belongs.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * OSSBAG-cn-v0h1s4hma018
   */
  resourceId?: string;
  /**
   * @remarks
   * The custom nickname of the resource.
   * 
   * @example
   * testResource
   */
  resourceNick?: string;
  /**
   * @remarks
   * The source of the resource. Valid values:
   * - AUTO_ALLOCATE: Automatic allocation.
   * - MANUAL_ALLOCATE: Manual allocation.
   * 
   * @example
   * MANUAL_ALLOCATE
   */
  resourceSource?: string;
  /**
   * @remarks
   * The tag of the resource.
   * 
   * @example
   * tag
   */
  resourceTag?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * FPT_ossbag_absolute_Storage_bj
   */
  resourceType?: string;
  /**
   * @remarks
   * The last update time of the cost center. This is a reserved field and is currently unavailable. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2025-05-18 16:12:25
   */
  resourceUpdateTime?: string;
  /**
   * @remarks
   * The ID of the user that owns the resource.
   * 
   * @example
   * 1234567812345678
   */
  resourceUserId?: number;
  /**
   * @remarks
   * The name of the user that owns the resource.
   * 
   * @example
   * test@test.aliyun.com
   */
  resourceUserName?: string;
  /**
   * @remarks
   * The ID of the root cost center.
   * 
   * @example
   * -1
   */
  rootCostCenterId?: number;
  /**
   * @remarks
   * The billing cycle when the rule takes effect.
   * 
   * @example
   * 202509
   */
  startBillingMonth?: number;
  static names(): { [key: string]: string } {
    return {
      addStrategy: 'AddStrategy',
      addStrategyName: 'AddStrategyName',
      applicablePeriodNum: 'ApplicablePeriodNum',
      apportionItemCode: 'ApportionItemCode',
      apportionItemName: 'ApportionItemName',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      costCenterCode: 'CostCenterCode',
      costCenterCreateTime: 'CostCenterCreateTime',
      costCenterId: 'CostCenterId',
      costCenterName: 'CostCenterName',
      costCenterUpdateTime: 'CostCenterUpdateTime',
      financeUnitRuleVersion: 'FinanceUnitRuleVersion',
      instanceId: 'InstanceId',
      masterCommodityCode: 'MasterCommodityCode',
      masterInstanceId: 'MasterInstanceId',
      ownerAccountId: 'OwnerAccountId',
      ownerAccountName: 'OwnerAccountName',
      parentCostCenterId: 'ParentCostCenterId',
      pipCode: 'PipCode',
      pipName: 'PipName',
      recentBillingMonth: 'RecentBillingMonth',
      regionName: 'RegionName',
      regionNo: 'RegionNo',
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
      startBillingMonth: 'StartBillingMonth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addStrategy: 'string',
      addStrategyName: 'string',
      applicablePeriodNum: 'number',
      apportionItemCode: 'string',
      apportionItemName: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      costCenterCode: 'string',
      costCenterCreateTime: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      costCenterUpdateTime: 'string',
      financeUnitRuleVersion: 'number',
      instanceId: 'string',
      masterCommodityCode: 'string',
      masterInstanceId: 'string',
      ownerAccountId: 'number',
      ownerAccountName: 'string',
      parentCostCenterId: 'number',
      pipCode: 'string',
      pipName: 'string',
      recentBillingMonth: 'number',
      regionName: 'string',
      regionNo: 'string',
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
      startBillingMonth: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostCenterResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  costCenterResourceDtoList?: QueryCostCenterResourceResponseBodyCostCenterResourceDtoList[];
  /**
   * @remarks
   * The maximum number of records to return in a single query.
   * 
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @remarks
   * The metadata of the response structure.
   * 
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * The token for the next query. An empty value indicates that no more results are available.
   * 
   * This parameter is required.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costCenterResourceDtoList: 'CostCenterResourceDtoList',
      maxResults: 'MaxResults',
      metadata: 'Metadata',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterResourceDtoList: { 'type': 'array', 'itemType': QueryCostCenterResourceResponseBodyCostCenterResourceDtoList },
      maxResults: 'number',
      metadata: 'any',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.costCenterResourceDtoList)) {
      $dara.Model.validateArray(this.costCenterResourceDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

