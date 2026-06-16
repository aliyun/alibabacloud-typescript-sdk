// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRecordAnalysisResultShrinkRequest extends $dara.Model {
  alarmUniqueInfo?: string;
  aliyunLang?: string;
  uniqueInfo?: string;
  uniqueTagListShrink?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      aliyunLang: 'AliyunLang',
      uniqueInfo: 'UniqueInfo',
      uniqueTagListShrink: 'UniqueTagList',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      aliyunLang: 'string',
      uniqueInfo: 'string',
      uniqueTagListShrink: 'string',
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

