// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Settled extends $dara.Model {
  accountId?: string;
  application?: string;
  developerName?: string;
  email?: string;
  enterpriseName?: string;
  gmtCreate?: string;
  id?: number;
  phone?: string;
  requestId?: string;
  status?: string;
  type?: string;
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      application: 'application',
      developerName: 'developerName',
      email: 'email',
      enterpriseName: 'enterpriseName',
      gmtCreate: 'gmtCreate',
      id: 'id',
      phone: 'phone',
      requestId: 'requestId',
      status: 'status',
      type: 'type',
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
      gmtCreate: 'string',
      id: 'number',
      phone: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
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

