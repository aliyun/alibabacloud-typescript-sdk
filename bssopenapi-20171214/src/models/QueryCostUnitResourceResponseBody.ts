// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCostUnitResourceResponseBodyDataCostUnit extends $dara.Model {
  /**
   * @remarks
   * The user ID of the cost center owner.
   * 
   * @example
   * 321432
   */
  ownerUid?: number;
  /**
   * @remarks
   * The ID of the parent cost center. A value of -1 indicates the root cost center.
   * 
   * @example
   * 23421
   */
  parentUnitId?: number;
  /**
   * @remarks
   * The ID of the cost center.
   * 
   * @example
   * 123412
   */
  unitId?: number;
  /**
   * @remarks
   * The name of the cost center.
   * 
   * @example
   * test
   */
  unitName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerUid: 'OwnerUid',
      parentUnitId: 'ParentUnitId',
      unitId: 'UnitId',
      unitName: 'UnitName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerUid: 'number',
      parentUnitId: 'number',
      unitId: 'number',
      unitName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo extends $dara.Model {
  /**
   * @remarks
   * The number of resource instances in the cost center.
   * 
   * @example
   * 1
   */
  resourceCount?: number;
  /**
   * @remarks
   * The number of resource groups in the cost center.
   * 
   * @example
   * 1
   */
  resourceGroupCount?: number;
  /**
   * @remarks
   * The number of sub-cost centers in the cost center.
   * 
   * @example
   * 2
   */
  subUnitCount?: number;
  /**
   * @remarks
   * The total number of resource instances, including resource instances of sub-cost centers, in the cost center.
   * 
   * @example
   * 3
   */
  totalResourceCount?: number;
  /**
   * @remarks
   * The total number of resource groups, including resource groups of sub-cost centers, in the cost center.
   * 
   * @example
   * 2
   */
  totalResourceGroupCount?: number;
  /**
   * @remarks
   * The total number of the associated accounts, including associated accounts of sub-cost centers, in the cost center.
   * 
   * @example
   * 2
   */
  totalUserCount?: number;
  /**
   * @remarks
   * The number of sub-cost centers in the cost center.
   * 
   * @example
   * 0
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceGroupCount: 'ResourceGroupCount',
      subUnitCount: 'SubUnitCount',
      totalResourceCount: 'TotalResourceCount',
      totalResourceGroupCount: 'TotalResourceGroupCount',
      totalUserCount: 'TotalUserCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
      resourceGroupCount: 'number',
      subUnitCount: 'number',
      totalResourceCount: 'number',
      totalResourceGroupCount: 'number',
      totalUserCount: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList extends $dara.Model {
  /**
   * @remarks
   * The split code of the resource.
   * 
   * @example
   * test
   */
  apportionCode?: string;
  /**
   * @remarks
   * The split name of the resource.
   * 
   * @example
   * test
   */
  apportionName?: string;
  /**
   * @remarks
   * The product code of the resource.
   * 
   * @example
   * rds
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
   * The code of the service. The code is the same as that in Cost Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The resources related to the resource instance.
   * 
   * @example
   * oss
   */
  relatedResources?: string;
  /**
   * @remarks
   * The resource group to which the resource belongs.
   * 
   * @example
   * Default Resource Group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The instance ID of the resource.
   * 
   * @example
   * OSSBAG-cn-v0h1s4hma018
   */
  resourceId?: string;
  /**
   * @remarks
   * The custom name of the resource.
   * 
   * @example
   * testResource
   */
  resourceNick?: string;
  /**
   * @remarks
   * The source of the resource. Value:
   * - AUTO_ALLOCATE
   * - MANUAL_ALLOCATE
   * 
   * @example
   * MANUAL_ALLOCATE
   */
  resourceSource?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * Available
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * @example
   * testResource
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
   * The user ID of the resource owner.
   * 
   * @example
   * 2424242134
   */
  resourceUserId?: number;
  /**
   * @remarks
   * The username of the resource owner.
   * 
   * @example
   * test@test.aliyun.com
   */
  resourceUserName?: string;
  static names(): { [key: string]: string } {
    return {
      apportionCode: 'ApportionCode',
      apportionName: 'ApportionName',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
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

export class QueryCostUnitResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the cost center.
   */
  costUnit?: QueryCostUnitResourceResponseBodyDataCostUnit;
  /**
   * @remarks
   * The statistical information about the cost center.
   */
  costUnitStatisInfo?: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource instances.
   */
  resourceInstanceDtoList?: QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      costUnit: 'CostUnit',
      costUnitStatisInfo: 'CostUnitStatisInfo',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceInstanceDtoList: 'ResourceInstanceDtoList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costUnit: QueryCostUnitResourceResponseBodyDataCostUnit,
      costUnitStatisInfo: QueryCostUnitResourceResponseBodyDataCostUnitStatisInfo,
      pageNum: 'number',
      pageSize: 'number',
      resourceInstanceDtoList: { 'type': 'array', 'itemType': QueryCostUnitResourceResponseBodyDataResourceInstanceDtoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(this.costUnit && typeof (this.costUnit as any).validate === 'function') {
      (this.costUnit as any).validate();
    }
    if(this.costUnitStatisInfo && typeof (this.costUnitStatisInfo as any).validate === 'function') {
      (this.costUnitStatisInfo as any).validate();
    }
    if(Array.isArray(this.resourceInstanceDtoList)) {
      $dara.Model.validateArray(this.resourceInstanceDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCostUnitResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryCostUnitResourceResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04332CB7-9A57-4461-97E0-02821D044414
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCostUnitResourceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

