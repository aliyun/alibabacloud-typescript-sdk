// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListStrategyListResponseBodyStrategies extends $dara.Model {
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
   * 8795555
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The intelligent learning duration. Unit: hour.
   * 
   * @example
   * 5
   */
  studyTime?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      studyTime: 'StudyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      strategyId: 'number',
      strategyName: 'string',
      studyTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListStrategyListResponseBody extends $dara.Model {
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
   * The information about the policies.
   */
  strategies?: DescribeWhiteListStrategyListResponseBodyStrategies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategies: { 'type': 'array', 'itemType': DescribeWhiteListStrategyListResponseBodyStrategies },
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

