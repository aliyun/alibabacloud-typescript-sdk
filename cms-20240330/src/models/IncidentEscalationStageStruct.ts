// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IncidentContactStruct } from "./IncidentContactStruct";


export class IncidentEscalationStageStruct extends $dara.Model {
  contact?: IncidentContactStruct[];
  cycleNotifyCount?: number;
  cycleNotifyTime?: number;
  description?: string;
  effectTime?: string;
  name?: string;
  stageIndex?: number;
  timeZone?: string;
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

