// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 0099b7be-5f5b-4512-a7fc-56049ef1****
   */
  appId?: string;
  /**
   * @remarks
   * Indicates whether ARMS Advanced Edition is enabled. Valid values:
   * 
   * - **true**: enabled.
   * 
   * - **false**: disabled.
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
   * The time when the application was created. This value is a UNIX timestamp.
   * 
   * @example
   * 1563373372746
   */
  createTime?: string;
  /**
   * @remarks
   * The current status of the application. Valid values:
   * 
   * - **RUNNING**: The application is running.
   * 
   * - **STOPPED**: The application is stopped.
   * 
   * - **UNKNOWN**: The application status is unknown.
   * 
   * @example
   * RUNNING
   */
  currentStatus?: string;
  /**
   * @remarks
   * Indicates whether the SAE agent is enabled. Valid values:
   * 
   * - **true**
   * 
   * - **false**
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
   * The ID of the most recently executed change order. This parameter is empty if no change order was executed or if the information about the change order has expired.
   * 
   * @example
   * 1ccc2339-fc19-49aa-bda0-1e7b8497****
   */
  lastChangeOrderId?: string;
  /**
   * @remarks
   * Indicates whether the most recent change order is being executed. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * false
   */
  lastChangeOrderRunning?: boolean;
  /**
   * @remarks
   * The status of the most recent change order. Valid values:
   * 
   * - **READY**: The change order is ready.
   * 
   * - **RUNNING**: The change order is being executed.
   * 
   * - **SUCCESS**: The change order was successful.
   * 
   * - **FAIL**: The change order failed.
   * 
   * - **ABORT**: The change order was aborted.
   * 
   * - **WAIT_BATCH_CONFIRM**: The change order is waiting for manual confirmation for the next batch.
   * 
   * - **AUTO_BATCH_WAIT**: The change order is in a waiting state for an automatic batch.
   * 
   * - **SYSTEM_FAIL**: A system error occurred.
   * 
   * - **WAIT_APPROVAL**: The change order is pending approval.
   * 
   * - **APPROVED**: The change order is approved and is pending execution.
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
   * The substatus of the change order. This parameter is used to determine whether an exception occurs during the release process. Valid values:
   * 
   * - **NORMAL**: The release is normal.
   * 
   * - **RUNNING_BUT_HAS_ERROR**: The release is abnormal. For example, if an error occurs during a phased release, you must manually roll back the release. In this case, the change order cannot be completed and the status of the change order remains **RUNNING**.
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
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: The request was invalid.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeApplicationStatusResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - If the request is successful, this parameter is not returned.
   * 
   * - If the request fails, this parameter is returned. For more information, see the **Error codes** section in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The response message.
   * 
   * - If the call is successful, **success** is returned.
   * 
   * - If the call fails, an error message is returned.
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
   * Indicates whether the application status was obtained. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of a request.
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

