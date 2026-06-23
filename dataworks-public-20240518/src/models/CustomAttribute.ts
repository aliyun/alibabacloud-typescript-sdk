// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomAttribute extends $dara.Model {
  /**
   * @remarks
   * Description of the custom attribute. It must be fewer than 256 characters.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * Creation time as a millisecond UNIX timestamp.
   * 
   * @example
   * 1750817692000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether this attribute is displayed on the page. Default is true.
   * 
   * @example
   * true
   */
  displayEnabled?: boolean;
  /**
   * @remarks
   * Display name for the custom attribute. It must be fewer than 128 characters.
   * 
   * @example
   * 业务负责人
   */
  displayName?: string;
  /**
   * @remarks
   * List of applicable entity types. Supports exact entity types and wildcard patterns such as `*-table` and `*-column`, for example:
   * 
   * - dataworks-project
   * 
   * - dataworks-dataset
   * 
   * - maxcompute-table
   * 
   * - maxcompute-column
   */
  entityTypes?: string[];
  /**
   * @remarks
   * Custom attribute ID. It must match the regular expression ^custom-attribute:[A-Za-z][A-Za-z0-9_]{0,98}$. The part after `custom-attribute:` must be fewer than 100 characters.
   * 
   * @example
   * custom-attribute:biz_owner
   */
  id?: string;
  /**
   * @remarks
   * Modification time as a millisecond UNIX timestamp.
   * 
   * @example
   * 1763380628000
   */
  modifyTime?: number;
  /**
   * @remarks
   * Indicates whether this attribute can be used as a filter on the search page (only affects search in Data Map). Only ENUM attributes can be set to true. Default is false.
   * 
   * @example
   * false
   */
  searchFilterEnabled?: boolean;
  /**
   * @remarks
   * Custom attribute type. Supported types are ENUM, TEXT, and HYPERLINK.
   * 
   * @example
   * TEXT
   */
  type?: string;
  /**
   * @remarks
   * Enumeration values. Required when Type is ENUM. Not supported for TEXT or HYPERLINK types.
   */
  valueEnums?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      displayEnabled: 'DisplayEnabled',
      displayName: 'DisplayName',
      entityTypes: 'EntityTypes',
      id: 'Id',
      modifyTime: 'ModifyTime',
      searchFilterEnabled: 'SearchFilterEnabled',
      type: 'Type',
      valueEnums: 'ValueEnums',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      displayEnabled: 'boolean',
      displayName: 'string',
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      modifyTime: 'number',
      searchFilterEnabled: 'boolean',
      type: 'string',
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

