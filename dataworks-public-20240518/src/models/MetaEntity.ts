// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityDef } from "./MetaEntityDef";


export class MetaEntity extends $dara.Model {
  /**
   * @remarks
   * The entity properties. Complex values are represented as JSON strings.
   * 
   * @example
   * {"key1": "v1"}
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
   * The creation time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1780553640613
   */
  createTime?: number;
  /**
   * @remarks
   * The custom attribute values. The key is the custom attribute identifier, and the value is a list of attribute values.
   * 
   * @example
   * {"owner_name":["Zhang San"]}
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The entity type.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  /**
   * @remarks
   * The property definition of the custom entity. <notice>This legacy property is not populated. To retrieve the entity type definition, call GetMetaEntityDef.</notice>
   */
  metaEntityDef?: MetaEntityDef;
  /**
   * @remarks
   * The modification time. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1763380628000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The entity name.
   * 
   * @example
   * api_001
   */
  name?: string;
  /**
   * @remarks
   * The owner ID. Default value: the Alibaba Cloud UID of the creator.
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

