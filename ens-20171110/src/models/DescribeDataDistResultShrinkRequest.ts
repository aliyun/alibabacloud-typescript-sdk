// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDistResultShrinkRequest extends $dara.Model {
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
   * cloudgame-shanghai/deploy_app/20220215/1644895216305ACG_M21B-ota-1.1.2-D-0215.0628_V1_0002-pre-weiduan.zip
   */
  dataNames?: string;
  /**
   * @remarks
   * The version number of the data file. Separate multiple numbers with commas (,). By default, all versions of data files are queried.
   * 
   * @example
   * 4885
   */
  dataVersions?: string;
  /**
   * @remarks
   * The IDs of the ENS nodes.
   */
  ensRegionIdsShrink?: string;
  /**
   * @remarks
   * The IDs of ENS instances. Separate multiple IDs with commas (,). By default, all instances are queried.
   * 
   * @example
   * i-7ecpqvkicnchxccozrp,i-6ecpqvkicnchxccozrp
   */
  instanceIds?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-02-01
   */
  maxDate?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the 2006-01-02 format. By default, the time range to query is not restricted.
   * 
   * @example
   * 2022-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. This parameter is optional if you want to return the push status of all data files.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This parameter is optional if you want to return the distribution status of all data files.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      dataNames: 'DataNames',
      dataVersions: 'DataVersions',
      ensRegionIdsShrink: 'EnsRegionIds',
      instanceIds: 'InstanceIds',
      maxDate: 'MaxDate',
      minDate: 'MinDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      dataNames: 'string',
      dataVersions: 'string',
      ensRegionIdsShrink: 'string',
      instanceIds: 'string',
      maxDate: 'string',
      minDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

