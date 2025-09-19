// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningSummaryResponseBodyWarningSummarys extends $dara.Model {
  /**
   * @remarks
   * The number of check items.
   * 
   * @example
   * 10
   */
  checkCount?: number;
  /**
   * @remarks
   * Indicates whether the risk item can be exploited. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  checkExploit?: boolean;
  /**
   * @remarks
   * Indicates  whether the risk item is a container runtime risk item. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  containerRisk?: boolean;
  /**
   * @remarks
   * Indicates whether the risk item is a database risk item. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  databaseRisk?: boolean;
  /**
   * @remarks
   * The number of high-risk items.
   * 
   * @example
   * 1
   */
  highWarningCount?: number;
  /**
   * @remarks
   * The time when the last baseline check was performed.
   * 
   * @example
   * 2019-01-01 12:23:00
   */
  lastFoundTime?: string;
  /**
   * @remarks
   * The risk level of the risk item. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  level?: string;
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
   * 2
   */
  mediumWarningCount?: number;
  /**
   * @remarks
   * The ID of the risk item.
   * 
   * @example
   * 118
   */
  riskId?: number;
  /**
   * @remarks
   * The name of the risk item.
   * 
   * @example
   * Redis
   */
  riskName?: string;
  /**
   * @remarks
   * The level-2 type of the risk item.
   * 
   * @example
   * Redis
   */
  subTypeAlias?: string;
  /**
   * @remarks
   * The level-1 type of the check item. Examples: database, system, weak password, and middleware.
   * 
   * @example
   * databases
   */
  typeAlias?: string;
  /**
   * @remarks
   * The number of assets on which risk items are detected.
   * 
   * @example
   * 11
   */
  warningMachineCount?: number;
  static names(): { [key: string]: string } {
    return {
      checkCount: 'CheckCount',
      checkExploit: 'CheckExploit',
      containerRisk: 'ContainerRisk',
      databaseRisk: 'DatabaseRisk',
      highWarningCount: 'HighWarningCount',
      lastFoundTime: 'LastFoundTime',
      level: 'Level',
      lowWarningCount: 'LowWarningCount',
      mediumWarningCount: 'MediumWarningCount',
      riskId: 'RiskId',
      riskName: 'RiskName',
      subTypeAlias: 'SubTypeAlias',
      typeAlias: 'TypeAlias',
      warningMachineCount: 'WarningMachineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkCount: 'number',
      checkExploit: 'boolean',
      containerRisk: 'boolean',
      databaseRisk: 'boolean',
      highWarningCount: 'number',
      lastFoundTime: 'string',
      level: 'string',
      lowWarningCount: 'number',
      mediumWarningCount: 'number',
      riskId: 'number',
      riskName: 'string',
      subTypeAlias: 'string',
      typeAlias: 'string',
      warningMachineCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of check items returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 00BD7CE2-284A-4534-BD09-FB69836DD750
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of check items.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The statistics of check items.
   */
  warningSummarys?: DescribeCheckWarningSummaryResponseBodyWarningSummarys[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      warningSummarys: 'WarningSummarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      warningSummarys: { 'type': 'array', 'itemType': DescribeCheckWarningSummaryResponseBodyWarningSummarys },
    };
  }

  validate() {
    if(Array.isArray(this.warningSummarys)) {
      $dara.Model.validateArray(this.warningSummarys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

