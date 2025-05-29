// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The value of the performance metric and the time when the metric value was collected.
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

