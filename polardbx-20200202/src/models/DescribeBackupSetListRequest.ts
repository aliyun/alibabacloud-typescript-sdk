// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupSetListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The region where the backup sets reside. If you specify this parameter, backup sets in the specified region are returned. You can specify only one region at a time.
   * 
   * @example
   * cn-hangzhou
   */
  destCrossRegion?: string;
  /**
   * @remarks
   * The end time. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1635707845000
   */
  endTime?: number;
  /**
   * @remarks
   * The page number. The value starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The start time. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1635707845000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      destCrossRegion: 'DestCrossRegion',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      destCrossRegion: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

