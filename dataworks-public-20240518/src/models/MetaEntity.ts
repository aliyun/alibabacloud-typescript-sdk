// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityDef } from "./MetaEntityDef";


export class MetaEntity extends $dara.Model {
  attributes?: { [key: string]: string };
  comment?: string;
  createTime?: number;
  customAttributes?: { [key: string]: string[] };
  /**
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  metaEntityDef?: MetaEntityDef;
  modifyTime?: number;
  /**
   * @example
   * api_001
   */
  name?: string;
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

