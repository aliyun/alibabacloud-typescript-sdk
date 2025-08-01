// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCardSmsStatisticsSendListRequest extends $dara.Model {
  customTmpCode?: string;
  sendDateEnd?: string;
  sendDateStart?: string;
  signName?: string;
  tmpCode?: string;
  static names(): { [key: string]: string } {
    return {
      customTmpCode: 'CustomTmpCode',
      sendDateEnd: 'SendDateEnd',
      sendDateStart: 'SendDateStart',
      signName: 'SignName',
      tmpCode: 'TmpCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTmpCode: 'string',
      sendDateEnd: 'string',
      sendDateStart: 'string',
      signName: 'string',
      tmpCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

