// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustomAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description for the custom attribute. It must be 256 characters or less.
   * 
   * @example
   * test comment
   */
  comment?: string;
  /**
   * @remarks
   * Whether to display the custom attribute in the UI.
   * 
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @remarks
   * The new display name for the custom attribute. It must be 128 characters or less.
   * 
   * @example
   * 业务负责人
   */
  displayName?: string;
  /**
   * @remarks
   * The applicable entity types. This parameter supports specific types and wildcard formats, such as `*-table` and `*-column`. For example:
   * 
   * - `dataworks-project`: A DataWorks workspace
   * 
   * - `dataworks-dataset`: A DataWorks dataset
   * 
   * - `maxcompute-table`: A MaxCompute table
   * 
   * - `*-column`: All column types
   */
  entityTypes?: string[];
  /**
   * @remarks
   * The custom attribute ID.
   * 
   * This parameter is required.
   * 
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  /**
   * @remarks
   * Whether the custom attribute can be used as a filter condition.
   * 
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @remarks
   * The enumerated values. This applies only to custom attributes of the `enum` type. You can only append new values during an update.
   */
  valueEnums?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypes: 'EntityTypes',
      id: 'Id',
      searchFilterEnabled: 'SearchFilterEnabled',
      valueEnums: 'ValueEnums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayEnabled: 'boolean',
      displayName: 'string',
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      searchFilterEnabled: 'boolean',
      valueEnums: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.valueEnums)) {
      $dara.Model.validateArray(this.valueEnums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

