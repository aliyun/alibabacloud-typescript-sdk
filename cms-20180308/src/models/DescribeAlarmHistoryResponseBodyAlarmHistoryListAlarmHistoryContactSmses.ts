// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmHistoryResponseBodyAlarmHistoryListAlarmHistoryContactSmses extends $dara.Model {
  contactSms?: string[];
  static names(): { [key: string]: string } {
    return {
      contactSms: 'ContactSms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactSms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactSms)) {
      $dara.Model.validateArray(this.contactSms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

