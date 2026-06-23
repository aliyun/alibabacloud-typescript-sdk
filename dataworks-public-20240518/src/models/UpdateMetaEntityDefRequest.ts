// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityAttributeDef } from "./MetaEntityAttributeDef";


export class UpdateMetaEntityDefRequest extends $dara.Model {
  /**
   * @remarks
   * The new description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The new display name. The maximum length is 32 characters.
   * 
   * @example
   * Business API
   */
  displayName?: string;
  /**
   * @remarks
   * The entity type.
   * 
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api
   */
  entityType?: string;
  /**
   * @remarks
   * The new attribute definitions. New attributes must be optional.
   * 
   * @example
   * []
   */
  newAttributeDefs?: MetaEntityAttributeDef[];
  /**
   * @remarks
   * The updates to existing attribute definitions. You can modify only the display name and description. You can also add enumerated values for attributes of the ENUM type.
   * 
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

