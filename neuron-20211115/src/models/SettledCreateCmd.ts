// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SettledCreateCmd extends $dara.Model {
  accountId?: string;
  application?: string;
  developerName?: string;
  email?: string;
  enterpriseName?: string;
  phone?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      application: 'application',
      developerName: 'developerName',
      email: 'email',
      enterpriseName: 'enterpriseName',
      phone: 'phone',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      application: 'string',
      developerName: 'string',
      email: 'string',
      enterpriseName: 'string',
      phone: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

