// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the current application.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether Application Real-Time Monitoring Service (ARMS) Pro is activated. Valid values:
   * - **true**: ARMS Pro is activated.
   * - **false**: ARMS Pro is not activated.
   * 
   * @example
   * false
   */
  armsAdvancedEnabled?: string;
  /**
   * @remarks
   * The metadata information of the application in ARMS.
   * 
   * @example
   * {"appId":"0099b7be-5f5b-4512-a7fc-56049ef1****","licenseKey":"d5cgdt5pu0@7303f55292a****"}
   */
  armsApmInfo?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 1563373372746
   */
  createTime?: string;
  /**
   * @remarks
   * The current status of the application. Valid values:
   * - **RUNNING**: The application is running.
   * - **STOPPED**: The application is stopped.
   * - **UNKNOWN**: The application status is unknown.
   * 
   * @example
   * RUNNING
   */
  currentStatus?: string;
  /**
   * @remarks
   * Specifies whether the Serverless App Engine (SAE) agent is enabled. Valid values:
   * - **true**: The agent is enabled.
   * - **false**: The agent is not enabled.
   * 
   * @example
   * false
   */
  enableAgent?: boolean;
  /**
   * @remarks
   * The file size limit. Valid values: 0 to 10240. Unit: KB.
   * 
   * @example
   * 10240
   */
  fileSizeLimit?: number;
  /**
   * @remarks
   * The ID of the most recently executed change order. If no change order has been executed or the change order information has expired, this field is empty.
   * 
   * @example
   * 1ccc2339-fc19-49aa-bda0-1e7b8497****
   */
  lastChangeOrderId?: string;
  /**
   * @remarks
   * Specifies whether the most recent change order is being executed. Valid values:
   * - **true**: The most recent change order is being executed.
   * - **false**: The most recent change order is not being executed.
   * 
   * @example
   * false
   */
  lastChangeOrderRunning?: boolean;
  /**
   * @remarks
   * The status of the most recent change order. Valid values:
   * - **READY**: The most recent change order is ready.
   * - **RUNNING**: The most recent change order is being executed.
   * - **SUCCESS**: The most recent change order is successful.
   * - **FAIL**: The most recent change order failed.
   * - **ABORT**: The most recent change order is aborted.
   * - **WAIT_BATCH_CONFIRM**: The most recent change order is waiting for manual batch confirmation.
   * - **AUTO_BATCH_WAIT**: The most recent change order is in the automatic batch waiting state.
   * - **SYSTEM_FAIL**: A system fault occurred.
   * - **WAIT_APPROVAL**: The most recent change order is waiting for approval.
   * - **APPROVED**: The most recent change order is approved and waiting to be executed.
   * 
   * @example
   * SUCCESS
   */
  lastChangeOrderStatus?: string;
  /**
   * @remarks
   * The number of running instances of the current application.
   * 
   * @example
   * 1
   */
  runningInstances?: number;
  /**
   * @remarks
   * The sub-status of the change order, which is used to determine whether an exception occurred during the release process. Valid values:
   * - **NORMAL**: The release is normal.
   * - **RUNNING_BUT_HAS_ERROR**: An exception occurred during the release. For example, an error occurs during a batch release and requires a manual rollback. In this case, the change order is still being executed because it cannot be completed despite the error.
   * 
   * @example
   * NORMAL
   */
  subStatus?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      armsAdvancedEnabled: 'ArmsAdvancedEnabled',
      armsApmInfo: 'ArmsApmInfo',
      createTime: 'CreateTime',
      currentStatus: 'CurrentStatus',
      enableAgent: 'EnableAgent',
      fileSizeLimit: 'FileSizeLimit',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      runningInstances: 'RunningInstances',
      subStatus: 'SubStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      armsAdvancedEnabled: 'string',
      armsApmInfo: 'string',
      createTime: 'string',
      currentStatus: 'string',
      enableAgent: 'boolean',
      fileSizeLimit: 'number',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      runningInstances: 'number',
      subStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeApplicationStatusResponseBodyData;
  /**
   * @remarks
   * The error code. 
   * - If the request is successful, the **ErrorCode** parameter is not returned.
   * - If the request fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidApplication.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. 
   * - If the request is successful, **success** is returned.
   * - If an exception occurs, a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the application status information was successfully retrieved. Valid values:
   * - **true**: The information was successfully retrieved.
   * - **false**: The information failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID used to query invocation information.
   * 
   * @example
   * 0a98a02315955564772843261e****
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
      data: DescribeApplicationStatusResponseBodyData,
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

