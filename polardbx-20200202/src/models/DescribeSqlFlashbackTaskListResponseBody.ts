// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlFlashbackTaskListResponseBodyDataSqlFlashbackTasks extends $dara.Model {
  /**
   * @example
   * test
   */
  dbName?: string;
  /**
   * @example
   * http://...
   */
  downloadUrl?: string;
  /**
   * @example
   * 1569216270000
   */
  expireTime?: string;
  /**
   * @example
   * 1568611408000
   */
  gmtCreate?: string;
  /**
   * @example
   * 1568611469000
   */
  gmtModified?: string;
  /**
   * @example
   * 111
   */
  id?: string;
  /**
   * @example
   * pxc-********
   */
  instId?: string;
  /**
   * @example
   * 10
   */
  recallProgress?: string;
  /**
   * @example
   * 0
   */
  recallRestoreType?: string;
  /**
   * @example
   * 1
   */
  recallStatus?: string;
  /**
   * @example
   * 0
   */
  recallType?: string;
  /**
   * @example
   * 1568609597000
   */
  searchEndTime?: string;
  /**
   * @example
   * 1568609597000
   */
  searchStartTime?: string;
  /**
   * @example
   * 100
   */
  sqlCounter?: string;
  /**
   * @example
   * id
   */
  sqlPk?: string;
  /**
   * @example
   * INSERT,UPDATE
   */
  sqlType?: string;
  /**
   * @example
   * test
   */
  tableName?: string;
  /**
   * @example
   * 13ed05705f801000
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instId: 'InstId',
      recallProgress: 'RecallProgress',
      recallRestoreType: 'RecallRestoreType',
      recallStatus: 'RecallStatus',
      recallType: 'RecallType',
      searchEndTime: 'SearchEndTime',
      searchStartTime: 'SearchStartTime',
      sqlCounter: 'SqlCounter',
      sqlPk: 'SqlPk',
      sqlType: 'SqlType',
      tableName: 'TableName',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      downloadUrl: 'string',
      expireTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      instId: 'string',
      recallProgress: 'string',
      recallRestoreType: 'string',
      recallStatus: 'string',
      recallType: 'string',
      searchEndTime: 'string',
      searchStartTime: 'string',
      sqlCounter: 'string',
      sqlPk: 'string',
      sqlType: 'string',
      tableName: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbackTaskListResponseBodyData extends $dara.Model {
  sqlFlashbackTasks?: DescribeSqlFlashbackTaskListResponseBodyDataSqlFlashbackTasks[];
  static names(): { [key: string]: string } {
    return {
      sqlFlashbackTasks: 'SqlFlashbackTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sqlFlashbackTasks: { 'type': 'array', 'itemType': DescribeSqlFlashbackTaskListResponseBodyDataSqlFlashbackTasks },
    };
  }

  validate() {
    if(Array.isArray(this.sqlFlashbackTasks)) {
      $dara.Model.validateArray(this.sqlFlashbackTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlFlashbackTaskListResponseBody extends $dara.Model {
  data?: DescribeSqlFlashbackTaskListResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeSqlFlashbackTaskListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

