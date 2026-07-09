// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringExpressEscalation extends $dara.Model {
  /**
   * @remarks
   * The expression that defines the alert condition.
   */
  rawExpression?: string;
  /**
   * @remarks
   * The alert severity that triggers the escalation.
   */
  severity?: string;
  /**
   * @remarks
   * The number of alert occurrences required to trigger the escalation.
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

