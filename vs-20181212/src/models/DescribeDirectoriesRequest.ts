// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @example
   * false
   */
  noPagination?: boolean;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  /**
   * @example
   * ID
   */
  sortBy?: string;
  /**
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

