// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * Query by parent platform ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Sort by the specified field. Sorted by id by default.
   * 
   * @example
   * id
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Ascending by default. Valid values:
   * - asc (ascending)
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

