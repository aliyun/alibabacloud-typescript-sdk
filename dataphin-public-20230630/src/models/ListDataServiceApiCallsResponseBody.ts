// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallsResponseBodyPageResultCallLogList extends $dara.Model {
  /**
   * @example
   * 102112
   */
  apiId?: number;
  /**
   * @example
   * test
   */
  apiName?: string;
  /**
   * @example
   * 201211
   */
  appKey?: number;
  /**
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * OK
   */
  bizCode?: string;
  /**
   * @example
   * OK
   */
  bizCodeDescription?: string;
  /**
   * @example
   * 192.168.1.1
   */
  clientIp?: string;
  /**
   * @example
   * 2000
   */
  costTime?: number;
  /**
   * @example
   * 2024-11-01 01:01:03.000
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  env?: number;
  /**
   * @example
   * 1000
   */
  executeCostTime?: number;
  /**
   * @example
   * 1
   */
  executeMode?: number;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * OK
   */
  httpStatusDescription?: string;
  /**
   * @example
   * 102356
   */
  jobId?: string;
  /**
   * @example
   * 102356
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
   * @example
   * 1234567890-232sds-3e232-ae2e232
   */
  requestId?: string;
  /**
   * @example
   * {"name":"test"}
   */
  requestParameter?: string;
  /**
   * @example
   * 1024
   */
  requestSize?: number;
  /**
   * @example
   * {"code":"200","message":"success"}
   */
  responseParameter?: string;
  /**
   * @example
   * 1024
   */
  responseSize?: number;
  /**
   * @example
   * 1
   */
  resultCount?: number;
  /**
   * @example
   * select col1 from t_test1 limit 100;
   */
  sql?: string;
  /**
   * @example
   * 2024-11-01 01:01:01.000
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  successful?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appKey: 'AppKey',
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
  callLogList?: ListDataServiceApiCallsResponseBodyPageResultCallLogList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListDataServiceApiCallsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

