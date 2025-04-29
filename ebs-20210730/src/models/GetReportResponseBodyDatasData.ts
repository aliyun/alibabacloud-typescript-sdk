// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportResponseBodyDatasData extends $dara.Model {
  /**
   * @remarks
   * Data Points.
   * 
   * @example
   * {
   *   "1726416000": 0.44,
   *   "1726502400": 0.44,
   *   "1726588800": 0.44,
   *   "1726675200": 0.44,
   *   "1726761600": 0.43,
   *   "1726848000": 0.43,
   *   "1726934400": 0.43,
   *   "1727020800": 0.43
   * }
   */
  dataPoints?: { [key: string]: any };
  /**
   * @remarks
   * Data Labels.
   * 
   * @example
   * {
   *   "category": "cloud"
   * }
   */
  labels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dataPoints: 'DataPoints',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.dataPoints) {
      $dara.Model.validateMap(this.dataPoints);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

