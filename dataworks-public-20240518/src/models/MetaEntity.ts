// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityDef } from "./MetaEntityDef";


export class MetaEntity extends $dara.Model {
  /**
   * @remarks
   * Entity attributes. Complex values are represented as JSON strings.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * Comment
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * Creation time as a millisecond-level timestamp
   * 
   * @example
   * 1780553640613
   */
  createTime?: number;
  /**
   * @remarks
   * Custom attribute values. The key is the custom attribute identifier. The value is a list of attribute values.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * Entity type
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * Entity ID
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  /**
   * @remarks
   * Attribute definition of the custom entity.
   * >Notice: For historical reasons, this property is not returned and its value is empty. We recommend that you use the GetMetaEntityDef API to obtain the entity type definition.
   */
  metaEntityDef?: MetaEntityDef;
  /**
   * @remarks
   * Modification time as a millisecond-level timestamp
   * 
   * @example
   * 1763380628000
   */
  modifyTime?: number;
  /**
   * @remarks
   * Entity name
   * 
   * @example
   * api_001
   */
  name?: string;
  /**
   * @remarks
   * Owner ID. The default value is the Alibaba Cloud UID of the creator.
   * 
   * @example
   * 207924799988354
   */
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      comment: 'Comment',
      createTime: 'CreateTime',
      customAttributes: 'CustomAttributes',
      entityType: 'EntityType',
      id: 'Id',
      metaEntityDef: 'MetaEntityDef',
      modifyTime: 'ModifyTime',
      name: 'Name',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      comment: 'string',
      createTime: 'number',
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      entityType: 'string',
      id: 'string',
      metaEntityDef: MetaEntityDef,
      modifyTime: 'number',
      name: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(this.customAttributes) {
      $dara.Model.validateMap(this.customAttributes);
    }
    if(this.metaEntityDef && typeof (this.metaEntityDef as any).validate === 'function') {
      (this.metaEntityDef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

