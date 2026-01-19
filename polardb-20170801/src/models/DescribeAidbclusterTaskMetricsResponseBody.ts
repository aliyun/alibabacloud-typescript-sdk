// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems extends $dara.Model {
  /**
   * @example
   * 21
   */
  currentStep?: number;
  /**
   * @example
   * 0.23
   */
  epoch?: number;
  /**
   * @example
   * 90
   */
  globalStep?: number;
  /**
   * @example
   * 2026-01-15T14:16:49.52140317Z
   */
  logTime?: string;
  /**
   * @example
   * {"memory(GiB)":"xxx"}
   */
  metric?: { [key: string]: any };
  /**
   * @example
   * train
   */
  metricType?: string;
  /**
   * @example
   * 1742090703
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      currentStep: 'CurrentStep',
      epoch: 'Epoch',
      globalStep: 'GlobalStep',
      logTime: 'LogTime',
      metric: 'Metric',
      metricType: 'MetricType',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStep: 'number',
      epoch: 'number',
      globalStep: 'number',
      logTime: 'string',
      metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metricType: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.metric) {
      $dara.Model.validateMap(this.metric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTaskMetricsResponseBodyItems extends $dara.Model {
  slsMetricsItems?: DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems[];
  static names(): { [key: string]: string } {
    return {
      slsMetricsItems: 'SlsMetricsItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsMetricsItems: { 'type': 'array', 'itemType': DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems },
    };
  }

  validate() {
    if(Array.isArray(this.slsMetricsItems)) {
      $dara.Model.validateArray(this.slsMetricsItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterTaskMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * pm-2zejpr***
   */
  DBClusterId?: string;
  /**
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  items?: DescribeAIDBClusterTaskMetricsResponseBodyItems;
  /**
   * @example
   * all
   */
  metricType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 5
   */
  pageRecordCount?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pc-2zejpr***
   */
  relativeDbClusterId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E71541A-6007-4DCC-A38A-F872C31FEB45
   */
  requestId?: string;
  /**
   * @example
   * 2026-01-15T14:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      items: 'Items',
      metricType: 'MetricType',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      relativeDbClusterId: 'RelativeDbClusterId',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      items: DescribeAIDBClusterTaskMetricsResponseBodyItems,
      metricType: 'string',
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      relativeDbClusterId: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

