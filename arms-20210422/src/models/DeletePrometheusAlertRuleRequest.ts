// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePrometheusAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertId?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

