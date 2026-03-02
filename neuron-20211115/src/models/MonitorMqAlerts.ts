// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorMqAlert } from "./MonitorMqAlert";


export class MonitorMqAlerts extends $dara.Model {
  monitorMqAlerts?: MonitorMqAlert[];
  static names(): { [key: string]: string } {
    return {
      monitorMqAlerts: 'monitorMqAlerts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorMqAlerts: { 'type': 'array', 'itemType': MonitorMqAlert },
    };
  }

  validate() {
    if(Array.isArray(this.monitorMqAlerts)) {
      $dara.Model.validateArray(this.monitorMqAlerts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

