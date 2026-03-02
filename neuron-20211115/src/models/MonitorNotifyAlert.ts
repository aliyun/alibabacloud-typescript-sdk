// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorContactGroup } from "./MonitorContactGroup";
import { MonitorContact } from "./MonitorContact";
import { MonitorWebhook } from "./MonitorWebhook";


export class MonitorNotifyAlert extends $dara.Model {
  contactGroups?: MonitorContactGroup[];
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
  name?: string;
  notifyChannels?: string[];
  ruleNames?: string[];
  /**
   * @example
   * 00:00
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 日志
   */
  type?: string;
  webhooks?: MonitorWebhook[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'contactGroups',
      contacts: 'contacts',
      endTime: 'endTime',
      id: 'id',
      name: 'name',
      notifyChannels: 'notifyChannels',
      ruleNames: 'ruleNames',
      startTime: 'startTime',
      type: 'type',
      webhooks: 'webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': MonitorContactGroup },
      contacts: { 'type': 'array', 'itemType': MonitorContact },
      endTime: 'string',
      id: 'number',
      name: 'string',
      notifyChannels: { 'type': 'array', 'itemType': 'string' },
      ruleNames: { 'type': 'array', 'itemType': 'string' },
      startTime: 'string',
      type: 'string',
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
    if(Array.isArray(this.notifyChannels)) {
      $dara.Model.validateArray(this.notifyChannels);
    }
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
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

