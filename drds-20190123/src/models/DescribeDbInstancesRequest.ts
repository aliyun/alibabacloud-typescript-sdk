// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Storage layer type. Valid values: **POLARDB** or **RDS**.
   * 
   * @example
   * POLARDB
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of a DRDS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the storage or cluster.
   * 
   * @example
   * pc-***************
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      drdsInstanceId: 'DrdsInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      search: 'Search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
      drdsInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

