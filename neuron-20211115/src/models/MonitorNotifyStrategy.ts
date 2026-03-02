// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContactGroup } from "./MonitorContactGroup";
import { MonitorContact } from "./MonitorContact";
import { MonitorWebhook } from "./MonitorWebhook";


export class MonitorNotifyStrategy extends $dara.Model {
  channels?: string[];
  contactGroupIds?: number[];
  contactGroups?: MonitorContactGroup[];
  contactIds?: number[];
  contacts?: MonitorContact[];
  /**
   * @example
   * 1439
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 告警策略1
   */
  name?: string;
  requestId?: string;
  /**
   * @example
   * 00:00
   */
  startTime?: string;
  webhookIds?: number[];
  webhooks?: MonitorWebhook[];
  static names(): { [key: string]: string } {
    return {
      channels: 'channels',
      contactGroupIds: 'contactGroupIds',
      contactGroups: 'contactGroups',
      contactIds: 'contactIds',
      contacts: 'contacts',
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      requestId: 'requestId',
      startTime: 'startTime',
      webhookIds: 'webhookIds',
      webhooks: 'webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      contactGroupIds: { 'type': 'array', 'itemType': 'number' },
      contactGroups: { 'type': 'array', 'itemType': MonitorContactGroup },
      contactIds: { 'type': 'array', 'itemType': 'number' },
      contacts: { 'type': 'array', 'itemType': MonitorContact },
      endTime: 'string',
      id: 'number',
      name: 'string',
      requestId: 'string',
      startTime: 'string',
      webhookIds: { 'type': 'array', 'itemType': 'number' },
      webhooks: { 'type': 'array', 'itemType': MonitorWebhook },
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    if(Array.isArray(this.contactGroupIds)) {
      $dara.Model.validateArray(this.contactGroupIds);
    }
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    if(Array.isArray(this.contactIds)) {
      $dara.Model.validateArray(this.contactIds);
    }
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(Array.isArray(this.webhookIds)) {
      $dara.Model.validateArray(this.webhookIds);
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

