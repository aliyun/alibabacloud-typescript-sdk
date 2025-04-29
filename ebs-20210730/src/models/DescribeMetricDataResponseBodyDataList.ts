// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The datapoints that consist of consecutive timestamps in seconds and metric values that were recorded at these time points.
   * 
   * @example
   * {
   *         "1699258861": 1,
   *         "1699259461": 0,
   *         "1699260061": 0,
   *         "1699260661": 0,
   *         "1699261261": 0,
   *         "1699261861": 0,
   *         "1699262461": 0,
   *         "1699263061": 0,
   *         "1699263661": 0,
   *         "1699264261": 0,
   *         "1699264861": 0
   * }
   */
  datapoints?: any;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"DiskId": "d-1234"}
   */
  labels?: any;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'any',
      labels: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

