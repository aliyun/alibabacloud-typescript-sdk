// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataPushResultRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e76f8985-7965-41fc-925b-9648bb6bf650
   */
  appId?: string;
  /**
   * @remarks
   * The names of the data files. This is a filter condition for the query. Multiple values are supported and separated by commas (,). By default, all data files are queried.
   * 
   * @example
   * 159828628258496/mirror_file/game-2553efe7-7bf8-40fb-a6e7-09c9c00a992a.tar
   */
  dataNames?: string;
  /**
   * @remarks
   * The version numbers of the data files. This is a filter condition for the query. Multiple values are supported and separated by commas (,). By default, all versions are queried.
   * 
   * @example
   * 90396
   */
  dataVersions?: string;
  /**
   * @remarks
   * The end time of the query. Format: YYYY-MM-DD. By default, there is no time limit.
   * 
   * @example
   * 2022-02-20
   */
  maxDate?: string;
  /**
   * @remarks
   * The start time of the query. Format: YYYY-MM-DD. By default, there is no time limit.
   * 
   * @example
   * 2022-02-15
   */
  minDate?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. This parameter is not required when you export all information.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page set in Settings for paging during a paged query. This parameter is not required when you export all entries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the edge nodes. This is a filter condition for the query. Multiple values are supported and separated by commas (,). By default, all edge nodes are queried.
   * 
   * @example
   * cn-wuhan-telecom_unicom_cmcc-2,cn-jiaozuo-2
   */
  regionIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionIds: 'RegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      maxDate: 'string',
      minDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

