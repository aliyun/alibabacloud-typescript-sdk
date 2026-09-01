// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessTasksResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The current page number in the paging query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page in the paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBodyProcessTasks extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID that submitted the disposal task.
   * 
   * @example
   * 123xxxx355
   */
  creator?: string;
  /**
   * @remarks
   * The name of the disposed entity.
   * 
   * @example
   * 1.1.1.x
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the disposed entity.
   * 
   * @example
   * ip
   */
  entityType?: string;
  /**
   * @remarks
   * The UUID of the entity.
   * 
   * @example
   * 69d189e2-ec17-4676-a2fe-02969234****
   */
  entityUuid?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * sts_openapi.Info.DefenseSceneNotSupported
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ParamError : The parameters of your request are invalid
   */
  errMsg?: string;
  /**
   * @remarks
   * The error tip.
   * 
   * @example
   * Verify that the input parameters of the components are correct
   */
  errTip?: string;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * c1020ce1-d6a5-11e8-8298-00163e10****
   */
  eventUuid?: string;
  /**
   * @remarks
   * The creation time of the disposal task. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  gmtCreateMillis?: number;
  /**
   * @remarks
   * The modification time of the disposal task. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  gmtModifiedMillis?: number;
  /**
   * @remarks
   * The input parameters of the disposal task.
   * 
   * @example
   * {"groupuuid":"c6a9b1df-f4ac-4078-bef4-99xxxxxx"}
   */
  inputParams?: string;
  /**
   * @remarks
   * The ID of the associated strategy.
   * 
   * @example
   * 92af3c79-1754-4646-9366-9ddbd1e45536_****
   */
  processStrategyUuid?: string;
  /**
   * @remarks
   * The time when the disposal task was dispatched. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  processTime?: number;
  /**
   * @remarks
   * The unblocking time of the disposal task. Format: 13-digit timestamp.
   * 
   * @example
   * 1700031183572
   */
  removeTime?: number;
  /**
   * @remarks
   * The UUID of the playbook execution record.
   * 
   * @example
   * 93e5df20-3d03-42e1-b44b-58197c71****
   */
  reqUuid?: string;
  /**
   * @remarks
   * The scene code of the disposal task.
   * 
   * @example
   * event_xxx_whole_process
   */
  sceneCode?: string;
  /**
   * @remarks
   * The scene name of the disposal task.
   * 
   * @example
   * waf_whole_process
   */
  sceneName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID for the disposal.
   * 
   * @example
   * 123xxxxx234
   */
  scope?: string;
  /**
   * @remarks
   * The submission source of the disposal task.
   * 
   * @example
   * system
   */
  source?: string;
  /**
   * @remarks
   * The unique identifier of the disposal task.
   * 
   * @example
   * 150xxxxxxxxx95066
   */
  taskId?: string;
  /**
   * @remarks
   * The status of the disposal task.
   * 
   * @example
   * 11
   */
  taskStatus?: number;
  /**
   * @remarks
   * The trigger source of the disposal task. Valid values:
   * 
   * - **system**: Triggered by manual event disposal.
   * - **custom**: Triggered by an automatic response rule based on an event.
   * - **custom_alert**: Triggered by an automatic response rule based on an alert.
   * - **soar-manual**: Triggered by manually invoking a SOAR playbook.
   * - **soar-mdr**: Triggered by the Managed Security Service.
   * 
   * @example
   * system
   */
  triggerSource?: string;
  /**
   * @remarks
   * The code of the cloud product associated with the disposal task.
   * 
   * @example
   * WAF
   */
  yunCode?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      entityName: 'EntityName',
      entityType: 'EntityType',
      entityUuid: 'EntityUuid',
      errCode: 'ErrCode',
      errMsg: 'ErrMsg',
      errTip: 'ErrTip',
      eventUuid: 'EventUuid',
      gmtCreateMillis: 'GmtCreateMillis',
      gmtModifiedMillis: 'GmtModifiedMillis',
      inputParams: 'InputParams',
      processStrategyUuid: 'ProcessStrategyUuid',
      processTime: 'ProcessTime',
      removeTime: 'RemoveTime',
      reqUuid: 'ReqUuid',
      sceneCode: 'SceneCode',
      sceneName: 'SceneName',
      scope: 'Scope',
      source: 'Source',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      triggerSource: 'TriggerSource',
      yunCode: 'YunCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      entityName: 'string',
      entityType: 'string',
      entityUuid: 'string',
      errCode: 'string',
      errMsg: 'string',
      errTip: 'string',
      eventUuid: 'string',
      gmtCreateMillis: 'number',
      gmtModifiedMillis: 'number',
      inputParams: 'string',
      processStrategyUuid: 'string',
      processTime: 'number',
      removeTime: 'number',
      reqUuid: 'string',
      sceneCode: 'string',
      sceneName: 'string',
      scope: 'string',
      source: 'string',
      taskId: 'string',
      taskStatus: 'number',
      triggerSource: 'string',
      yunCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProcessTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeProcessTasksResponseBodyPage;
  /**
   * @remarks
   * The list of disposal tasks.
   */
  processTasks?: DescribeProcessTasksResponseBodyProcessTasks[];
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * E7698CFB-4E1C-5840-8EC9-691B86729E94
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      processTasks: 'ProcessTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribeProcessTasksResponseBodyPage,
      processTasks: { 'type': 'array', 'itemType': DescribeProcessTasksResponseBodyProcessTasks },
      requestId: 'string',
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.processTasks)) {
      $dara.Model.validateArray(this.processTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

