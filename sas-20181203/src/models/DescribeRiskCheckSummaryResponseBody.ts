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
   * The status of the check item after the check is finished. Valid values:
   * 
   * *   **pass**: The check item passed the check, which indicates that the check item is normal.
   * *   **failed**: The check item failed the check, which indicates that risks are detected based on the check item.
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
   * An array that consists of the statistics about check results.
   */
  countByStatus?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryGroupsCountByStatus[];
  /**
   * @remarks
   * The ID of the check item type.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The remaining time before the check is complete.
   * 
   * @example
   * 0
   */
  remainingTime?: number;
  /**
   * @remarks
   * The sequence number of the check item type in the **All Types** drop-down list in the Security Center console.
   * 
   * @example
   * 1
   */
  sort?: number;
  /**
   * @remarks
   * The status of the check. Valid values:
   * 
   * *   **finish**: The check is finished.
   * *   **running**: The check is in progress.
   * *   **waiting**: The check is pending.
   * *   **notStart**: The check is not started.
   * 
   * @example
   * finish
   */
  status?: string;
  /**
   * @remarks
   * The name of the check item type.
   * 
   * @example
   * Identity authentication and permissions
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
   * The risk level of the check items. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
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
   * The number of affected assets.
   * 
   * @example
   * 0
   */
  affectedAssetCount?: number;
  /**
   * @remarks
   * The number of the check items that failed the check.
   * 
   * @example
   * 0
   */
  disabledRiskCount?: number;
  /**
   * @remarks
   * The number of the check items that passed the check.
   * 
   * @example
   * 3
   */
  enabledRiskCount?: number;
  /**
   * @remarks
   * An array that consists of the statistics for each type of check item.
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
   * The number of risk items detected in the last check.
   * 
   * @example
   * 0
   */
  previousCount?: number;
  /**
   * @remarks
   * The timestamp of the last check. Unit: milliseconds.
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
   * An array that consists of the number of check items at each risk level.
   */
  riskLevelCount?: DescribeRiskCheckSummaryResponseBodyRiskCheckSummaryRiskLevelCount[];
  /**
   * @remarks
   * The proportion of risk items to all check items.
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
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 291B49F9-1685-4005-9D34-606B6F78740F
   */
  requestId?: string;
  /**
   * @remarks
   * The summary information about the check results of cloud service configurations.
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

