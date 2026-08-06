// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom attribute. The value must be less than 256 characters in length.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to display the attribute on the details page. Default value: true.
   * 
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @remarks
   * The display name of the custom attribute. The value must be less than 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * BusinessOwner
   */
  displayName?: string;
  /**
   * @remarks
   * The list of applicable entity types. Exact entity types and wildcard patterns such as `*-table` and `*-column` are supported. Examples:
   * - dataworks-project: workspace
   * - dataworks-dataset: DataWorks dataset
   * - maxcompute-table: MaxCompute table
   * - *-column: all column types
   * 
   * This parameter is required.
   */
  entityTypesShrink?: string;
  /**
   * @remarks
   * The custom attribute ID. The value must match `^custom-attribute:[A-Za-z][A-Za-z0-9_]{0,98}$`. The part after custom-attribute: must be less than 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether the attribute can be used as a filter condition on the DataWorks Data Map search page. Default value: false. Currently, only the ENUM type supports setting this value to true.
   * 
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @remarks
   * The type of the custom attribute. Valid values: ENUM, TEXT, and HYPERLINK.
   * 
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  type?: string;
  /**
   * @remarks
   * The enumeration values. This parameter is required when type is set to ENUM. This parameter is not supported for TEXT or HYPERLINK types.
   */
  valueEnumsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypesShrink: 'EntityTypes',
      id: 'Id',
      searchFilterEnabled: 'SearchFilterEnabled',
      type: 'Type',
      valueEnumsShrink: 'ValueEnums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayEnabled: 'boolean',
      displayName: 'string',
      entityTypesShrink: 'string',
      id: 'string',
      searchFilterEnabled: 'boolean',
      type: 'string',
      valueEnumsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

