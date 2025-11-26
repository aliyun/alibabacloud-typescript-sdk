// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventResourceForEventViewEntity extends $dara.Model {
  domain?: string;
  entityId?: string;
  entityType?: string;
  prop?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      entityId: 'entityId',
      entityType: 'entityType',
      prop: 'prop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      entityId: 'string',
      entityType: 'string',
      prop: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.prop) {
      $dara.Model.validateMap(this.prop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventResourceForEventView extends $dara.Model {
  entity?: EventResourceForEventViewEntity;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      entity: 'entity',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entity: EventResourceForEventViewEntity,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.entity && typeof (this.entity as any).validate === 'function') {
      (this.entity as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

