// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventResourceForEventViewEntity extends $dara.Model {
  /**
   * @remarks
   * The product domain to which the resource belongs.
   * 
   * @example
   * "ECS"
   */
  domain?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * "i-bp123456"
   */
  entityId?: string;
  /**
   * @remarks
   * The specific type of the resource.
   * 
   * @example
   * "Instance"
   */
  entityType?: string;
  /**
   * @remarks
   * Extra properties of the resource.
   * 
   * @example
   * { "name": "web-server-01", "ip": "10.0.0.1" }
   */
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
  /**
   * @remarks
   * The resource entity.
   */
  entity?: EventResourceForEventViewEntity;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * { "env": "prod", "project": "payment-gateway" }
   */
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

