// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether Application Real-Time Monitoring Service (ARMS) advanced monitoring is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  armsAdvancedEnabled?: string;
  /**
   * @remarks
   * The metadata of the application in ARMS.
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
   * 
   * *   **RUNNING**
   * *   **STOPPED**
   * *   **UNKNOWN**
   * 
   * @example
   * RUNNING
   */
  currentStatus?: string;
  /**
   * @remarks
   * Indicates whether SAE agent is enabled.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableAgent?: boolean;
  /**
   * @remarks
   * The file size limit. Unit: KB. Valid values: 0 to 10240.
   * 
   * @example
   * 10240
   */
  fileSizeLimit?: number;
  /**
   * @remarks
   * The ID of the latest change order that is executed. If no change orders are executed or if change orders expire, this parameter is left empty.
   * 
   * @example
   * 1ccc2339-fc19-49aa-bda0-1e7b8497****
   */
  lastChangeOrderId?: string;
  /**
   * @remarks
   * Indicates whether the latest change order is being executed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  lastChangeOrderRunning?: boolean;
  /**
   * @remarks
   * The status of the latest change order. Valid values:
   * 
   * *   **READY**: The change order is ready.
   * *   **RUNNING**: The change order is being executed.
   * *   **SUCCESS**: The change order was executed.
   * *   **FAIL**: The change order failed to be executed.
   * *   **ABORT**: The change order is stopped.
   * *   **WAIT_BATCH_CONFIRM**: The change order is pending execution. You must manually confirm the release batch.
   * *   **AUTO_BATCH_WAIT**: The change order is pending execution. SAE will automatically confirm the release batch.
   * *   **SYSTEM_FAIL**: A system exception occurred.
   * *   **WAIT_APPROVAL**: The change order is pending approval.
   * *   **APPROVED**: The change order is approved and is pending execution.
   * 
   * @example
   * SUCCESS
   */
  lastChangeOrderStatus?: string;
  /**
   * @remarks
   * The number of running instances of the application.
   * 
   * @example
   * 1
   */
  runningInstances?: number;
  /**
   * @remarks
   * The substatus of the change order. This parameter indicates whether an exception occurred while the change order was being executed. Valid values:
   * 
   * *   **NORMAL**
   * *   **RUNNING_BUT_HAS_ERROR**: For example, if an error occurs during a phased release, you must manually roll back the application. In this case, the change order cannot be completed because the change order is still being executed.
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
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
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
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * Indicates whether the status of the application was queried. Valid values:
   * 
   * *   **true**: The status was queried.
   * *   **false**: The status failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
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

