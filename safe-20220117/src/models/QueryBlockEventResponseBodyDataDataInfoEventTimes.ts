// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryBlockEventResponseBodyDataDataInfoEventTimesRule } from "./QueryBlockEventResponseBodyDataDataInfoEventTimesRule";


export class QueryBlockEventResponseBodyDataDataInfoEventTimes extends $dara.Model {
  endTime?: number;
  express?: string;
  rule?: QueryBlockEventResponseBodyDataDataInfoEventTimesRule[];
  startTime?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      express: 'Express',
      rule: 'Rule',
      startTime: 'StartTime',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      express: 'string',
      rule: { 'type': 'array', 'itemType': QueryBlockEventResponseBodyDataDataInfoEventTimesRule },
      startTime: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rule)) {
      $dara.Model.validateArray(this.rule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

