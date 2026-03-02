// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorAlertHistory } from "./MonitorAlertHistory";


export class MonitorAlertHistoryPageResult extends $dara.Model {
  alertHistories?: MonitorAlertHistory[];
  intTotal?: number;
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertHistories: 'alertHistories',
      intTotal: 'intTotal',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertHistories: { 'type': 'array', 'itemType': MonitorAlertHistory },
      intTotal: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertHistories)) {
      $dara.Model.validateArray(this.alertHistories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

