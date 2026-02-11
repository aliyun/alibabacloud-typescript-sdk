// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRuleResponseBody extends $dara.Model {
  alertId?: number;
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

