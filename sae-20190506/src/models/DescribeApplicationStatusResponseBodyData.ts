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

