// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The comment on the custom attribute. The service performs a fuzzy search based on this parameter\\"s value.
   * 
   * @example
   * owner
   */
  comment?: string;
  /**
   * @remarks
   * The display name of the custom attribute. The service performs a partial match based on this parameter\\"s value.
   * 
   * @example
   * Owner
   */
  displayName?: string;
  /**
   * @remarks
   * The entity types to which the custom attribute applies. To specify multiple entity types, separate them with commas (,), for example, `*-table,*-column`. This parameter supports specific entity types, such as `hms-table` and `emr-table`, and wildcard types, such as `*-table` and `*-column`.
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
   * The field to sort by. Valid values: CreateTime and ModifyTime.
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

