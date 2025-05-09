// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataArchiveOrderDetailResponseBodyDataArchiveOrderDetailPluginExtraDataInstances extends $dara.Model {
  /**
   * @remarks
   * The business time of the task flow. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  businessTime?: string;
  /**
   * @remarks
   * The task flow ID. You can call the [ListTaskFlow](https://help.aliyun.com/document_detail/424565.html) or [ListLhTaskFlowAndScenario](https://help.aliyun.com/document_detail/426672.html) operation to obtain the value of this parameter.
   * 
   * @example
   * 37***
   */
  dagId?: number;
  /**
   * @remarks
   * The time when the task flow ended. The time is displayed in the yyyy-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-06-04 15:14:00
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the task flow was created.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the task flow was last modified.
   * 
   * @example
   * 2023-05-14 16:00:57
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the historical task flow.
   * 
   * @example
   * 32***
   */
  historyDagId?: number;
  /**
   * @remarks
   * The ID of the instance in the task flow that is executed.
   * 
   * @example
   * 24***
   */
  id?: number;
  /**
   * @remarks
   * The context of the previous execution of the task flow.
   * 
   * @example
   * {
   *       "nodes": [
   *             48**
   *       ],
   *       "edges": {}
   * }
   */
  lastRunningContext?: string;
  /**
   * @remarks
   * The context of the current execution of the task flow.
   * 
   * @example
   * 2023-05-15 16:37:48[GMT+08:00] INFO - Resource Control is active!\\n2023-05-15 16:37:48[GMT+08:00] INFO - Starting job j_4834 at Mon May 15 16:37:48 CST 2023
   */
  msg?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: The task is waiting for execution.
   * *   **1**: The task is in progress.
   * *   **2**: The task is suspended.
   * *   **3**: The task failed.
   * *   **4**: The task is successful.
   * *   **5**: The task is complete.
   * 
   * @example
   * 4
   */
  status?: number;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 5***
   */
  tenantId?: string;
  /**
   * @remarks
   * The mode in which the task flow was triggered. Valid values:
   * 
   * *   **0**: The task flow was triggered based on a schedule.
   * *   **1**: The task flow was manually triggered.
   * 
   * @example
   * 1
   */
  triggerType?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      businessTime: 'BusinessTime',
      dagId: 'DagId',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      historyDagId: 'HistoryDagId',
      id: 'Id',
      lastRunningContext: 'LastRunningContext',
      msg: 'Msg',
      status: 'Status',
      tenantId: 'TenantId',
      triggerType: 'TriggerType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessTime: 'string',
      dagId: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      historyDagId: 'number',
      id: 'number',
      lastRunningContext: 'string',
      msg: 'string',
      status: 'number',
      tenantId: 'string',
      triggerType: 'number',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

