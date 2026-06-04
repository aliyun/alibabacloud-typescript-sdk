// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaEntityDefShrinkRequest extends $dara.Model {
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
  newAttributeDefsShrink?: string;
  /**
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

