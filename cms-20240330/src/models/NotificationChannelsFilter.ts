// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotificationChannelsFilter extends $dara.Model {
  containsContacts?: string[];
  containsCustomWebhooks?: string[];
  containsDingWebhooks?: string[];
  containsFsWebhooks?: string[];
  containsGroups?: string[];
  containsSlackWebhooks?: string[];
  containsWxWebhooks?: string[];
  static names(): { [key: string]: string } {
    return {
      containsContacts: 'containsContacts',
      containsCustomWebhooks: 'containsCustomWebhooks',
      containsDingWebhooks: 'containsDingWebhooks',
      containsFsWebhooks: 'containsFsWebhooks',
      containsGroups: 'containsGroups',
      containsSlackWebhooks: 'containsSlackWebhooks',
      containsWxWebhooks: 'containsWxWebhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containsContacts: { 'type': 'array', 'itemType': 'string' },
      containsCustomWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsDingWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsFsWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsGroups: { 'type': 'array', 'itemType': 'string' },
      containsSlackWebhooks: { 'type': 'array', 'itemType': 'string' },
      containsWxWebhooks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.containsContacts)) {
      $dara.Model.validateArray(this.containsContacts);
    }
    if(Array.isArray(this.containsCustomWebhooks)) {
      $dara.Model.validateArray(this.containsCustomWebhooks);
    }
    if(Array.isArray(this.containsDingWebhooks)) {
      $dara.Model.validateArray(this.containsDingWebhooks);
    }
    if(Array.isArray(this.containsFsWebhooks)) {
      $dara.Model.validateArray(this.containsFsWebhooks);
    }
    if(Array.isArray(this.containsGroups)) {
      $dara.Model.validateArray(this.containsGroups);
    }
    if(Array.isArray(this.containsSlackWebhooks)) {
      $dara.Model.validateArray(this.containsSlackWebhooks);
    }
    if(Array.isArray(this.containsWxWebhooks)) {
      $dara.Model.validateArray(this.containsWxWebhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

