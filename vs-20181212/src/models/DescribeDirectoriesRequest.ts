// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the group to which the directory belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * Disable paging. Default is false.
   * 
   * @example
   * false
   */
  noPagination?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Default is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size. Default is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Query by parent directory ID.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @remarks
   * Sort by the specified field. Default is by ID.
   * 
   * @example
   * ID
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Default is ascending. Values:
   * 
   * - asc (ascending)
   * 
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      noPagination: 'NoPagination',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      parentId: 'ParentId',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      noPagination: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      parentId: 'string',
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

