// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The value of the performance metric at a point in time.
   */
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.point)) {
      $dara.Model.validateArray(this.point);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * adbpg_datashare_topic_count
   */
  name?: string;
  /**
   * @remarks
   * One or more values of the performance metric.
   */
  values?: DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeysSeriesValues },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * adbpg_datashare_topic_count
   */
  name?: string;
  /**
   * @remarks
   * Details of the performance metric.
   */
  series?: DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * int
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeysSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataSharePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * @example
   * 2022-08-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * Details of data sharing performance metrics.
   */
  performanceKeys?: DescribeDataSharePerformanceResponseBodyPerformanceKeys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBE00C04-A3E8-4114-881D-0480A72CB92E
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query.
   * 
   * @example
   * 2022-08-03T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDataSharePerformanceResponseBodyPerformanceKeys },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceKeys)) {
      $dara.Model.validateArray(this.performanceKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

