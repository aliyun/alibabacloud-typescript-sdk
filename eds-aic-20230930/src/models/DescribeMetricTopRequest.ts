// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricTopRequest extends $dara.Model {
  /**
   * @remarks
   * For instance-level monitoring, specify a list of cloud phone instance IDs.
   * 
   * <props="china">
   * 
   * For matrix-level monitoring, specify a list of matrix IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The end time of the query.
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
   * The number of entries to return on each page. This parameter is used for paged queries.
   * 
   * > The maximum value is 100 when the metric is \\`instance_in_traffic\\` or \\`instance_out_traffic\\`.
   * 
   * @example
   * 100
   */
  length?: string;
  /**
   * @remarks
   * The list of metrics.
   * 
   * This parameter is required.
   */
  metricNames?: string[];
  /**
   * @remarks
   * The token that marks the start of the next page of results. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @remarks
   * The statistical period of the monitoring data.
   * Unit: seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The start time of the query.
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

