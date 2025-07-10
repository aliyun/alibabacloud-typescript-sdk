// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscribeRequestDmAttributes extends $dara.Model {
  accountName?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

