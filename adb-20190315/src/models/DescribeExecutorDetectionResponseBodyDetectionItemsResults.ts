// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAgg } from "./DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAgg";
import { DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetails } from "./DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetails";


export class DescribeExecutorDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  operatorAgg?: DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAgg[];
  /**
   * @remarks
   * The detection result items of abnormal operators.
   */
  operatorDetails?: DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetails[];
  static names(): { [key: string]: string } {
    return {
      operatorAgg: 'OperatorAgg',
      operatorDetails: 'OperatorDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAgg: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAgg },
      operatorDetails: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetails },
    };
  }

  validate() {
    if(Array.isArray(this.operatorAgg)) {
      $dara.Model.validateArray(this.operatorAgg);
    }
    if(Array.isArray(this.operatorDetails)) {
      $dara.Model.validateArray(this.operatorDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

