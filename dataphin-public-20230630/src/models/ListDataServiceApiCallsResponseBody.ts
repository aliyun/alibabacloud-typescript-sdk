// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallsResponseBodyPageResultCallLogList extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * 102112
   */
  apiId?: number;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * The application key.
   * >Notice: Deprecated. Use AppKeyStr instead.</notice>
   * 
   * @example
   * 12345
   * 
   * @deprecated
   */
  appKey?: number;
  /**
   * @remarks
   * The application key.
   * 
   * @example
   * abc12345
   */
  appKeyStr?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The business status code.
   * 
   * @example
   * OK
   */
  bizCode?: string;
  /**
   * @remarks
   * The description of the business status code.
   * 
   * @example
   * OK
   */
  bizCodeDescription?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.168.1.1
   */
  clientIp?: string;
  /**
   * @remarks
   * The duration of the request, in milliseconds.
   * 
   * @example
   * 2000
   */
  costTime?: number;
  /**
   * @remarks
   * The end time of the request. Format: yyyy-MM-dd HH:mm:ss.SSS.
   * 
   * @example
   * 2024-11-01 01:01:03.000
   */
  endTime?: string;
  /**
   * @remarks
   * The environment. Valid values: 0: Development. 1: Production.
   * 
   * @example
   * 1
   */
  env?: number;
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 1000
   */
  executeCostTime?: number;
  /**
   * @remarks
   * The execution mode. Valid values: 1: Synchronous. 2: Asynchronous.
   * 
   * @example
   * 1
   */
  executeMode?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  httpStatusDescription?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 102356
   */
  jobId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 102356
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1234567890-232sds-3e232-ae2e232
   */
  requestId?: string;
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {"name":"test"}
   */
  requestParameter?: string;
  /**
   * @remarks
   * The size of the request.
   * 
   * @example
   * 1024
   */
  requestSize?: number;
  /**
   * @remarks
   * The response parameters.
   * 
   * @example
   * {"code":"200","message":"success"}
   */
  responseParameter?: string;
  /**
   * @remarks
   * The size of the response.
   * 
   * @example
   * 1024
   */
  responseSize?: number;
  /**
   * @remarks
   * The number of returned records.
   * 
   * @example
   * 1
   */
  resultCount?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * select col1 from t_test1 limit 100;
   */
  sql?: string;
  /**
   * @remarks
   * The time when the request is initiated. Format: yyyy-MM-dd HH:mm:ss.SSS.
   * 
   * @example
   * 2024-11-01 01:01:01.000
   */
  startTime?: string;
  /**
   * @remarks
   * The invocation status of the job.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appKey: 'AppKey',
      appKeyStr: 'AppKeyStr',
      appName: 'AppName',
      bizCode: 'BizCode',
      bizCodeDescription: 'BizCodeDescription',
      clientIp: 'ClientIp',
      costTime: 'CostTime',
      endTime: 'EndTime',
      env: 'Env',
      executeCostTime: 'ExecuteCostTime',
      executeMode: 'ExecuteMode',
      httpStatusCode: 'HttpStatusCode',
      httpStatusDescription: 'HttpStatusDescription',
      jobId: 'JobId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      requestParameter: 'RequestParameter',
      requestSize: 'RequestSize',
      responseParameter: 'ResponseParameter',
      responseSize: 'ResponseSize',
      resultCount: 'ResultCount',
      sql: 'Sql',
      startTime: 'StartTime',
      status: 'Status',
      successful: 'Successful',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      appKey: 'number',
      appKeyStr: 'string',
      appName: 'string',
      bizCode: 'string',
      bizCodeDescription: 'string',
      clientIp: 'string',
      costTime: 'number',
      endTime: 'string',
      env: 'number',
      executeCostTime: 'number',
      executeMode: 'number',
      httpStatusCode: 'string',
      httpStatusDescription: 'string',
      jobId: 'string',
      projectId: 'number',
      projectName: 'string',
      requestId: 'string',
      requestParameter: 'string',
      requestSize: 'number',
      responseParameter: 'string',
      responseSize: 'number',
      resultCount: 'number',
      sql: 'string',
      startTime: 'string',
      status: 'number',
      successful: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiCallsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The paged list of API calls.
   */
  callLogList?: ListDataServiceApiCallsResponseBodyPageResultCallLogList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callLogList: 'CallLogList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callLogList: { 'type': 'array', 'itemType': ListDataServiceApiCallsResponseBodyPageResultCallLogList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callLogList)) {
      $dara.Model.validateArray(this.callLogList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiCallsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query results.
   */
  pageResult?: ListDataServiceApiCallsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDataServiceApiCallsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

