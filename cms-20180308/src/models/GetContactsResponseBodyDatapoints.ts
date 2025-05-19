// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetContactsResponseBodyDatapointsContacts } from "./GetContactsResponseBodyDatapointsContacts";


export class GetContactsResponseBodyDatapoints extends $dara.Model {
  contacts?: GetContactsResponseBodyDatapointsContacts;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'Contacts',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: GetContactsResponseBodyDatapointsContacts,
      name: 'string',
    };
  }

  validate() {
    if(this.contacts && typeof (this.contacts as any).validate === 'function') {
      (this.contacts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

