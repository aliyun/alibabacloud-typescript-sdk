// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaEntityDefShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of attribute definitions for the pure custom type. Do not specify this parameter if the `Extend` parameter is set to `TABLE`.
   * 
   * @example
   * []
   */
  attributeDefsShrink?: string;
  /**
   * @remarks
   * A description of the entity definition.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display name. The maximum length is 32 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Business API
   */
  displayName?: string;
  /**
   * @remarks
   * The extension mode. Valid values:
   * 
   * - `NONE`: The default value. Specifies a pure custom type with user-defined attributes.
   * 
   * - `TABLE`: Specifies an extended table type that references an existing table type in Data Map. Attribute definitions are not required for this type. You can create corresponding `Database` and `Table` objects for it.
   * 
   * @example
   * NONE
   */
  extend?: string;
  /**
   * @remarks
   * The type definition name. For a pure custom type, the name must match `^[a-z0-9][a-z0-9_]*$`. For an extended table type, the name must match `^[a-z0-9][a-z0-9_]*-table$`.
   * 
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

