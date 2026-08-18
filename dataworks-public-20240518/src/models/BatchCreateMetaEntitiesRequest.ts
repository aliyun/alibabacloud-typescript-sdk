// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateMetaEntitiesRequestEntities extends $dara.Model {
  /**
   * @remarks
   * The entity attributes. Complex values must be serialized as JSON strings.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The custom attribute values. The key is the custom attribute identifier, and the value currently supports only a single value.
   * <notice>The custom attributes used here must be created in advance by calling the CreateCustomAttribute operation. For example, after you call the API to create a custom attribute with the ID `custom-attribute:owner_name`, you can configure {\\"owner_name\\": [\\"Bob\\"]} here to complete the custom attribute configuration.</notice>
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The entity type. All entities in the same batch must have the same type. The following types are supported:
   * - Custom entity types, such as custom_entity-biz_api.
   * - Extension table types. If the metadata entity type custom_dw-table is registered, you can create objects of the corresponding database type custom_dw-database and table type custom_dw-table.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * The entity name. The name can contain uppercase letters, lowercase letters, digits, and underscores (_). It must start with a letter and can be up to 64 characters in length.
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
   * The list of entities. A maximum of five entities are supported. All entities in the same batch must have the same entityType.
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

