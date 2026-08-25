// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlOptimizeAdviceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1632303861000
   */
  createTime?: string;
  /**
   * @remarks
   * The download URL of the file.
   * 
   * @example
   * https://das-sql-optimize.oss-cn-shanghai.aliyuncs.com/adb/oss_sql_optimize_advice/1083*******
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The time when the file expires. The value is a UNIX timestamp. Unit: milliseconds.
   * >The file expires three days after the task is created.
   * 
   * @example
   * 1632563061000
   */
  expireTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - **INIT**: initializing.
   * - **RUNNING**: running.
   * - **FINISH**: completed.
   * - **FAILED**: failed.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The task status code. Valid values:
   * 
   * - **NO_DATA**: no data available.
   * - **INTERNAL_ERROR**: internal error.
   * - **SUCCESS**: successful.
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
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details, including the total number of entries and error codes.
   */
  data?: GetSqlOptimizeAdviceResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * >If the request is successful, Successful is returned. If the request fails, an error message is returned, such as an error code.
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
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: successful.
   * - **false**: failed.
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

