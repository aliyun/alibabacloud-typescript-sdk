// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorArmsAlert } from "./MonitorArmsAlert";


export class MonitorArmsAlerts extends $dara.Model {
  monitorArmsAlerts?: MonitorArmsAlert[];
  static names(): { [key: string]: string } {
    return {
      monitorArmsAlerts: 'monitorArmsAlerts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorArmsAlerts: { 'type': 'array', 'itemType': MonitorArmsAlert },
    };
  }

  validate() {
    if(Array.isArray(this.monitorArmsAlerts)) {
      $dara.Model.validateArray(this.monitorArmsAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

