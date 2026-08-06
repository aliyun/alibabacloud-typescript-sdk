// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the custom attribute. The value is fuzzy matched.
   * 
   * @example
   * owner
   */
  comment?: string;
  /**
   * @remarks
   * The display name of the custom attribute. The value is matched by plain text containment.
   * 
   * @example
   * Owner
   */
  displayName?: string;
  /**
   * @remarks
   * The entity types to which the custom attribute applies. Separate multiple entity types with commas, such as `*-table,*-column`. Specific entity types (such as hms-table and emr-table) and wildcard types `*-table` and `*-column` are supported.
   * 
   * @example
   * maxcompute-table
   */
  entityTypes?: string;
  /**
   * @remarks
   * The sort order. Valid values: Asc and Desc.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Valid values: CreateTime and ModifyTime.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      displayName: 'DisplayName',
      entityTypes: 'EntityTypes',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      displayName: 'string',
      entityTypes: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

