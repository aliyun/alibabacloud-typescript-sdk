// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringPrometheusEscalation extends $dara.Model {
  /**
   * @remarks
   * The PromQL expression that defines the alert condition. This parameter is required.
   */
  promQl?: string;
  /**
   * @remarks
   * The severity of the alert that triggers the escalation. This parameter is required.
   */
  severity?: string;
  /**
   * @remarks
   * The number of consecutive times the condition must be met to trigger an escalation. This parameter is required.
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

