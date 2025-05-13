// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentNoteStructOperator extends $dara.Model {
  contact?: string;
  contactId?: string;
  name?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      contactId: 'contactId',
      name: 'name',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: 'string',
      contactId: 'string',
      name: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

