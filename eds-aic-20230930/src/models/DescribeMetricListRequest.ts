// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricListRequestProcessInfos extends $dara.Model {
  processIds?: number[];
  /**
   * @example
   * php-fpm
   */
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      processIds: 'ProcessIds',
      processName: 'ProcessName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processIds: { 'type': 'array', 'itemType': 'number' },
      processName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricListRequest extends $dara.Model {
  androidInstanceIds?: string[];
  /**
   * @example
   * 2019-01-31 11:00:00
   */
  endTime?: string;
  instanceIds?: string[];
  /**
   * @example
   * 1000
   */
  length?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  metricNames?: string[];
  /**
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kw9dGL5jves2FS9RLq****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: number;
  processInfos?: DescribeMetricListRequestProcessInfos[];
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
      processInfos: 'ProcessInfos',
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
      processInfos: { 'type': 'array', 'itemType': DescribeMetricListRequestProcessInfos },
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
    if(Array.isArray(this.processInfos)) {
      $dara.Model.validateArray(this.processInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

