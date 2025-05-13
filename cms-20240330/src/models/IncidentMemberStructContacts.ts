// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentMemberStructContacts extends $dara.Model {
  channel?: string;
  contactMask?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      contactMask: 'contactMask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      contactMask: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

