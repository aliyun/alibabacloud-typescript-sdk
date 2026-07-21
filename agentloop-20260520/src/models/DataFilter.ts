// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataFilter extends $dara.Model {
  /**
   * @remarks
   * The maximum number of evaluation records. This takes effect for both backfill and continuous runs. If not specified, the backend does not write a default value.
   * 
   * @example
   * 10
   */
  maxRecords?: number;
  /**
   * @remarks
   * The one-time temporary evaluation input content, primarily used for oneshot tasks. The value is stored as a string. Object or array values are serialized to a JSON string.
   * 
   * @example
   * {"input":"用户查询订单状态","output":"已查询到订单状态"}
   */
  provided?: { [key: string]: any };
  /**
   * @remarks
   * The data query filter condition. This takes effect together with the evaluator-level filters.query. In Trace scenarios, you can specify filter expressions such as service name, environment, or labels.
   * 
   * @example
   * serviceName=\\"checkout-service\\"
   */
  query?: string;
  /**
   * @remarks
   * The sampling rate percentage. Valid values: 0 to 100. A value of 0 or not specified indicates no sampling. A value of 100 indicates full data. If the value is less than 100, random sampling is applied first, and then the maxRecords limit is applied.
   * 
   * @example
   * 100
   */
  samplingRate?: number;
  serviceNames?: string[];
  static names(): { [key: string]: string } {
    return {
      maxRecords: 'maxRecords',
      provided: 'provided',
      query: 'query',
      samplingRate: 'samplingRate',
      serviceNames: 'serviceNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRecords: 'number',
      provided: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      query: 'string',
      samplingRate: 'number',
      serviceNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.provided) {
      $dara.Model.validateMap(this.provided);
    }
    if(Array.isArray(this.serviceNames)) {
      $dara.Model.validateArray(this.serviceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

