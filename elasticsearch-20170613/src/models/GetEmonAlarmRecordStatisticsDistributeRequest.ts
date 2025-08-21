// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmonAlarmRecordStatisticsDistributeRequest extends $dara.Model {
  body?: string;
  groupId?: string;
  timeEnd?: number;
  timeStart?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      groupId: 'groupId',
      timeEnd: 'timeEnd',
      timeStart: 'timeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      groupId: 'string',
      timeEnd: 'number',
      timeStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

