// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @example
   * 33763950877224964-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * rtmp
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  includeStats?: boolean;
  name?: string;
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
   * cn-qingdao
   */
  region?: string;
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
      id: 'Id',
      inProtocol: 'InProtocol',
      includeStats: 'IncludeStats',
      name: 'Name',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      region: 'Region',
      sortBy: 'SortBy',
      sortDirection: 'SortDirection',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      inProtocol: 'string',
      includeStats: 'boolean',
      name: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      region: 'string',
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

