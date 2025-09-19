// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListStrategyStatisticsResponseBodyStrategies extends $dara.Model {
  /**
   * @remarks
   * The number of the servers on which the policy takes effect.
   * 
   * @example
   * 9
   */
  assetCount?: number;
  /**
   * @remarks
   * The learning progress of the policy. Unit: percent (%).
   * 
   * @example
   * 80
   */
  progress?: number;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: learning
   * *   **2**: paused
   * *   **3**: learning completed
   * *   **4**: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 11906
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * win
   */
  strategyName?: string;
  /**
   * @remarks
   * The intelligent learning duration. Unit: hour.
   * 
   * @example
   * 9
   */
  studyTime?: number;
  /**
   * @remarks
   * The number of suspicious processes.
   * 
   * @example
   * 1
   */
  suspiciousProcCount?: number;
  /**
   * @remarks
   * The number of trusted processes.
   * 
   * @example
   * 2
   */
  trustProcCount?: number;
  /**
   * @remarks
   * The number of malicious processes.
   * 
   * @example
   * 2
   */
  virusProcCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetCount: 'AssetCount',
      progress: 'Progress',
      status: 'Status',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      studyTime: 'StudyTime',
      suspiciousProcCount: 'SuspiciousProcCount',
      trustProcCount: 'TrustProcCount',
      virusProcCount: 'VirusProcCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCount: 'number',
      progress: 'number',
      status: 'number',
      strategyId: 'number',
      strategyName: 'string',
      studyTime: 'number',
      suspiciousProcCount: 'number',
      trustProcCount: 'number',
      virusProcCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListStrategyStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 571B2642-BF51-5BDD-906B-D2340DB9****
   */
  requestId?: string;
  /**
   * @remarks
   * The statistics of the policies.
   */
  strategies?: DescribeWhiteListStrategyStatisticsResponseBodyStrategies[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      strategies: 'Strategies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      strategies: { 'type': 'array', 'itemType': DescribeWhiteListStrategyStatisticsResponseBodyStrategies },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.strategies)) {
      $dara.Model.validateArray(this.strategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

