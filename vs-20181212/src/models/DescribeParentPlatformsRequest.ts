// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformsRequest extends $dara.Model {
  /**
   * @example
   * 31000*****2170123451
   */
  gbId?: string;
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
   * id
   */
  sortBy?: string;
  /**
   * @example
   * asc
   */
  sortDirection?: string;
  /**
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

