// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemWarningSummaryResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The suggestion for the check item.
   * 
   * @example
   * In the Administrative Tools window, double-click Local Security Policy. In the Local Security Policy window that appears, choose Security Settings\\\\Local Policies\\\\Audit Policy, configure all audit policies as: `Success, Failure`.
   */
  advice?: string;
  /**
   * @remarks
   * The list of affiliated baseline categories.
   */
  affiliatedRiskTypes?: string[];
  /**
   * @remarks
   * The list of affiliated baselines.
   */
  affiliatedRisks?: string[];
  /**
   * @remarks
   * The baseline category name.
   * 
   * @example
   * week_pa****
   * 
   * @deprecated
   */
  alias?: string;
  /**
   * @remarks
   * The check item ID.
   * 
   * @example
   * 696
   */
  checkId?: number;
  /**
   * @remarks
   * The check item description.
   * 
   * @example
   * Config the Event Audit policys
   */
  checkItem?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * high
   */
  checkLevel?: string;
  /**
   * @remarks
   * The check item category.
   * 
   * @example
   * Security audit
   */
  checkType?: string;
  /**
   * @remarks
   * Indicates whether the check item belongs to the container runtime category. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  containerCheckItem?: boolean;
  /**
   * @remarks
   * The detailed description of the check item.
   * 
   * @example
   * Config the Event Audit policys
   */
  description?: string;
  /**
   * @remarks
   * The list of baselines enabled for the check item.
   */
  enableRisks?: string[];
  /**
   * @remarks
   * The baseline category.
   * 
   * @example
   * weak_password
   * 
   * @deprecated
   */
  riskType?: string;
  /**
   * @remarks
   * The risk status of the check item. Valid values:
   * - **1**: Failed.
   * - **3**: Passed.
   * - **6**: Whitelisted.
   * - **8**: Fixed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The number of machines affected by the check item risk.
   * 
   * @example
   * 20
   */
  warningMachineCount?: number;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      affiliatedRiskTypes: 'AffiliatedRiskTypes',
      affiliatedRisks: 'AffiliatedRisks',
      alias: 'Alias',
      checkId: 'CheckId',
      checkItem: 'CheckItem',
      checkLevel: 'CheckLevel',
      checkType: 'CheckType',
      containerCheckItem: 'ContainerCheckItem',
      description: 'Description',
      enableRisks: 'EnableRisks',
      riskType: 'RiskType',
      status: 'Status',
      warningMachineCount: 'WarningMachineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      affiliatedRiskTypes: { 'type': 'array', 'itemType': 'string' },
      affiliatedRisks: { 'type': 'array', 'itemType': 'string' },
      alias: 'string',
      checkId: 'number',
      checkItem: 'string',
      checkLevel: 'string',
      checkType: 'string',
      containerCheckItem: 'boolean',
      description: 'string',
      enableRisks: { 'type': 'array', 'itemType': 'string' },
      riskType: 'string',
      status: 'number',
      warningMachineCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.affiliatedRiskTypes)) {
      $dara.Model.validateArray(this.affiliatedRiskTypes);
    }
    if(Array.isArray(this.affiliatedRisks)) {
      $dara.Model.validateArray(this.affiliatedRisks);
    }
    if(Array.isArray(this.enableRisks)) {
      $dara.Model.validateArray(this.enableRisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCheckItemWarningSummaryResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of check items displayed on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page when paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page when paging.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of check items returned.
   * 
   * @example
   * 149
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

export class ListCheckItemWarningSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of check item risk statistics information.
   */
  list?: ListCheckItemWarningSummaryResponseBodyList[];
  /**
   * @remarks
   * The pagination information of the query result.
   */
  pageInfo?: ListCheckItemWarningSummaryResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * DC97C9EC-4B7D-5EFF-8A5E-A5CCC9ED****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListCheckItemWarningSummaryResponseBodyList },
      pageInfo: ListCheckItemWarningSummaryResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
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

