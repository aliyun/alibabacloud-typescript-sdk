// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaEntityDefShrinkRequest extends $dara.Model {
  /**
   * @example
   * []
   */
  attributeDefsShrink?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Business API
   */
  displayName?: string;
  /**
   * @example
   * NONE
   */
  extend?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * biz_api
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributeDefsShrink: 'AttributeDefs',
      description: 'Description',
      displayName: 'DisplayName',
      extend: 'Extend',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeDefsShrink: 'string',
      description: 'string',
      displayName: 'string',
      extend: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

