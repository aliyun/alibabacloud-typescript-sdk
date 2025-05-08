// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataPushResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * e76f8985-7965-41fc-925b-9648bb6bf650
   */
  appId?: string;
  /**
   * @remarks
   * The name of the data file. Separate multiple names with commas (,). By default, all data files are queried.
   * 
   * @example
   * 159828628258496/mirror_file/game-2553efe7-7bf8-40fb-a6e7-09c9c00a992a.tar
   */
  dataNames?: string;
  /**
   * @remarks
   * The version number of the data file. Separate multiple numbers with commas (,). By default, all versions of data files are queried.
   * 
   * @example
   * 90396
   */
  dataVersions?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-02-20
   */
  maxDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-02-15
   */
  minDate?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This parameter is optional if you want to return the push status of all data files.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of ENS nodes. Separate multiple IDs with commas (,). By default, all ENS nodes are queried.
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

