// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg";
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails";
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables";
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables";
import { DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables } from "./DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables";


export class DescribeWorkerDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  operatorAgg?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg[];
  /**
   * @remarks
   * The detection result items of abnormal operators.
   */
  operatorDetails?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails[];
  /**
   * @remarks
   * The detection result items of improper partitioned tables.
   */
  partitionedTables?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables[];
  /**
   * @remarks
   * The detection result items of skewed tables.
   */
  skewedTables?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables[];
  /**
   * @remarks
   * The detection result items of table access.
   */
  topAccessTables?: DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables[];
  static names(): { [key: string]: string } {
    return {
      operatorAgg: 'OperatorAgg',
      operatorDetails: 'OperatorDetails',
      partitionedTables: 'PartitionedTables',
      skewedTables: 'SkewedTables',
      topAccessTables: 'TopAccessTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatorAgg: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorAgg },
      operatorDetails: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsOperatorDetails },
      partitionedTables: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsPartitionedTables },
      skewedTables: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables },
      topAccessTables: { 'type': 'array', 'itemType': DescribeWorkerDetectionResponseBodyDetectionItemsResultsTopAccessTables },
    };
  }

  validate() {
    if(Array.isArray(this.operatorAgg)) {
      $dara.Model.validateArray(this.operatorAgg);
    }
    if(Array.isArray(this.operatorDetails)) {
      $dara.Model.validateArray(this.operatorDetails);
    }
    if(Array.isArray(this.partitionedTables)) {
      $dara.Model.validateArray(this.partitionedTables);
    }
    if(Array.isArray(this.skewedTables)) {
      $dara.Model.validateArray(this.skewedTables);
    }
    if(Array.isArray(this.topAccessTables)) {
      $dara.Model.validateArray(this.topAccessTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

