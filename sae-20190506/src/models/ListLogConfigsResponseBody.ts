// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogConfigsResponseBodyDataLogConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the Simple Log Service configuration.
   * 
   * @example
   * sae-1f240907a6faf58c653f09e81b7e****
   */
  configName?: string;
  /**
   * @remarks
   * The time when the log configuration was created.
   * 
   * @example
   * 2019-08-29 17:18:00
   */
  createTime?: string;
  /**
   * @remarks
   * The path of the log file. This is the log source.
   * 
   * @example
   * /root/logs/hsf/hsf.log
   */
  logDir?: string;
  /**
   * @remarks
   * The log type. Only **file_log** is supported.
   * 
   * @example
   * file_log
   */
  logType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the Logstore in Simple Log Service.
   * 
   * @example
   * sae-1f240907a6faf58c653f09e81b7e****
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The ID of the Simple Log Service project.
   * 
   * @example
   * sae-56f77b65-788d-442a-9885-7f20d91f****
   */
  slsProject?: string;
  /**
   * @remarks
   * The storage class for Simple Log Service.
   * 
   * @example
   * sls
   */
  storeType?: string;
  static names(): { [key: string]: string } {
    return {
      configName: 'ConfigName',
      createTime: 'CreateTime',
      logDir: 'LogDir',
      logType: 'LogType',
      regionId: 'RegionId',
      slsLogStore: 'SlsLogStore',
      slsProject: 'SlsProject',
      storeType: 'StoreType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      createTime: 'string',
      logDir: 'string',
      logType: 'string',
      regionId: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
      storeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The log configurations.
   */
  logConfigs?: ListLogConfigsResponseBodyDataLogConfigs[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      logConfigs: 'LogConfigs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      logConfigs: { 'type': 'array', 'itemType': ListLogConfigsResponseBodyDataLogConfigs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logConfigs)) {
      $dara.Model.validateArray(this.logConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request is successful.
   * 
   * - **3xx**: The request is redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the file logs.
   */
  data?: ListLogConfigsResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** list in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of application logs was obtained. Valid values:
   * 
   * - **true**: The list was obtained.
   * 
   * - **false**: The list failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID of the request. You can use the trace ID to query the details of the request.
   * 
   * @example
   * ac1d5e2c15671581252413581d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLogConfigsResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

