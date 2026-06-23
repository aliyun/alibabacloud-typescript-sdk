// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The entity attributes. Complex values must be serialized into a JSON string.
   * 
   * @example
   * []
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The comment on the entity.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The custom attribute values. Each key specifies a custom attribute, and its value is an array that can contain at most one item. To delete an attribute value, provide an empty array.
   * 
   * @example
   * []
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The ID of the entity to update. The entity name, entity type, and parent-child relationship are determined by the ID and cannot be modified using this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      comment: 'Comment',
      customAttributes: 'CustomAttributes',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      comment: 'string',
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      id: 'string',
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

