// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckRuleResponseBodyCheckRulesCheckPolicies extends $dara.Model {
  /**
   * @remarks
   * Display name of the item\\"s chapter.
   * 
   * @example
   * Access Control
   */
  sectionShowName?: string;
  static names(): { [key: string]: string } {
    return {
      sectionShowName: 'sectionShowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sectionShowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRuleResponseBodyCheckRules extends $dara.Model {
  /**
   * @remarks
   * The UID of the current user.
   * 
   * @example
   * 176316827610****
   */
  aliUid?: number;
  /**
   * @remarks
   * The subtype of the cloud product.
   * 
   * > For specific meanings, refer to the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) AssetSubType.
   * 
   * @example
   * 0
   */
  assetSubType?: number;
  /**
   * @remarks
   * The type of cloud asset.
   * > For specific meanings, refer to the [GetCloudAssetCriteria](~~GetCloudAssetCriteria~~) AssetType.
   * 
   * @example
   * 1
   */
  assetType?: number;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 77
   */
  checkId?: number;
  /**
   * @remarks
   * The display name of the check item section.
   */
  checkPolicies?: ListCheckRuleResponseBodyCheckRulesCheckPolicies[];
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Check for IPS Whitelist on CEN (Enterprise Edition) Tab
   */
  checkShowName?: string;
  /**
   * @remarks
   * The sub-asset type of the cloud product.
   * 
   * @example
   * INSTANCE
   */
  instanceSubType?: string;
  /**
   * @remarks
   * The asset type of the cloud product.
   * 
   * @example
   * ecs
   */
  instanceType?: string;
  /**
   * @remarks
   * Remark.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 8000**
   */
  ruleId?: number;
  /**
   * @remarks
   * The type of rule. Default is **WHITE**. Values:
   * - **WHITE**: Add to whitelist
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  /**
   * @remarks
   * The scope where the rule applies. Values:
   * - **INSTNACE**: Instance
   * - **ITEM**: Check item
   * 
   * @example
   * INSTANCE
   */
  scopeType?: string;
  /**
   * @remarks
   * The server vendor. Values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: Non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: Other cloud assets
   * 
   * @example
   * 0
   */
  vendor?: number;
  /**
   * @remarks
   * The name of the server provider.
   * 
   * @example
   * ALIYUN
   */
  vendorName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      assetSubType: 'AssetSubType',
      assetType: 'AssetType',
      checkId: 'CheckId',
      checkPolicies: 'CheckPolicies',
      checkShowName: 'CheckShowName',
      instanceSubType: 'InstanceSubType',
      instanceType: 'InstanceType',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      scopeType: 'ScopeType',
      vendor: 'Vendor',
      vendorName: 'VendorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      assetSubType: 'number',
      assetType: 'number',
      checkId: 'number',
      checkPolicies: { 'type': 'array', 'itemType': ListCheckRuleResponseBodyCheckRulesCheckPolicies },
      checkShowName: 'string',
      instanceSubType: 'string',
      instanceType: 'string',
      remark: 'string',
      ruleId: 'number',
      ruleType: 'string',
      scopeType: 'string',
      vendor: 'number',
      vendorName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkPolicies)) {
      $dara.Model.validateArray(this.checkPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRuleResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of data entries displayed on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of data entries displayed per page in a paginated query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of data entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Check rules.
   */
  checkRules?: ListCheckRuleResponseBodyCheckRules[];
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: ListCheckRuleResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of this request, which is a unique identifier generated by Alibaba Cloud for the request. It can be used for troubleshooting and problem localization.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkRules: 'CheckRules',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRules: { 'type': 'array', 'itemType': ListCheckRuleResponseBodyCheckRules },
      pageInfo: ListCheckRuleResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkRules)) {
      $dara.Model.validateArray(this.checkRules);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

