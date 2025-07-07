// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * List of monitoring data, consisting of a series of consecutive second-level timestamps and the corresponding metric values at those times.
   * 
   * @example
   * {"1699258861": 1,"1699259461": 0}
   */
  datapoints?: any;
  /**
   * @remarks
   * Labels.
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

