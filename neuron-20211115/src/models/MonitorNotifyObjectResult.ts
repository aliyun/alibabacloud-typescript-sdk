// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContactGroup } from "./MonitorContactGroup";
import { MonitorContact } from "./MonitorContact";
import { MonitorWebhook } from "./MonitorWebhook";


export class MonitorNotifyObjectResult extends $dara.Model {
  contactGroups?: MonitorContactGroup[];
  contacts?: MonitorContact[];
  requestId?: string;
  webhooks?: MonitorWebhook[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'contactGroups',
      contacts: 'contacts',
      requestId: 'requestId',
      webhooks: 'webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': MonitorContactGroup },
      contacts: { 'type': 'array', 'itemType': MonitorContact },
      requestId: 'string',
      webhooks: { 'type': 'array', 'itemType': MonitorWebhook },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(Array.isArray(this.webhooks)) {
      $dara.Model.validateArray(this.webhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

