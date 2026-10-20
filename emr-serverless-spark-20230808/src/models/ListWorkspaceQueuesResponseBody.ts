// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspaceQueuesResponseBodyQueuesAllowActions extends $dara.Model {
  /**
   * @remarks
   * The ARN of the action.
   * 
   * @example
   * acs:emr::workspaceId:action/create_queue
   */
  actionArn?: string;
  /**
   * @remarks
   * The permission name.
   * 
   * @example
   * view
   */
  actionName?: string;
  /**
   * @remarks
   * The list of dependencies for the action.
   * 
   * @example
   * ["view"]
   */
  dependencies?: string[];
  /**
   * @remarks
   * The description of the action.
   * 
   * @example
   * Directory traversal and file browsing
   */
  description?: string;
  /**
   * @remarks
   * The display name of the permission.
   * 
   * @example
   * Directory traversal and file browsing
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      actionName: 'actionName',
      dependencies: 'dependencies',
      description: 'description',
      displayName: 'displayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      actionName: 'string',
      dependencies: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesResponseBodyQueues extends $dara.Model {
  /**
   * @remarks
   * The list of allowed operations for the queue.
   */
  allowActions?: ListWorkspaceQueuesResponseBodyQueuesAllowActions[];
  /**
   * @remarks
   * The time when the workspace was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 237109
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test queue
   */
  description?: string;
  /**
   * @remarks
   * The list of environment types for the queue.
   */
  environments?: string[];
  /**
   * @remarks
   * The number of GPU machines.
   * 
   * @example
   * 0
   */
  gpuMachineNum?: number;
  /**
   * @remarks
   * The list of GPU instance types.
   */
  gpuSpec?: string[];
  /**
   * @remarks
   * The ID of the resource instance associated with the queue.
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum resource capacity of the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  maxResource?: string;
  /**
   * @remarks
   * The minimum resource capacity of the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  minResource?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go
   * - Pre: subscription
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
  /**
   * @remarks
   * Specifies whether resource prefetching is performed.
   * 
   * @example
   * true
   */
  preheat?: boolean;
  /**
   * @remarks
   * The queue label.
   * 
   * @example
   * dev_queue
   */
  properties?: string;
  /**
   * @remarks
   * The queue category, such as CPU or GPU.
   * 
   * @example
   * CPU
   */
  queueCategory?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * dev_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The queue architecture.
   * 
   * @example
   * {"arch": "x86"}
   */
  queueScope?: string;
  /**
   * @remarks
   * The queue status.
   * 
   * @example
   * RUNNING
   */
  queueStatus?: string;
  /**
   * @remarks
   * The queue type. Valid values:
   * 
   * - instance: single task type
   * - instanceChildren: parent task type
   * 
   * @example
   * instance
   */
  queueType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The used resource capacity of the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  usedResource?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-1234abcd
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowActions: 'allowActions',
      createTime: 'createTime',
      creator: 'creator',
      description: 'description',
      environments: 'environments',
      gpuMachineNum: 'gpuMachineNum',
      gpuSpec: 'gpuSpec',
      instanceId: 'instanceId',
      maxResource: 'maxResource',
      minResource: 'minResource',
      paymentType: 'paymentType',
      preheat: 'preheat',
      properties: 'properties',
      queueCategory: 'queueCategory',
      queueName: 'queueName',
      queueScope: 'queueScope',
      queueStatus: 'queueStatus',
      queueType: 'queueType',
      regionId: 'regionId',
      usedResource: 'usedResource',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowActions: { 'type': 'array', 'itemType': ListWorkspaceQueuesResponseBodyQueuesAllowActions },
      createTime: 'number',
      creator: 'string',
      description: 'string',
      environments: { 'type': 'array', 'itemType': 'string' },
      gpuMachineNum: 'number',
      gpuSpec: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      maxResource: 'string',
      minResource: 'string',
      paymentType: 'string',
      preheat: 'boolean',
      properties: 'string',
      queueCategory: 'string',
      queueName: 'string',
      queueScope: 'string',
      queueStatus: 'string',
      queueType: 'string',
      regionId: 'string',
      usedResource: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowActions)) {
      $dara.Model.validateArray(this.allowActions);
    }
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(Array.isArray(this.gpuSpec)) {
      $dara.Model.validateArray(this.gpuSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceQueuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of queues.
   */
  queues?: ListWorkspaceQueuesResponseBodyQueues[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      queues: 'queues',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      queues: { 'type': 'array', 'itemType': ListWorkspaceQueuesResponseBodyQueues },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.queues)) {
      $dara.Model.validateArray(this.queues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

