// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetricStoresRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Metricstore. For example, you can set the parameter to standard to query Standard Metricstores.
   * 
   * @example
   * standard
   */
  mode?: string;
  /**
   * @remarks
   * The name of the Metricstore. Fuzzy search is supported. If you do not specify this parameter, all Metricstores are involved.
   * 
   * @example
   * metric_store
   */
  name?: string;
  /**
   * @remarks
   * The start position of the query.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 500
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      name: 'name',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      name: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

