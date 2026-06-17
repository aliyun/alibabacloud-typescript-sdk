// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterTaskMetricsResponseBodyItemsSlsMetricsItems extends $dara.Model {
  /**
   * @remarks
   * The current step.
   * 
   * @example
   * 21
   */
  currentStep?: number;
  /**
   * @remarks
   * The epoch.
   * 
   * @example
   * 0.23
   */
  epoch?: number;
  /**
   * @remarks
   * The total number of steps.
   * 
   * @example
   * 90
   */
  globalStep?: number;
  /**
   * @remarks
   * The log time.
   * 
   * @example
   * 2026-01-15T14:16:49.52140317Z
   */
  logTime?: string;
  /**
   * @remarks
   * The metric details.
   * 
   * @example
   * {"memory(GiB)":"xxx"}
   */
  metric?: { [key: string]: any };
  /**
   * @remarks
   * The metric type.
   * 
   * @example
   * train
   */
  metricType?: string;
  /**
   * @remarks
   * The specific point in time when the monitoring metric was collected. The value is a UNIX timestamp. Unit: seconds.
   * 
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
  /**
   * @remarks
   * The list of metrics.
   */
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pm-2zejpr***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format in UTC.
   * 
   * @example
   * 2026-01-15T15:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list.
   */
  items?: DescribeAIDBClusterTaskMetricsResponseBodyItems;
  /**
   * @remarks
   * The metric type.
   * 
   * @example
   * all
   */
  metricType?: string;
  /**
   * @remarks
   * The page number of the returned page. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The total number of entries that match the query conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 5
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the associated PolarDB cluster.
   * 
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
   * @remarks
   * The start time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format in UTC.
   * 
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

