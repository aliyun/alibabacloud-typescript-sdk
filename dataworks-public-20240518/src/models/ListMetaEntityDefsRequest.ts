// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntityDefsRequest extends $dara.Model {
  /**
   * @remarks
   * A keyword to search for in the description. The system performs a fuzzy match.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the type definition. This parameter supports partial matching.
   * 
   * @example
   * CustomReport
   */
  displayName?: string;
  /**
   * @remarks
   * Filters the results by extension mode. Valid values: `NONE` and `TABLE`.
   * 
   * @example
   * NONE
   */
  extend?: string;
  /**
   * @remarks
   * The sort order. Valid values: `Asc` and `Desc`.
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
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Valid values: `Name`, `CreateTime`, and `ModifyTime`.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      extend: 'Extend',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      extend: 'string',
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

