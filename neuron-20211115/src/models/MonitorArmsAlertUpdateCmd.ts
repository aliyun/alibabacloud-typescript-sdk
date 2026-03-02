// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorArmsAlertRule } from "./MonitorArmsAlertRule";
import { MonitorNotifyStrategy } from "./MonitorNotifyStrategy";


export class MonitorArmsAlertUpdateCmd extends $dara.Model {
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
  monitorArmsAlertRules?: MonitorArmsAlertRule[];
  monitorNotifyStrategy?: MonitorNotifyStrategy;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      monitorArmsAlertRules: 'monitorArmsAlertRules',
      monitorNotifyStrategy: 'monitorNotifyStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      id: 'number',
      monitorArmsAlertRules: { 'type': 'array', 'itemType': MonitorArmsAlertRule },
      monitorNotifyStrategy: MonitorNotifyStrategy,
    };
  }

  validate() {
    if(Array.isArray(this.monitorArmsAlertRules)) {
      $dara.Model.validateArray(this.monitorArmsAlertRules);
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

