// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorNotifyAlert } from "./MonitorNotifyAlert";


export class MonitorNotifyAlertPageResult extends $dara.Model {
  intTotal?: number;
  notifyAlerts?: MonitorNotifyAlert[];
  requestId?: string;
  /**
   * @example
   * 24
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      intTotal: 'intTotal',
      notifyAlerts: 'notifyAlerts',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intTotal: 'number',
      notifyAlerts: { 'type': 'array', 'itemType': MonitorNotifyAlert },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notifyAlerts)) {
      $dara.Model.validateArray(this.notifyAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

