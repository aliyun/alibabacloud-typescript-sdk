// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom attribute. The description must be less than 256 characters in length.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to display the attribute on the product page. The default value is true.
   * 
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @remarks
   * The display name of the custom attribute. The name must be less than 128 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 业务负责人
   */
  displayName?: string;
  /**
   * @remarks
   * The list of applicable entity types. You can specify precise entity types or use wildcards such as `*-table` and `*-column`. Examples:
   * 
   * - dataworks-project: a DataWorks workspace.
   * 
   * - dataworks-dataset: a DataWorks dataset.
   * 
   * - maxcompute-table: a MaxCompute table.
   * 
   * - \\*-column: all field types.
   * 
   * This parameter is required.
   */
  entityTypesShrink?: string;
  /**
   * @remarks
   * The ID of the custom attribute. The ID must match the regular expression `^custom-attribute:[A-Za-z][A-Za-z0-9_]{0,98}$`. The part after \\`custom-attribute:\\` must be less than 100 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  /**
   * @remarks
   * Specifies whether the attribute can be used as a filter on the Data Map search page. The default value is false. Currently, you can set this parameter to true only for attributes of the ENUM type.
   * 
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @remarks
   * The type of the custom attribute. Valid values are ENUM, TEXT, and HYPERLINK.
   * 
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  type?: string;
  /**
   * @remarks
   * The enumeration values. This parameter is required when \\`Type\\` is set to \\`ENUM\\`. It is not supported for the TEXT and HYPERLINK types.
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

