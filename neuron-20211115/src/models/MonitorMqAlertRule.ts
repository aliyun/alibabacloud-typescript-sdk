// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorMqAlertRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * PBC_Topic1
   */
  metricDimension?: string;
  /**
   * @example
   * appstat.jvm.gc.oldgccountinstant
   */
  metricKey?: string;
  /**
   * @example
   * TOPIC
   */
  metricType?: string;
  /**
   * @example
   * 规则1
   */
  name?: string;
  /**
   * @example
   * 5
   */
  triggerInterval?: number;
  /**
   * @example
   * GreaterThanOrEqualToThreshold
   */
  triggerOperator?: string;
  /**
   * @example
   * 10
   */
  triggerThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      metricDimension: 'metricDimension',
      metricKey: 'metricKey',
      metricType: 'metricType',
      name: 'name',
      triggerInterval: 'triggerInterval',
      triggerOperator: 'triggerOperator',
      triggerThreshold: 'triggerThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      metricDimension: 'string',
      metricKey: 'string',
      metricType: 'string',
      name: 'string',
      triggerInterval: 'number',
      triggerOperator: 'string',
      triggerThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

