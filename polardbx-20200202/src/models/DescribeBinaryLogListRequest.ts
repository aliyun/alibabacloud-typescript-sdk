// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBinaryLogListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hz1fds
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The end time for querying the binlog list.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-11-09 10:27:46
   */
  endTime?: string;
  instanceName?: string;
  /**
   * @remarks
   * The page number when paginating through the current binlog list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of binlog entries to return per page. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start time for querying the binlog list.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-09 10:27:46
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      endTime: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

