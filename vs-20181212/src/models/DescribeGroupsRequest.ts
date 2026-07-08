// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID.
   * 
   * @example
   * 33763950877224964-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Ingest protocol used by the group. Valid values:
   * 
   * - gb28181
   * 
   * - rtmp
   * 
   * @example
   * rtmp
   */
  inProtocol?: string;
  /**
   * @remarks
   * Whether to return device statistics for the group. Default: false.
   * 
   * @example
   * false
   */
  includeStats?: boolean;
  /**
   * @remarks
   * Space name.
   * 
   * @example
   * 我的视频监控
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * Page number. Default: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The service region where the group is located.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @remarks
   * Field to sort by. Valid values:
   * 
   * - Id (default)
   * 
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @remarks
   * Sort order. Valid values:
   * 
   * - asc (ascending, default)
   * 
   * - desc (descending)
   * 
   * @example
   * asc
   */
  sortDirection?: string;
  /**
   * @remarks
   * Group status. Valid values:
   * 
   * - on (enabled)
   * 
   * - off (disabled)
   * 
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

