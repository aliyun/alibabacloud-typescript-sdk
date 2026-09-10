// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringPrometheusEscalation extends $dara.Model {
  /**
   * @remarks
   * The PromQL query statement.
   * 
   * @example
   * rate(http_errors_total[5m]) > 0.1
   */
  promQl?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
  /**
   * @remarks
   * The number of consecutive times the alert is triggered.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      promQl: 'promQl',
      severity: 'severity',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promQl: 'string',
      severity: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

