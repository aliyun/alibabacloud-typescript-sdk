// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultRequestUniqueTagList extends $dara.Model {
  alarmUniqueInfo?: string;
  chooseLike?: boolean;
  ip?: string;
  machineInstanceId?: string;
  queryTime?: string;
  type?: string;
  uniqueInfo?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      chooseLike: 'ChooseLike',
      ip: 'Ip',
      machineInstanceId: 'MachineInstanceId',
      queryTime: 'QueryTime',
      type: 'Type',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      chooseLike: 'boolean',
      ip: 'string',
      machineInstanceId: 'string',
      queryTime: 'string',
      type: 'string',
      uniqueInfo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlertRecordAnalysisResultRequest extends $dara.Model {
  alarmUniqueInfo?: string;
  aliyunLang?: string;
  uniqueInfo?: string;
  uniqueTagList?: GetAlertRecordAnalysisResultRequestUniqueTagList[];
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      aliyunLang: 'AliyunLang',
      uniqueInfo: 'UniqueInfo',
      uniqueTagList: 'UniqueTagList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      aliyunLang: 'string',
      uniqueInfo: 'string',
      uniqueTagList: { 'type': 'array', 'itemType': GetAlertRecordAnalysisResultRequestUniqueTagList },
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.uniqueTagList)) {
      $dara.Model.validateArray(this.uniqueTagList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

