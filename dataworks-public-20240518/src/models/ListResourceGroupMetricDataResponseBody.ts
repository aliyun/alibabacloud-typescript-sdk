// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMetricDataResponseBodyMetricDataMetrics extends $dara.Model {
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 1761184929633
   */
  timestamp?: number;
  /**
   * @remarks
   * The value of the metric data.
   * 
   * @example
   * 1.0
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMetricDataResponseBodyMetricData extends $dara.Model {
  /**
   * @remarks
   * The unique identifier for the resource group.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   CUSpec: Maximum CU capacity of the resource group, in CUs.
   * *   CUUsage: CU usage of the resource group, in CUs.
   * *   CUUtilization: CU utilization of the resource group, in %.
   * *   SlotSpec: Maximum number of concurrent slots for resource group scheduling, in slots.
   * *   SlotUsage: Used concurrency for resource group scheduling, in slots.
   * *   SchedulerCUMaxSpec: Maximum CU quota for data computing, in CUs.
   * *   SchedulerCUUsage: CU usage for data computing, in CUs.
   * *   SchedulerCUMinSpec: Minimum guaranteed CUs for data computing, in CUs.
   * *   DataIntegrationCUMaxSpec: Maximum CU quota for Data Integration, in CUs.
   * *   DataIntegrationCUUsage: CU usage for Data Integration, in CUs.
   * *   DataIntegrationCUMinSpec: Minimum guaranteed CUs for Data Integration, in CUs.
   * *   DataServiceCUMaxSpec: Maximum CU quota for DataService Studio, in CUs.
   * *   DataServiceCUUsage: CU usage for DataService Studio, in CUs.
   * *   DataServiceCUMinSpec: Minimum guaranteed CUs for DataService Studio, in CUs.
   * *   ServerIdeCUMaxSpec: Maximum CU quota for personal development environment, in CUs.
   * *   ServerIdeCUUsage: CU usage for personal development environment, in CUs.
   * *   ServerIdeCUMinSpec: Minimum guaranteed CUs for personal development environment, in CUs.
   * 
   * @example
   * CUSpec
   */
  metricName?: string;
  /**
   * @remarks
   * The list of metric data.
   */
  metrics?: ListResourceGroupMetricDataResponseBodyMetricDataMetrics[];
  /**
   * @remarks
   * The pagination cursor.
   * 
   * @example
   * tSBOXZcAmk+akxRkwRuXnGQEsIDODyd5ulPqgytNTbLp4bhb7fuvz13FXtm87Kfl
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metricName: 'MetricName',
      metrics: 'Metrics',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metricName: 'string',
      metrics: { 'type': 'array', 'itemType': ListResourceGroupMetricDataResponseBodyMetricDataMetrics },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Monitoring metric data.
   */
  metricData?: ListResourceGroupMetricDataResponseBodyMetricData;
  /**
   * @remarks
   * The request ID, used for locating logs and troubleshooting.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: ListResourceGroupMetricDataResponseBodyMetricData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.metricData && typeof (this.metricData as any).validate === 'function') {
      (this.metricData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

