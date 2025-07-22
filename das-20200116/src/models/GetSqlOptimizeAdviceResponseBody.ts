// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlOptimizeAdviceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1632303861000
   */
  createTime?: string;
  /**
   * @remarks
   * The URL that is used to download the file.
   * 
   * @example
   * https://das-sql-optimize.oss-cn-shanghai.aliyuncs.com/adb/oss_sql_optimize_advice/1083*******
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the file expires. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  The file expires three days after the task is created.
   * 
   * @example
   * 1632563061000
   */
  expireTime?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **RUNNING**: The task is running.
   * *   **FINISH**: The task is complete.
   * *   **FAILED**: The task failed.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The status code of the task. Valid values:
   * 
   * *   **NO_DATA**: No data is returned.
   * *   **INTERNAL_ERROR**: An internal error occurred.
   * *   **SUCCESS**: The task is successful.
   * 
   * @example
   * SUCCESS
   */
  statusCode?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 2021091710461519216****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      downloadUrl: 'DownloadUrl',
      expireTime: 'ExpireTime',
      status: 'Status',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      downloadUrl: 'string',
      expireTime: 'string',
      status: 'string',
      statusCode: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSqlOptimizeAdviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The detailed information, including the error codes and the number of entries that are returned.
   */
  data?: GetSqlOptimizeAdviceResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSqlOptimizeAdviceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

