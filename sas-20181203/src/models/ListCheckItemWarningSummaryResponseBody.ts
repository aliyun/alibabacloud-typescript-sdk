// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemWarningSummaryResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The suggestion on the check item.
   * 
   * @example
   * In the Administrative Tools window, double-click Local Security Policy. In the Local Security Policy window that appears, choose Security Settings\\\\Local Policies\\\\Audit Policy, configure all audit policies as: `Success, Failure`.
   */
  advice?: string;
  /**
   * @remarks
   * The types of the baselines to which the check item belongs.
   */
  affiliatedRiskTypes?: string[];
  /**
   * @remarks
   * The baselines to which the check item belongs.
   */
  affiliatedRisks?: string[];
  /**
   * @remarks
   * The alias of the baseline type.
   * 
   * @example
   * week_pa****
   * 
   * @deprecated
   */
  alias?: string;
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 696
   */
  checkId?: number;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * Config the Event Audit policys
   */
  checkItem?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  checkLevel?: string;
  /**
   * @remarks
   * The type of the check item.
   * 
   * @example
   * Security audit
   */
  checkType?: string;
  /**
   * @remarks
   * Indicates whether the check item belongs to the container runtime type. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  containerCheckItem?: boolean;
  /**
   * @remarks
   * The description of the check item.
   * 
   * @example
   * Config the Event Audit policys
   */
  description?: string;
  /**
   * @remarks
   * The baselines in which the check item is enabled.
   */
  enableRisks?: string[];
  /**
   * @remarks
   * The type of the baseline.
   * 
   * @example
   * weak_password
   * 
   * @deprecated
   */
  riskType?: string;
  /**
   * @remarks
   * Risk status of check items. Valid values:
   * 
   * *   **1**: failed
   * *   **3**: passed
   * *   **6**: whitelisted
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The number of servers that are affected by the check item.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The total number of entries returned.
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
   * List of check item risk statistics.
   */
  list?: ListCheckItemWarningSummaryResponseBodyList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListCheckItemWarningSummaryResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

