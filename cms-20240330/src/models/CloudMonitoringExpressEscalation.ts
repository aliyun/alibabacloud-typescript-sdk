// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringExpressEscalation extends $dara.Model {
  /**
   * @remarks
   * The raw expression.
   */
  rawExpression?: string;
  /**
   * @remarks
   * The severity level.
   */
  severity?: string;
  /**
   * @remarks
   * The number of consecutive times the alert is triggered.
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      rawExpression: 'rawExpression',
      severity: 'severity',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rawExpression: 'string',
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

