// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID for fuzzy matching.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page size.
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
   * The sort criterion.
   * 
   * @example
   * Type
   */
  sortBy?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * - basic: Basic Edition.
   * - highleve: Upgraded Edition.
   * - advance: Advanced Edition.
   * - standard: Standard Edition.
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

