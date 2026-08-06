// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaEntityDefShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The attribute definition list for custom entities. This parameter cannot be specified when extend is set to TABLE.
   * 
   * @example
   * []
   */
  attributeDefsShrink?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display name, up to 32 characters.
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
   * - NONE: default value. Indicates a custom entity with freely defined attributes.
   * - TABLE: indicates an extended table type. This type integrates in the same way as existing table types in DataWorks Data Map. You do not need to provide attribute definitions and can create corresponding Database/Table objects.
   * 
   * @example
   * TABLE
   */
  extend?: string;
  /**
   * @remarks
   * The name of the type definition. Custom types must match `^[a-z0-9][a-z0-9_]*$`. Extended table types must match `^[a-z0-9][a-z0-9_]*-table$`.
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

