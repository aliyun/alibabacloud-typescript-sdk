// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrometheusAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule. You can call the ListPrometheusAlertRules operation to query the ID of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 3888704
   */
  alertId?: number;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * cc7a37ee31aea4ed1a059eff8034b****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

