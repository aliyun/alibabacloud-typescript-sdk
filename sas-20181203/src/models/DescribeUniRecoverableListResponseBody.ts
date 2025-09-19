// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUniRecoverableListResponseBodyRecoverableInfoList extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the first backup. Unit: milliseconds.
   * 
   * @example
   * 1671468180000
   */
  firstTime?: number;
  /**
   * @remarks
   * The timestamp of the last backup. Unit: milliseconds.
   * 
   * @example
   * 1671468180000
   */
  lastTime?: number;
  /**
   * @remarks
   * The identifier of the point in time for restoration in the backup version that is used. The database is an Oracle database.
   * 
   * @example
   * 4529940.0
   */
  resetScn?: string;
  /**
   * @remarks
   * The point in time for restoration in the backup version that is used. The database is an Oracle database.
   * 
   * @example
   * 2021-01-30 08:04:36
   */
  resetTime?: number;
  /**
   * @remarks
   * The information about the database. This parameter is available when the database is a Microsoft SQL Server (MSSQL) database. The value is a JSON string. Valid values:
   * 
   * *   **name**: the name of the database
   * *   **files**: the path to the database files
   * 
   * @example
   * {
   *       "files": {
   *             "qtc": "F:\\\\database\\\\qtc.mdf",
   *             "qtc_log": "F:\\\\database\\\\qtc_0.ldf"
   *       },
   *       "name": "qtc"
   * }
   */
  restoreInfo?: string;
  static names(): { [key: string]: string } {
    return {
      firstTime: 'FirstTime',
      lastTime: 'LastTime',
      resetScn: 'ResetScn',
      resetTime: 'ResetTime',
      restoreInfo: 'RestoreInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTime: 'number',
      lastTime: 'number',
      resetScn: 'string',
      resetTime: 'number',
      restoreInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUniRecoverableListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * msdb
   */
  database?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * An array that consists of the backup snapshots.
   */
  recoverableInfoList?: DescribeUniRecoverableListResponseBodyRecoverableInfoList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      database: 'Database',
      pageSize: 'PageSize',
      recoverableInfoList: 'RecoverableInfoList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      database: 'string',
      pageSize: 'number',
      recoverableInfoList: { 'type': 'array', 'itemType': DescribeUniRecoverableListResponseBodyRecoverableInfoList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recoverableInfoList)) {
      $dara.Model.validateArray(this.recoverableInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

