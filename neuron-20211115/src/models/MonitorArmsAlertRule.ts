// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorArmsAlertRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * appstat.jvm.gc.oldgccountinstant
   */
  metricKey?: string;
  /**
   * @example
   * JVM
   */
  metricType?: string;
  /**
   * @example
   * 规则1
   */
  name?: string;
  /**
   * @example
   * AVG
   */
  triggerAggregate?: string;
  /**
   * @example
   * 5
   */
  triggerInterval?: number;
  /**
   * @example
   * CURRENT_GTE
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
      metricKey: 'metricKey',
      metricType: 'metricType',
      name: 'name',
      triggerAggregate: 'triggerAggregate',
      triggerInterval: 'triggerInterval',
      triggerOperator: 'triggerOperator',
      triggerThreshold: 'triggerThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      metricKey: 'string',
      metricType: 'string',
      name: 'string',
      triggerAggregate: 'string',
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

