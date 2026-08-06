// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaEntityDefsRequest extends $dara.Model {
  /**
   * @remarks
   * The description. Matched by fuzzy match.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the type definition. Matched by plain text containment.
   * 
   * @example
   * CustomReport
   */
  displayName?: string;
  /**
   * @remarks
   * The extension mode filter. Valid values:
   * 
   * - NONE: custom entity only.
   * - TABLE: extension table entity.
   * 
   * @example
   * TABLE
   */
  extend?: string;
  /**
   * @remarks
   * The sort direction. Valid values:
   * 
   * - Asc: ascending order.
   * - Desc: descending order.
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
   * The field by which to sort the results. Valid values:
   * 
   * - Name: sorted by name.
   * - CreateTime: sorted by creation time.
   * - ModifyTime: sorted by modification time.
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

