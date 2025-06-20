// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryBlockEventResponseBodyDataDataInfoEventTimes } from "./QueryBlockEventResponseBodyDataDataInfoEventTimes";
import { QueryBlockEventResponseBodyDataDataInfoLevelType } from "./QueryBlockEventResponseBodyDataDataInfoLevelType";


export class QueryBlockEventResponseBodyDataDataInfo extends $dara.Model {
  empId?: string;
  endTime?: number;
  eventTimes?: QueryBlockEventResponseBodyDataDataInfoEventTimes[];
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  reason?: string;
  startTime?: number;
  title?: string;
  url?: string;
  levelType?: QueryBlockEventResponseBodyDataDataInfoLevelType;
  versionId?: number;
  static names(): { [key: string]: string } {
    return {
      empId: 'EmpId',
      endTime: 'EndTime',
      eventTimes: 'EventTimes',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      reason: 'Reason',
      startTime: 'StartTime',
      title: 'Title',
      url: 'Url',
      levelType: 'levelType',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empId: 'string',
      endTime: 'number',
      eventTimes: { 'type': 'array', 'itemType': QueryBlockEventResponseBodyDataDataInfoEventTimes },
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      reason: 'string',
      startTime: 'number',
      title: 'string',
      url: 'string',
      levelType: QueryBlockEventResponseBodyDataDataInfoLevelType,
      versionId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventTimes)) {
      $dara.Model.validateArray(this.eventTimes);
    }
    if(this.levelType && typeof (this.levelType as any).validate === 'function') {
      (this.levelType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

