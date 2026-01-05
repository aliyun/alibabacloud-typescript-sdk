// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceGroupMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The start time.
   * 
   * Supported format: Unix timestamp in milliseconds (the number of milliseconds that have elapsed since January 1, 1970).
   * 
   * The interval between BeginTime and EndTime must be less than or equal to 31 days.
   * 
   * Default: The current time minus 2 hours, expressed as a millisecond Unix timestamp.
   * 
   * @example
   * 1593950832000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time.
   * 
   * Supported format: Unix timestamp in milliseconds (the number of milliseconds that have elapsed since January 1, 1970).
   * 
   * The interval between BeginTime and EndTime must be less than or equal to 31 days.
   * 
   * Default: The current time, expressed as a millisecond Unix timestamp.
   * 
   * @example
   * 1750176000000
   */
  endTime?: number;
  /**
   * @remarks
   * The number of records to display on each page for paginated queries.
   * 
   * >  The maximum value of Length for a single request is 1440.
   * 
   * @example
   * 100
   */
  length?: number;
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
   * This parameter is required.
   * 
   * @example
   * CUSpec
   */
  metricName?: string;
  /**
   * @remarks
   * The pagination cursor.
   * 
   * >  If this parameter is not set, the first page of data is retrieved. If a value is returned for this parameter, it indicates that there is a next page. You can use the returned NextToken as a parameter to request the next page of data until it returns Null, which means all data has been retrieved.
   * 
   * @example
   * FFqBJBxE8I0PE0IUO6K69k7m2FfyWNNc2qQ9ReUkazhz9VA7dWZKlxBcjUwOV0imSM
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period for monitoring data.
   * 
   * Value: A multiple of 60.
   * 
   * Unit: Seconds.
   * 
   * Default: 60.
   * 
   * @example
   * 60
   */
  period?: string;
  /**
   * @remarks
   * The unique identifier for the general-purpose resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
      length: 'Length',
      metricName: 'MetricName',
      nextToken: 'NextToken',
      period: 'Period',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      length: 'number',
      metricName: 'string',
      nextToken: 'string',
      period: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

