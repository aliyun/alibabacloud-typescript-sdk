// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorSlsAlert } from "./MonitorSlsAlert";


export class MonitorSlsAlerts extends $dara.Model {
  monitorSlsAlerts?: MonitorSlsAlert[];
  static names(): { [key: string]: string } {
    return {
      monitorSlsAlerts: 'monitorSlsAlerts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorSlsAlerts: { 'type': 'array', 'itemType': MonitorSlsAlert },
    };
  }

  validate() {
    if(Array.isArray(this.monitorSlsAlerts)) {
      $dara.Model.validateArray(this.monitorSlsAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

