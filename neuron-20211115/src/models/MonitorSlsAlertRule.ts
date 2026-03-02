// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MonitorSlsAlertRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 规则1
   */
  name?: string;
  /**
   * @example
   * * | select status, count(*) as total group by status
   */
  queryCondition?: string;
  /**
   * @example
   * 5
   */
  triggerInterval?: number;
  /**
   * @example
   * MINUTE
   */
  triggerIntervalUnit?: string;
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
  /**
   * @example
   * 100
   */
  triggerThresholdUpper?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      queryCondition: 'queryCondition',
      triggerInterval: 'triggerInterval',
      triggerIntervalUnit: 'triggerIntervalUnit',
      triggerOperator: 'triggerOperator',
      triggerThreshold: 'triggerThreshold',
      triggerThresholdUpper: 'triggerThresholdUpper',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      queryCondition: 'string',
      triggerInterval: 'number',
      triggerIntervalUnit: 'string',
      triggerOperator: 'string',
      triggerThreshold: 'number',
      triggerThresholdUpper: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

