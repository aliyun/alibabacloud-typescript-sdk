// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Provider extends $dara.Model {
  company?: string;
  companyId?: number;
  contact?: string;
  email?: string;
  team?: string;
  teamId?: number;
  static names(): { [key: string]: string } {
    return {
      company: 'company',
      companyId: 'companyId',
      contact: 'contact',
      email: 'email',
      team: 'team',
      teamId: 'teamId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      company: 'string',
      companyId: 'number',
      contact: 'string',
      email: 'string',
      team: 'string',
      teamId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

