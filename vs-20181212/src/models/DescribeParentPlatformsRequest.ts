// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformsRequest extends $dara.Model {
  /**
   * @remarks
   * Query by the GB ID of the parent platform.
   * 
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Default value is 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size. Default value is 20.
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
  /**
   * @remarks
   * Query by the status of the parent platform.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gbId: 'GbId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gbId: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortDirection: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

