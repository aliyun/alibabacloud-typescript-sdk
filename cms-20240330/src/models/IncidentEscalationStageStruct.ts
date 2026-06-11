// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentContactStruct } from "./IncidentContactStruct";


export class IncidentEscalationStageStruct extends $dara.Model {
  /**
   * @remarks
   * The list of contacts.
   */
  contact?: IncidentContactStruct[];
  /**
   * @remarks
   * The number of notifications sent per cycle.
   * 
   * @example
   * 3
   */
  cycleNotifyCount?: number;
  /**
   * @remarks
   * The notification interval.
   * 
   * @example
   * 300
   */
  cycleNotifyTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 负责处理生产环境告警的主负责人
   */
  description?: string;
  /**
   * @remarks
   * The effective time.
   * 
   * @example
   * 2025-04-05T00:00:00Z
   */
  effectTime?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 运维团队
   */
  name?: string;
  /**
   * @remarks
   * The stage index.
   * 
   * @example
   * 1
   */
  stageIndex?: number;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * The waiting time before the next stage begins.
   * 
   * @example
   * 600
   */
  waitToNextStageTime?: number;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      cycleNotifyCount: 'cycleNotifyCount',
      cycleNotifyTime: 'cycleNotifyTime',
      description: 'description',
      effectTime: 'effectTime',
      name: 'name',
      stageIndex: 'stageIndex',
      timeZone: 'timeZone',
      waitToNextStageTime: 'waitToNextStageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': IncidentContactStruct },
      cycleNotifyCount: 'number',
      cycleNotifyTime: 'number',
      description: 'string',
      effectTime: 'string',
      name: 'string',
      stageIndex: 'number',
      timeZone: 'string',
      waitToNextStageTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

