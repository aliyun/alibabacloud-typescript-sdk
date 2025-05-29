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

