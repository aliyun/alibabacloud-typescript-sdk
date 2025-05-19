// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertHistoryListResponseBodyAlarmHistoryListAlarmHistoryContactMails extends $dara.Model {
  contactMail?: string[];
  static names(): { [key: string]: string } {
    return {
      contactMail: 'ContactMail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactMail: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactMail)) {
      $dara.Model.validateArray(this.contactMail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

