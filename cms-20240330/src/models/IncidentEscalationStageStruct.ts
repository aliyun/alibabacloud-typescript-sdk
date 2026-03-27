// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentContactStruct } from "./IncidentContactStruct";


export class IncidentEscalationStageStruct extends $dara.Model {
  /**
   * @remarks
   * Contact list.
   */
  contact?: IncidentContactStruct[];
  /**
   * @remarks
   * Number of recurring notification attempts.
   * 
   * @example
   * 3
   */
  cycleNotifyCount?: number;
  /**
   * @remarks
   * Recurring notification interval.
   * 
   * @example
   * 300
   */
  cycleNotifyTime?: number;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * Primary owner responsible for handling production environment alerts.
   */
  description?: string;
  /**
   * @remarks
   * Effective time period.
   * 
   * @example
   * 2025-04-05T00:00:00Z
   */
  effectTime?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * Operations team.
   */
  name?: string;
  /**
   * @remarks
   * Phase index.
   * 
   * @example
   * 1
   */
  stageIndex?: number;
  /**
   * @remarks
   * Time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @remarks
   * Time to wait before proceeding to the next phase.
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

