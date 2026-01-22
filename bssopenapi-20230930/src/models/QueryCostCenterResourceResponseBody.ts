// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostCenterResourceResponseBodyCostCenterResourceDtoList extends $dara.Model {
  /**
   * @example
   * AUTO_ALLOCATE
   */
  addStrategy?: string;
  /**
   * @example
   * 自动分配
   */
  addStrategyName?: string;
  /**
   * @example
   * 3
   */
  applicablePeriodNum?: number;
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
   * 3
   */
  financeUnitRuleVersion?: number;
  instanceId?: string;
  /**
   * @example
   * ecs
   */
  masterCommodityCode?: string;
  /**
   * @example
   * i-xxxxx
   */
  masterInstanceId?: string;
  /**
   * @example
   * 1234567812345678
   */
  ownerAccountId?: number;
  /**
   * @example
   * XXX公司
   */
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
  /**
   * @example
   * 202509
   */
  recentBillingMonth?: number;
  /**
   * @example
   * 上海
   */
  regionName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
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
  /**
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
  costCenterResourceDtoList?: QueryCostCenterResourceResponseBodyCostCenterResourceDtoList[];
  /**
   * @example
   * 200
   */
  maxResults?: number;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  nextToken?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
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

