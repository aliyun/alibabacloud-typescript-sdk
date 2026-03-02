// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorMqAlertRule } from "./MonitorMqAlertRule";
import { MonitorNotifyStrategy } from "./MonitorNotifyStrategy";


export class MonitorMqAlert extends $dara.Model {
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
  monitorMqAlertRules?: MonitorMqAlertRule[];
  /**
   * @remarks
   * This parameter is required.
   */
  monitorNotifyStrategy?: MonitorNotifyStrategy;
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
      monitorMqAlertRules: 'monitorMqAlertRules',
      monitorNotifyStrategy: 'monitorNotifyStrategy',
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
      monitorMqAlertRules: { 'type': 'array', 'itemType': MonitorMqAlertRule },
      monitorNotifyStrategy: MonitorNotifyStrategy,
      name: 'string',
      pbcId: 'string',
      remark: 'string',
      serviceGroupId: 'string',
      type: 'string',
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

