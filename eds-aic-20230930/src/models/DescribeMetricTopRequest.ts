// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricTopRequest extends $dara.Model {
  androidInstanceIds?: string[];
  /**
   * @example
   * 2019-01-31 11:00:00
   */
  endTime?: string;
  instanceIds?: string[];
  /**
   * @example
   * 100
   */
  length?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricNames?: string[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6l5V9uONHqPtDLM2U8s****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: number;
  /**
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

