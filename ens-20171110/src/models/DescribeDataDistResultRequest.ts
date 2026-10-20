// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDistResultRequest extends $dara.Model {
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
   * The data file names. This parameter is a filter condition. You can specify multiple names separated by commas (,). By default, all data files are queried.
   * 
   * @example
   * cloudgame-shanghai/deploy_app/20220215/1644895216305ACG_M21B-ota-1.1.2-D-0215.0628_V1_0002-pre-weiduan.zip
   */
  dataNames?: string;
  /**
   * @remarks
   * The data file version numbers. This parameter is a filter condition. You can specify multiple versions separated by commas (,). By default, all versions are queried.
   * 
   * @example
   * 4885
   */
  dataVersions?: string;
  /**
   * @remarks
   * The list of ENS edge zone IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The list of edge instance IDs. This parameter is a filter condition. You can specify multiple IDs separated by commas (,). By default, all instances are queried.
   * 
   * @example
   * i-7ecpqvkicnchxccozrp,i-6ecpqvkicnchxccozrp
   */
  instanceIds?: string;
  /**
   * @remarks
   * The end date of the query in the format "2006-01-02". By default, no time limit is applied.
   * 
   * @example
   * 2022-02-01
   */
  maxDate?: string;
  /**
   * @remarks
   * The start date of the query in the format "2006-01-02". By default, no time limit is applied.
   * 
   * @example
   * 2022-01-02
   */
  minDate?: string;
  /**
   * @remarks
   * The page number, starting from 1. You do not need to specify this parameter when exporting all data.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging queries. This parameter is not required when exporting all data.
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
      ensRegionIds: 'EnsRegionIds',
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
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      instanceIds: 'string',
      maxDate: 'string',
      minDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

