// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarTaskAndActionsResponseBodyDetailsActions extends $dara.Model {
  /**
   * @remarks
   * The name of the component action.
   * 
   * @example
   * formatdata
   */
  action?: string;
  /**
   * @remarks
   * The UUID of the component action execution record.
   * 
   * @example
   * 091be399-a937-4276-af78-xxxxxxxx
   */
  actionUuid?: string;
  /**
   * @remarks
   * The name of the asset used by the component.
   * 
   * @example
   * SLS Asset
   */
  assetName?: string;
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * DataFormat
   */
  component?: string;
  /**
   * @remarks
   * The end time of the component run. This is a 13-digit timestamp.
   * 
   * @example
   * 1699868848766
   */
  endTime?: number;
  /**
   * @remarks
   * The custom node name of the component.
   * 
   * @example
   * DataFormat_1
   */
  nodeName?: string;
  /**
   * @remarks
   * The start time of the component run. This is a 13-digit timestamp.
   * 
   * @example
   * 1699868848731
   */
  startTime?: number;
  /**
   * @remarks
   * The result of the component run. Valid values:
   * 
   * - **success**: The run was successful.
   * 
   * - **fail**: The run failed.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionUuid: 'ActionUuid',
      assetName: 'AssetName',
      component: 'Component',
      endTime: 'EndTime',
      nodeName: 'NodeName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionUuid: 'string',
      assetName: 'string',
      component: 'string',
      endTime: 'number',
      nodeName: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The total number of action logs.
   * 
   * @example
   * 5
   */
  actionLogNum?: number;
  /**
   * @remarks
   * The list of component actions executed in the playbook.
   */
  actions?: DescribeSoarTaskAndActionsResponseBodyDetailsActions[];
  /**
   * @remarks
   * The end time of the playbook run. This is a 13-digit timestamp.
   * 
   * @example
   * 1699868848767
   */
  endTime?: number;
  /**
   * @remarks
   * The error message for the playbook task. This field is empty if the task is successful.
   * 
   * @example
   * stime not match
   */
  errorMsg?: string;
  /**
   * @remarks
   * The request parameters of the playbook task.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  rawEventReq?: string;
  /**
   * @remarks
   * The request ID of the playbook task. This is the unique ID for each task run.
   * 
   * @example
   * 17f75844-75cc-4174-86da-cec07a690142
   */
  requestUuid?: string;
  /**
   * @remarks
   * The start time of the playbook run. This is a 13-digit timestamp.
   * 
   * @example
   * 1699868848645
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the playbook task. Valid values:
   * 
   * - **success**: The task was successful.
   * 
   * - **fail**: The task failed.
   * 
   * - **running**: The task is running.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The MD5 value of the playbook configuration that was run.
   * 
   * @example
   * ed127287-6699-4e4d-b986-9f770879xxx
   */
  taskFlowMd5?: string;
  /**
   * @remarks
   * The name of the playbook task. This is the same as the playbook UUID.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536
   */
  taskName?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * - **debug**: A task for debugging a playbook.
   * 
   * - **manual**: A manually triggered task.
   * 
   * - **siem**: An event-triggered task.
   * 
   * @example
   * siem
   */
  triggerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that triggered the playbook task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      actionLogNum: 'ActionLogNum',
      actions: 'Actions',
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      rawEventReq: 'RawEventReq',
      requestUuid: 'RequestUuid',
      startTime: 'StartTime',
      status: 'Status',
      taskFlowMd5: 'TaskFlowMd5',
      taskName: 'TaskName',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionLogNum: 'number',
      actions: { 'type': 'array', 'itemType': DescribeSoarTaskAndActionsResponseBodyDetailsActions },
      endTime: 'number',
      errorMsg: 'string',
      rawEventReq: 'string',
      requestUuid: 'string',
      startTime: 'number',
      status: 'string',
      taskFlowMd5: 'string',
      taskName: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarTaskAndActionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the task execution.
   */
  details?: DescribeSoarTaskAndActionsResponseBodyDetails;
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeSoarTaskAndActionsResponseBodyPage;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 18017A93-3D5D-503A-8308-914543F1CBA3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeSoarTaskAndActionsResponseBodyDetails,
      page: DescribeSoarTaskAndActionsResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(this.details && typeof (this.details as any).validate === 'function') {
      (this.details as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

