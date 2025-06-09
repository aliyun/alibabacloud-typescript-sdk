// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetricStoresResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The names of the Metricstores.
   */
  metricstores?: string[];
  /**
   * @remarks
   * The total number of queried Metricstores.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      metricstores: 'metricstores',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      metricstores: { 'type': 'array', 'itemType': 'string' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metricstores)) {
      $dara.Model.validateArray(this.metricstores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

