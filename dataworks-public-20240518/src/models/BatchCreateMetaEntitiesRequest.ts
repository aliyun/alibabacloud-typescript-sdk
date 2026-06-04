// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateMetaEntitiesRequestEntities extends $dara.Model {
  attributes?: { [key: string]: string };
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * api_001
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      comment: 'Comment',
      customAttributes: 'CustomAttributes',
      entityType: 'EntityType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      comment: 'string',
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      entityType: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.customAttributes) {
      $dara.Model.validateMap(this.customAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateMetaEntitiesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  entities?: BatchCreateMetaEntitiesRequestEntities[];
  static names(): { [key: string]: string } {
    return {
      entities: 'Entities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entities: { 'type': 'array', 'itemType': BatchCreateMetaEntitiesRequestEntities },
    };
  }

  validate() {
    if(Array.isArray(this.entities)) {
      $dara.Model.validateArray(this.entities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

