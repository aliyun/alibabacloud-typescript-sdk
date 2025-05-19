// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmHistoryResponseBodyAlarmHistoryListAlarmHistoryContactALIIMs extends $dara.Model {
  contactALIIM?: string[];
  static names(): { [key: string]: string } {
    return {
      contactALIIM: 'ContactALIIM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactALIIM: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactALIIM)) {
      $dara.Model.validateArray(this.contactALIIM);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

