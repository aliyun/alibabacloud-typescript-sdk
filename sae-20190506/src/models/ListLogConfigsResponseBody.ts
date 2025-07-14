// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogConfigsResponseBodyDataLogConfigs extends $dara.Model {
  /**
   * @remarks
   * The path of logs.
   * 
   * @example
   * sae-1f240907a6faf58c653f09e81b7e****
   */
  configName?: string;
  /**
   * @remarks
   * The storage type of logs.
   * 
   * @example
   * 2019-08-29 17:18:00
   */
  createTime?: string;
  /**
   * @remarks
   * The path of the log file (log source).
   * 
   * @example
   * /root/logs/hsf/hsf.log
   */
  logDir?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * file_log
   */
  logType?: string;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The time when the configuration was created.
   * 
   * @example
   * sae-1f240907a6faf58c653f09e81b7e****
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The type of the log. Set this value to **file_log**.
   * 
   * @example
   * sae-56f77b65-788d-442a-9885-7f20d91f****
   */
  slsProject?: string;
  /**
   * @remarks
   * The ID of the Log Service project.
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
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The details of the logging configuration.
   */
  logConfigs?: ListLogConfigsResponseBodyDataLogConfigs[];
  /**
   * @remarks
   * The error code.
   * 
   * *   The **ErrorCode** parameter is not returned when the request succeeds.
   * *   The **ErrorCode** parameter is returned when the request fails. For more information, see **Error codes** in this topic.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
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
   * Indicates whether the logging configurations of an application were obtained. Valid values:
   * 
   * *   **true**: indicates that the configurations were obtained.
   * *   **false**: indicates that the configurations could not be obtained.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The logging configurations.
   */
  data?: ListLogConfigsResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: indicates that the request was successful.
   * *   **3xx**: indicates that the request was redirected.
   * *   **4xx**: indicates that the request was invalid.
   * *   **5xx**: indicates that a server error occurred.
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the trace. It can be used to query the details of a request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * *   **success** is returned when the request succeeds.
   * *   An error code is returned when the request fails.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The logging configurations.
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

