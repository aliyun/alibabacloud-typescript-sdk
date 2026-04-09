// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResolveStatisticsResponseBodyDataPointsDataPoint extends $dara.Model {
  count?: number;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBodyDataPoints extends $dara.Model {
  dataPoint?: GetResolveStatisticsResponseBodyDataPointsDataPoint[];
  static names(): { [key: string]: string } {
    return {
      dataPoint: 'DataPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoint: { 'type': 'array', 'itemType': GetResolveStatisticsResponseBodyDataPointsDataPoint },
    };
  }

  validate() {
    if(Array.isArray(this.dataPoint)) {
      $dara.Model.validateArray(this.dataPoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveStatisticsResponseBody extends $dara.Model {
  dataPoints?: GetResolveStatisticsResponseBodyDataPoints;
  /**
   * @example
   * 50F9C40E-188D-B00B-BE2C-7427E531****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: GetResolveStatisticsResponseBodyDataPoints,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dataPoints && typeof (this.dataPoints as any).validate === 'function') {
      (this.dataPoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

