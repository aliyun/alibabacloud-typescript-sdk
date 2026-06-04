// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaEntityShrinkRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  attributesShrink?: string;
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * []
   */
  customAttributesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom_entity-customer_api:api_001
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      attributesShrink: 'Attributes',
      comment: 'Comment',
      customAttributesShrink: 'CustomAttributes',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributesShrink: 'string',
      comment: 'string',
      customAttributesShrink: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

