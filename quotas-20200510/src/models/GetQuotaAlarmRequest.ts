// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQuotaAlarmRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the quota alert.
   * 
   * For more information about how to query the ID of a quota alert, see [ListQuotaAlarms](https://help.aliyun.com/document_detail/184348.html).
   * 
   * @example
   * 78d7e436-4b25-4897-84b5-d7b656bb****
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

