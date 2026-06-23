// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateMetaEntitiesRequestEntities extends $dara.Model {
  /**
   * @remarks
   * The entity attributes. Complex values must be serialized into a JSON string.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The comment for the entity.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The custom attribute values. The key is the identifier of the custom attribute, and the value is a single-element list.
   * >Notice: The custom attributes used here must be created in advance by using the CreateCustomAttribute API. For example, after you create a custom attribute with the ID `custom-attribute:owner_name`, you can configure the custom attribute by setting this parameter to {\\"owner_name\\": [\\"Bob\\"]}.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The entity type. All entities in a batch must have the same type. The following types are supported:
   * 
   * - Custom types, such as `custom_entity-biz_api`.
   * 
   * - Extended table types. For example, if you have registered the `custom_dw-table` metadata entity type, you can create objects of the corresponding `custom_dw-database` (database) and `custom_dw-table` (table) types.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * The entity name. The name can contain uppercase letters, lowercase letters, digits, and underscores (_). It must start with a letter and not exceed 64 characters.
   * 
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
   * An entity list. You can create up to five entities in a batch. All entities in the batch must have the same `EntityType`.
   * 
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

