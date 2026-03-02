// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorMqAlertRule } from "./MonitorMqAlertRule";
import { MonitorNotifyStrategy } from "./MonitorNotifyStrategy";


export class MonitorMqAlertUpdateCmd extends $dara.Model {
  /**
   * @example
   * OR
   */
  condition?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  monitorMqAlertRules?: MonitorMqAlertRule[];
  monitorNotifyStrategy?: MonitorNotifyStrategy;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      monitorMqAlertRules: 'monitorMqAlertRules',
      monitorNotifyStrategy: 'monitorNotifyStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      id: 'number',
      monitorMqAlertRules: { 'type': 'array', 'itemType': MonitorMqAlertRule },
      monitorNotifyStrategy: MonitorNotifyStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.monitorMqAlertRules)) {
      $dara.Model.validateArray(this.monitorMqAlertRules);
    }
    if(this.monitorNotifyStrategy && typeof (this.monitorNotifyStrategy as any).validate === 'function') {
      (this.monitorNotifyStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

