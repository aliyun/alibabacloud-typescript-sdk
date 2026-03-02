// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorNotifyStrategy } from "./MonitorNotifyStrategy";
import { MonitorSlsAlertRule } from "./MonitorSlsAlertRule";


export class MonitorSlsAlertUpdateCmd extends $dara.Model {
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
  monitorNotifyStrategy?: MonitorNotifyStrategy;
  monitorSlsAlertRules?: MonitorSlsAlertRule[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      id: 'id',
      monitorNotifyStrategy: 'monitorNotifyStrategy',
      monitorSlsAlertRules: 'monitorSlsAlertRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      id: 'number',
      monitorNotifyStrategy: MonitorNotifyStrategy,
      monitorSlsAlertRules: { 'type': 'array', 'itemType': MonitorSlsAlertRule },
    };
  }

  validate() {
    if(this.monitorNotifyStrategy && typeof (this.monitorNotifyStrategy as any).validate === 'function') {
      (this.monitorNotifyStrategy as any).validate();
    }
    if(Array.isArray(this.monitorSlsAlertRules)) {
      $dara.Model.validateArray(this.monitorSlsAlertRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

