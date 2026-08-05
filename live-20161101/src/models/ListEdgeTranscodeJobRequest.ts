// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeTranscodeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The data center ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster-1
   */
  clusterId?: string;
  /**
   * @remarks
   * The search keyword. Valid values:
   * - Task ID. Exact match is supported.
   * - Task name. Fuzzy match is supported.
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
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The collation based on CreateTime. Default value: desc. Valid values:
   * - desc: descending sorting.
   * - asc: ascending sorting.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The edge transcoding task status. Valid values:
   * - 0: not started.
   * - 1: running.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The edge transcoding type. Valid values:
   * - common: default transcoding (standard + Narrowband HD 1.0).
   * - nbhd-2: Narrowband HD 2.0.
   * - ultra-hd: ultra-high definition.
   * 
   * > If this parameter is not specified, transcoding templates for which the user has the corresponding transcoding type permissions are displayed.
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

