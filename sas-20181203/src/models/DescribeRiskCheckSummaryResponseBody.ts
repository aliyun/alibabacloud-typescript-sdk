// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus extends $dara.Model {
  /**
   * @remarks
   * The number of detected risk items.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The status of the check item after the check is complete. Valid values:
   * 
   * - **pass**: The check item passed the check, which indicates that the check item is normal.
   * 
   * - **failed**: The check item failed the check, which indicates that the check item has risks.
   * 
   * @example
   * pass
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups extends $dara.Model {
  /**
   * @remarks
   * The list of check item result statistics.
   */
  countByStatus?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus[];
  /**
   * @remarks
   * The ID of the check item category.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The estimated check time.
   * 
   * @example
   * 0
   */
  remainingTime?: number;
  /**
   * @remarks
   * The sort order of the check item type in the **All Types** drop-down list in the console.
   * 
   * @example
   * 1
   */
  sort?: number;
  /**
   * @remarks
   * The check status. Valid values:
   * 
   * - **finish**: The check is complete.
   * 
   * - **running**: The check is in progress.
   * 
   * - **waiting**: The check is waiting.
   * 
   * - **notStart**: The check has not started.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The name of the check item category.
   * 
   * @example
   * 身份认证及权限
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      countByStatus: 'CountByStatus',
      id: 'Id',
      remainingTime: 'RemainingTime',
      sort: 'Sort',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countByStatus: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus },
      id: 'number',
      remainingTime: 'number',
      sort: 'number',
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.countByStatus)) {
      $dara.Model.validateArray(this.countByStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount extends $dara.Model {
  /**
   * @remarks
   * The number of check items at the specified risk level.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * - **high**: high risk
   * - **medium**: medium risk
   * - **low**: low risk.
   * 
   * @example
   * medium
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBodyRiskCheckSummary extends $dara.Model {
  /**
   * @remarks
   * The number of assets affected by risk items in the check results.
   * 
   * @example
   * 0
   */
  affectedAssetCount?: number;
  /**
   * @remarks
   * The number of check items that failed the check.
   * 
   * @example
   * 0
   */
  disabledRiskCount?: number;
  /**
   * @remarks
   * The number of check items that passed the check.
   * 
   * @example
   * 3
   */
  enabledRiskCount?: number;
  /**
   * @remarks
   * The statistics information list by check item type.
   */
  groups?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups[];
  /**
   * @remarks
   * The number of check items.
   * 
   * @example
   * 4
   */
  itemCount?: number;
  /**
   * @remarks
   * The number of risk items detected in the previous check.
   * 
   * @example
   * 0
   */
  previousCount?: number;
  /**
   * @remarks
   * The timestamp of the previous check. Unit: milliseconds.
   * 
   * @example
   * 1545012926000
   */
  previousTime?: number;
  /**
   * @remarks
   * The number of detected risk items.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The list of check item counts by risk level.
   */
  riskLevelCount?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount[];
  /**
   * @remarks
   * The percentage of detected risk items in the total number of check items.
   * 
   * @example
   * 0.25
   */
  riskRate?: number;
  static names(): { [key: string]: string } {
    return {
      affectedAssetCount: 'AffectedAssetCount',
      disabledRiskCount: 'DisabledRiskCount',
      enabledRiskCount: 'EnabledRiskCount',
      groups: 'Groups',
      itemCount: 'ItemCount',
      previousCount: 'PreviousCount',
      previousTime: 'PreviousTime',
      riskCount: 'RiskCount',
      riskLevelCount: 'RiskLevelCount',
      riskRate: 'RiskRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedAssetCount: 'number',
      disabledRiskCount: 'number',
      enabledRiskCount: 'number',
      groups: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroups },
      itemCount: 'number',
      previousCount: 'number',
      previousTime: 'number',
      riskCount: 'number',
      riskLevelCount: { 'type': 'array', 'itemType': DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount },
      riskRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    if(Array.isArray(this.riskLevelCount)) {
      $dara.Model.validateArray(this.riskLevelCount);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use it to troubleshoot issues.
   * 
   * @example
   * 291B49F9-1685-4005-9D34-606B6F78740F
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of cloud service configuration check results.
   */
  riskCheckSummary?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      riskCheckSummary: 'RiskCheckSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      riskCheckSummary: DescribeRiskCheckSummaryResponseBodyRiskCheckSummary,
    };
  }

  validate() {
    if(this.riskCheckSummary && typeof (this.riskCheckSummary as any).validate === 'function') {
      (this.riskCheckSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

