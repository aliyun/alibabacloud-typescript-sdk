// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsSlowSqlsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The start time of the SQL query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568267711000
   */
  endTime?: number;
  /**
   * @remarks
   * The SQL execution time. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  exeTime?: number;
  /**
   * @remarks
   * The number of the page to return.
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
   * 20
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The end time of the SQL query. Specify the time in the UNIX timestamp format. The time must be in UTC. Unit: ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568269711000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
      endTime: 'EndTime',
      exeTime: 'ExeTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
      endTime: 'number',
      exeTime: 'number',
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

