// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataFilter extends $dara.Model {
  /**
   * @remarks
   * The maximum number of evaluation records. This parameter takes effect for both backfill and continuous runs. If this parameter is not specified, the backend does not apply an additional default value.
   * 
   * @example
   * 10
   */
  maxRecords?: number;
  /**
   * @remarks
   * The single-shot input content for temporary evaluation, which is primarily used for one-shot tasks. Values are saved as strings. Object or array values are serialized into JSON strings.
   * 
   * @example
   * {"input":"User queries order status","output":"Order status queried"}
   */
  provided?: { [key: string]: any };
  /**
   * @remarks
   * The data query filter conditions that take effect together with the evaluator-level filters.query. For trace scenarios, you can specify filter expressions such as service name, environment, and tags.
   * 
   * @example
   * serviceName=\\"checkout-service\\"
   */
  query?: string;
  /**
   * @remarks
   * The sampling rate percentage. Valid values: 0 to 100. A value of 0 or an unspecified value indicates no sampling. A value of 100 indicates full sampling. If the value is less than 100, random sampling is performed first, and then the maxRecords limit is applied.
   * 
   * @example
   * 100
   */
  samplingRate?: number;
  /**
   * @remarks
   * The list of service names used to restrict the services involved in data filtering.
   * 
   * @example
   * ["checkout-service"]
   */
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

