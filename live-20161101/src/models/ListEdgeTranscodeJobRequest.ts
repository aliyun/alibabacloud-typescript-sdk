// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data center.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-1
   */
  clusterId?: string;
  /**
   * @remarks
   * The keyword of the query.
   * 
   * *   You can specify a task ID for an exact match.
   * *   You can specify a task name for a fuzzy match.
   * 
   * @example
   * test
   */
  keyword?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The sort order of the tasks by creation time. Default value: desc. Valid values:
   * 
   * *   desc: descending order
   * *   asc: ascending order
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * *   0: not started
   * *   1: running
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The type of edge transcoding. Valid values:
   * 
   * *   common: standard transcoding and Narrowband HD™ 1.0 transcoding.
   * *   nbhd-2: Narrowband HD™ 2.0 transcoding
   * *   ultra-hd: ultra-high definition transcoding
   * 
   * >  If you do not specify this parameter, the query results are filtered based on the types of edge transcoding on which you are granted permissions.
   * 
   * @example
   * common
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      keyword: 'Keyword',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sortBy: 'SortBy',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      keyword: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      regionId: 'string',
      sortBy: 'string',
      status: 'number',
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

