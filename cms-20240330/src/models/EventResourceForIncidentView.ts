// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventResourceForIncidentView extends $dara.Model {
  domain?: string;
  entityId?: string;
  entityType?: string;
  probs?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      entityId: 'entityId',
      entityType: 'entityType',
      probs: 'probs',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      entityId: 'string',
      entityType: 'string',
      probs: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

