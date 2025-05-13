// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentContactStruct extends $dara.Model {
  channel?: string[];
  contactId?: string;
  contactType?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      contactId: 'contactId',
      contactType: 'contactType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: { 'type': 'array', 'itemType': 'string' },
      contactId: 'string',
      contactType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channel)) {
      $dara.Model.validateArray(this.channel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

