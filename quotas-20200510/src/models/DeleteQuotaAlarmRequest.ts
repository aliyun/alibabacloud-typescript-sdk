// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQuotaAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * >  You can call the [ListQuotaAlarms](https://help.aliyun.com/document_detail/440561.html) operation to obtain the ID of a quota alert.
   * 
   * This parameter is required.
   * 
   * @example
   * 6b512ab7-da3a-4142-b529-2b2a9294****
   */
  alarmId?: string;
  static names(): { [key: string]: string } {
    return {
      alarmId: 'AlarmId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

