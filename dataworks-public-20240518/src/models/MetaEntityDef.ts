// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityAttributeDef } from "./MetaEntityAttributeDef";


export class MetaEntityDef extends $dara.Model {
  attributeDefs?: MetaEntityAttributeDef[];
  createTime?: number;
  description?: string;
  displayName?: string;
  /**
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @example
   * NONE
   */
  extend?: string;
  modifyTime?: number;
  /**
   * @example
   * customer_api
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributeDefs: 'AttributeDefs',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      entityType: 'EntityType',
      extend: 'Extend',
      modifyTime: 'ModifyTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDefs: { 'type': 'array', 'itemType': MetaEntityAttributeDef },
      createTime: 'number',
      description: 'string',
      displayName: 'string',
      entityType: 'string',
      extend: 'string',
      modifyTime: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributeDefs)) {
      $dara.Model.validateArray(this.attributeDefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

