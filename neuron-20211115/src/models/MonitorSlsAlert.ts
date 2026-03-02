// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorNotifyStrategy } from "./MonitorNotifyStrategy";
import { MonitorSlsAlertRule } from "./MonitorSlsAlertRule";


export class MonitorSlsAlert extends $dara.Model {
  /**
   * @example
   * OR
   */
  condition?: string;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 2022-08-24T00:00:00.000Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-08-24T00:00:00.000Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  monitorNotifyStrategy?: MonitorNotifyStrategy;
  monitorSlsAlertRules?: MonitorSlsAlertRule[];
  /**
   * @example
   * 报警任务1
   */
  name?: string;
  /**
   * @example
   * 1001
   */
  pbcId?: string;
  /**
   * @example
   * 测试任务
   */
  remark?: string;
  /**
   * @example
   * 1001
   */
  serviceGroupId?: string;
  /**
   * @example
   * ARMS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      env: 'env',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      monitorNotifyStrategy: 'monitorNotifyStrategy',
      monitorSlsAlertRules: 'monitorSlsAlertRules',
      name: 'name',
      pbcId: 'pbcId',
      remark: 'remark',
      serviceGroupId: 'serviceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      env: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      monitorNotifyStrategy: MonitorNotifyStrategy,
      monitorSlsAlertRules: { 'type': 'array', 'itemType': MonitorSlsAlertRule },
      name: 'string',
      pbcId: 'string',
      remark: 'string',
      serviceGroupId: 'string',
      type: 'string',
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

