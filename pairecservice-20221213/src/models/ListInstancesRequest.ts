// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance. You can use this parameter to perform a fuzzy search for instances.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The sort order. Valid values: `Asc` (ascending) and `Desc` (descending).
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * Type
   */
  sortBy?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - `basic`: Basic edition
   * 
   * - `high-level`: High-level edition
   * 
   * - `advanced`: Advanced edition
   * 
   * - `standard`: Standard edition
   * 
   * @example
   * basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

