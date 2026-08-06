// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaEntityDefShrinkRequest extends $dara.Model {
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
   * The new display name, up to 32 characters.
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
  newAttributeDefsShrink?: string;
  /**
   * @remarks
   * Updates to existing attribute definitions. Only modifying the display name, description, and appending enum values to ENUM types are supported.
   * 
   * @example
   * []
   */
  updateAttributeDefsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      entityType: 'EntityType',
      newAttributeDefsShrink: 'NewAttributeDefs',
      updateAttributeDefsShrink: 'UpdateAttributeDefs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      entityType: 'string',
      newAttributeDefsShrink: 'string',
      updateAttributeDefsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

