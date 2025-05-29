// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParentPlatformDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 359*****374-cn-qingdao
   */
  id?: string;
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

