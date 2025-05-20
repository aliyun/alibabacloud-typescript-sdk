// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeadLockDetailListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database. When you specify multiple databases, you must separate the database names with commas (,).
   * 
   * @example
   * school1,school2
   */
  dbNameList?: string;
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1702360530292
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze2016723b328gs2
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 5
   */
  pageSize?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1701755730292
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dbNameList: 'DbNameList',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbNameList: 'string',
      endTime: 'string',
      instanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
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

