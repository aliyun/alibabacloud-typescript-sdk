// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityAttributeDef } from "./MetaEntityAttributeDef";


export class UpdateMetaEntityDefRequest extends $dara.Model {
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * Business API
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @example
   * []
   */
  newAttributeDefs?: MetaEntityAttributeDef[];
  /**
   * @example
   * []
   */
  updateAttributeDefs?: MetaEntityAttributeDef[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      entityType: 'EntityType',
      newAttributeDefs: 'NewAttributeDefs',
      updateAttributeDefs: 'UpdateAttributeDefs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      entityType: 'string',
      newAttributeDefs: { 'type': 'array', 'itemType': MetaEntityAttributeDef },
      updateAttributeDefs: { 'type': 'array', 'itemType': MetaEntityAttributeDef },
    };
  }

  validate() {
    if(Array.isArray(this.newAttributeDefs)) {
      $dara.Model.validateArray(this.newAttributeDefs);
    }
    if(Array.isArray(this.updateAttributeDefs)) {
      $dara.Model.validateArray(this.updateAttributeDefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

