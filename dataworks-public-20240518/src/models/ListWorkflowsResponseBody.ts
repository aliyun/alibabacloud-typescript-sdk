// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowsResponseBodyPagingInfoWorkflowsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBodyPagingInfoWorkflowsTrigger extends $dara.Model {
  /**
   * @remarks
   * The cron expression. This parameter takes effect only when Type is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The expiration time of the periodic trigger. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `9999-01-01 00:00:00`. The example does not include a time zone identifier.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The running mode upon triggering. This parameter takes effect only when Type is set to Scheduler. Valid values:
   * - Pause: Paused.
   * - Skip: Dry run.
   * - Normal: Normal execution.
   * 
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * The effective period of the epoch trigger. This parameter takes effect only when Type is set to Scheduler.
   * 
   * The format is `yyyy-MM-dd HH:mm:ss`, such as `1970-01-01 00:00:00`. The example does not include a time zone identity.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * - Scheduler: Triggered by a scheduling cycle.
   * - Manual: Triggered manually.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      recurrence: 'Recurrence',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      recurrence: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBodyPagingInfoWorkflows extends $dara.Model {
  /**
   * @remarks
   * The client unique code of the workflow, which is used to implement asynchronous processing and idempotence. If you do not specify this parameter when creating a workflow, the system automatically generates one and uniquely binds it to the resource ID. If you specify this parameter when updating or deleting a resource, it must be the same as the client unique code used during creation.
   * 
   * @example
   * Workflow_0bc5213917368545132902xxxxxxxx
   */
  clientUniqueCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * The value is a 13-digit timestamp, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the user who created the workflow.
   * 
   * @example
   * 1000
   */
  createUser?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The project environment.
   * 
   * @example
   * Prod
   */
  envType?: string;
  /**
   * @remarks
   * The unique identifier of the workflow.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The modification time.
   * 
   * The value is a 13-digit timestamp, such as `1710239005403`.
   * 
   * @example
   * 1710239005403
   */
  modifyTime?: number;
  /**
   * @remarks
   * The account ID of the user who last modified the workflow.
   * 
   * @example
   * 1000
   */
  modifyUser?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Workflow1
   */
  name?: string;
  /**
   * @remarks
   * The account ID of the owner.
   * 
   * @example
   * 1000
   */
  owner?: string;
  /**
   * @remarks
   * The list of parameters.
   * 
   * @example
   * para1=$bizdate para2=$[yyyymmdd]
   */
  parameters?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The task tags.
   */
  tags?: ListWorkflowsResponseBodyPagingInfoWorkflowsTags[];
  /**
   * @remarks
   * The trigger method.
   */
  trigger?: ListWorkflowsResponseBodyPagingInfoWorkflowsTrigger;
  static names(): { [key: string]: string } {
    return {
      clientUniqueCode: 'ClientUniqueCode',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      envType: 'EnvType',
      id: 'Id',
      modifyTime: 'ModifyTime',
      modifyUser: 'ModifyUser',
      name: 'Name',
      owner: 'Owner',
      parameters: 'Parameters',
      projectId: 'ProjectId',
      tags: 'Tags',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientUniqueCode: 'string',
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      envType: 'string',
      id: 'number',
      modifyTime: 'number',
      modifyUser: 'string',
      name: 'string',
      owner: 'string',
      parameters: 'string',
      projectId: 'number',
      tags: { 'type': 'array', 'itemType': ListWorkflowsResponseBodyPagingInfoWorkflowsTags },
      trigger: ListWorkflowsResponseBodyPagingInfoWorkflowsTrigger,
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.trigger && typeof (this.trigger as any).validate === 'function') {
      (this.trigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workflows.
   */
  workflows?: ListWorkflowsResponseBodyPagingInfoWorkflows[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflows: 'Workflows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflows: { 'type': 'array', 'itemType': ListWorkflowsResponseBodyPagingInfoWorkflows },
    };
  }

  validate() {
    if(Array.isArray(this.workflows)) {
      $dara.Model.validateArray(this.workflows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListWorkflowsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListWorkflowsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

