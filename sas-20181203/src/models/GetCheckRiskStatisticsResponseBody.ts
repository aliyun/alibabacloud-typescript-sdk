// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckRiskStatisticsResponseBodyDataSubStatistics extends $dara.Model {
  /**
   * @remarks
   * The name of the baseline type.
   * 
   * @example
   * weak_password
   */
  alias?: string;
  /**
   * @remarks
   * The number of high-risk items.
   * 
   * @example
   * 3
   */
  highWarningCount?: number;
  /**
   * @remarks
   * The number of low-risk items.
   * 
   * @example
   * 0
   */
  lowWarningCount?: number;
  /**
   * @remarks
   * The number of medium-risk items.
   * 
   * @example
   * 0
   */
  mediumWarningCount?: number;
  /**
   * @remarks
   * The number of passed check items.
   * 
   * @example
   * 2
   */
  passCount?: number;
  /**
   * @remarks
   * The total number of check items.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The baseline type.
   * 
   * @example
   * weak_password
   */
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      highWarningCount: 'HighWarningCount',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
      passCount: 'PassCount',
      totalCount: 'TotalCount',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      highWarningCount: 'number',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
      passCount: 'number',
      totalCount: 'number',
      typeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckRiskStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk items.
   * 
   * @example
   * 43
   */
  highWarningCount?: number;
  /**
   * @remarks
   * The number of low-risk items.
   * 
   * @example
   * 3
   */
  lowWarningCount?: number;
  /**
   * @remarks
   * The number of medium-risk items.
   * 
   * @example
   * 29
   */
  mediumWarningCount?: number;
  /**
   * @remarks
   * The number of passed check items.
   * 
   * @example
   * 143
   */
  passCount?: number;
  /**
   * @remarks
   * The name of the risk scenario.
   * 
   * @example
   * SECURITY
   */
  sceneName?: string;
  /**
   * @remarks
   * The statistics on check items that are used in the risk scenario by baseline type.
   */
  subStatistics?: GetCheckRiskStatisticsResponseBodyDataSubStatistics[];
  /**
   * @remarks
   * The total number of check items.
   * 
   * @example
   * 219
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      highWarningCount: 'HighWarningCount',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
      passCount: 'PassCount',
      sceneName: 'SceneName',
      subStatistics: 'SubStatistics',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highWarningCount: 'number',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
      passCount: 'number',
      sceneName: 'string',
      subStatistics: { 'type': 'array', 'itemType': GetCheckRiskStatisticsResponseBodyDataSubStatistics },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.subStatistics)) {
      $dara.Model.validateArray(this.subStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckRiskStatisticsResponseBodySummary extends $dara.Model {
  /**
   * @remarks
   * Check items handled today.
   * 
   * @example
   * 0
   */
  handledCheckToday?: number;
  /**
   * @remarks
   * A risk item exists.
   * 
   * @example
   * 3
   */
  handledCheckTotal?: number;
  /**
   * @remarks
   * Total days since check items were handled.
   * 
   * @example
   * 365
   */
  handledDays?: number;
  /**
   * @remarks
   * Check items that failed to pass the check.
   * 
   * @example
   * 1
   */
  riskCheckCnt?: number;
  /**
   * @remarks
   * Days since check items failed.
   * 
   * @example
   * 30
   */
  riskDays?: number;
  /**
   * @remarks
   * Risks to be handled.
   * 
   * @example
   * 5
   */
  riskWarningCnt?: number;
  static names(): { [key: string]: string } {
    return {
      handledCheckToday: 'HandledCheckToday',
      handledCheckTotal: 'HandledCheckTotal',
      handledDays: 'HandledDays',
      riskCheckCnt: 'RiskCheckCnt',
      riskDays: 'RiskDays',
      riskWarningCnt: 'RiskWarningCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handledCheckToday: 'number',
      handledCheckTotal: 'number',
      handledDays: 'number',
      riskCheckCnt: 'number',
      riskDays: 'number',
      riskWarningCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckRiskStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of risk scenarios.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * An array consisting of the statistics on check items that are used in risk scenarios.
   */
  data?: GetCheckRiskStatisticsResponseBodyData[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2C455672-2490-5211-84EC-420C7818****
   */
  requestId?: string;
  /**
   * @remarks
   * Historical check item statistics.
   */
  summary?: GetCheckRiskStatisticsResponseBodySummary;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': GetCheckRiskStatisticsResponseBodyData },
      requestId: 'string',
      summary: GetCheckRiskStatisticsResponseBodySummary,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

