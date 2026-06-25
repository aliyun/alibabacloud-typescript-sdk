// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricLastRequest extends $dara.Model {
  /**
   * @remarks
   * For instance-level monitoring, specify a list of Cloud Phone instance IDs.
   * 
   * <props="china">
   * 
   * For matrix-level monitoring, specify a list of matrix IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The end time for the query.
   * 
   * @example
   * 2019-01-31 11:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The list of instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The number of monitoring data records to return on each page for a paged query.
   * 
   * The default value is 1000. This means that 1000 monitoring data records are returned per page.
   * 
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * The list of monitoring metrics.
   * 
   * This parameter is required.
   */
  metricNames?: string[];
  /**
   * @remarks
   * The token that marks the start of the current read position. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistic period for monitoring data.
   * 
   * Valid values: 60, 900, and 3600.
   * 
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The start time for the query.
   * 
   * @example
   * 2019-01-31 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      endTime: 'EndTime',
      instanceIds: 'InstanceIds',
      length: 'Length',
      metricNames: 'MetricNames',
      nextToken: 'NextToken',
      period: 'Period',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      length: 'string',
      metricNames: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      period: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.metricNames)) {
      $dara.Model.validateArray(this.metricNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

