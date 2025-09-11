// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults extends $dara.Model {
  /**
   * @remarks
   * The average value of the operator metric.
   * 
   * @example
   * 235.5
   */
  avgValue?: number;
  /**
   * @remarks
   * The maximum value of the operator metric.
   * 
   * @example
   * 2335
   */
  maxValue?: number;
  /**
   * @remarks
   * The number of occurrences of the operator.
   * 
   * @example
   * 5
   */
  operatorCount?: number;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * Aggregation
   */
  operatorName?: string;
  /**
   * @remarks
   * The cumulative value of the operator metric.
   * 
   * @example
   * 234
   */
  totalValue?: number;
  static names(): { [key: string]: string } {
    return {
      avgValue: 'AvgValue',
      maxValue: 'MaxValue',
      operatorCount: 'OperatorCount',
      operatorName: 'OperatorName',
      totalValue: 'TotalValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgValue: 'number',
      maxValue: 'number',
      operatorCount: 'number',
      operatorName: 'string',
      totalValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAgg extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * PeakMemory
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of operator metric aggregation.
   */
  searchResults?: DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorAggSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults extends $dara.Model {
  /**
   * @remarks
   * The number of rows input by the operator.
   * 
   * @example
   * 123
   */
  inputRows?: number;
  /**
   * @remarks
   * The amount of data input by the operator. Unit: bytes.
   * 
   * @example
   * 2345
   */
  inputSize?: number;
  /**
   * @remarks
   * The total CPU time consumed by all operators in the stage, which is equivalent to the total CPU time of the stage. You can use this parameter to determine which parts of the stage consume a large amount of computing resources. Unit: milliseconds.
   * 
   * @example
   * 2354
   */
  operatorCost?: number;
  /**
   * @remarks
   * The property information about the operator.
   * 
   * @example
   * GROUP BY field: uid
   */
  operatorInfo?: string;
  /**
   * @remarks
   * The name of the operator.
   * 
   * @example
   * TableScan
   */
  operatorName?: string;
  /**
   * @remarks
   * The number of rows output by the operator.
   * 
   * @example
   * 2354
   */
  outputRows?: number;
  /**
   * @remarks
   * The amount of data output by the operator. Unit: bytes.
   * 
   * @example
   * 2345
   */
  outputSize?: number;
  /**
   * @remarks
   * The peak memory of the operator.
   * 
   * @example
   * 2334
   */
  peakMemory?: number;
  /**
   * @remarks
   * The query ID that can be used for diagnostics.
   * 
   * @example
   * 202405061006230110150170540315119xxxx
   */
  processId?: string;
  /**
   * @remarks
   * The stage ID.
   * 
   * @example
   * Stage[7]
   */
  stageId?: string;
  static names(): { [key: string]: string } {
    return {
      inputRows: 'InputRows',
      inputSize: 'InputSize',
      operatorCost: 'OperatorCost',
      operatorInfo: 'OperatorInfo',
      operatorName: 'OperatorName',
      outputRows: 'OutputRows',
      outputSize: 'OutputSize',
      peakMemory: 'PeakMemory',
      processId: 'ProcessId',
      stageId: 'StageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputRows: 'number',
      inputSize: 'number',
      operatorCost: 'number',
      operatorInfo: 'string',
      operatorName: 'string',
      outputRows: 'number',
      outputSize: 'number',
      peakMemory: 'number',
      processId: 'string',
      stageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the detection metric.
   * 
   * @example
   * PeakMemory
   */
  metricName?: string;
  /**
   * @remarks
   * The detection result items of abnormal operators.
   */
  searchResults?: DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      searchResults: 'SearchResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      searchResults: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItemsResultsOperatorDetailsSearchResults },
    };
  }

  validate() {
    if(Array.isArray(this.searchResults)) {
      $dara.Model.validateArray(this.searchResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeExecutorDetectionResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the detection result.
   * 
   * @example
   * Large amounts of memory resources are used by the Aggregation operator.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * CPU increase detection
   */
  name?: string;
  /**
   * @remarks
   * The detection result items.
   */
  results?: DescribeExecutorDetectionResponseBodyDetectionItemsResults;
  /**
   * @remarks
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * WARNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      results: DescribeExecutorDetectionResponseBodyDetectionItemsResults,
      status: 'string',
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeExecutorDetectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeExecutorDetectionResponseBodyDetectionItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B20BA053-27A1-5FDF-B063-6D6146720DF6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeExecutorDetectionResponseBodyDetectionItems },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

