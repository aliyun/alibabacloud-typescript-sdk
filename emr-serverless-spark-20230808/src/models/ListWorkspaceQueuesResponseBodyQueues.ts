// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspaceQueuesResponseBodyQueuesAllowActions } from "./ListWorkspaceQueuesResponseBodyQueuesAllowActions";


export class ListWorkspaceQueuesResponseBodyQueues extends $dara.Model {
  /**
   * @remarks
   * The operations allowed for the queue.
   */
  allowActions?: ListWorkspaceQueuesResponseBodyQueuesAllowActions[];
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * @example
   * 1684115879955
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the user who created the queue.
   * 
   * @example
   * 237109
   */
  creator?: string;
  /**
   * @remarks
   * The environment types of the queue.
   */
  environments?: string[];
  /**
   * @remarks
   * The maximum capacity of resources that can be used in the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  maxResource?: string;
  /**
   * @remarks
   * The minimum capacity of resources that can be used in the queue.
   * 
   * @example
   * {"cpu": "2","memory": "2Gi"}
   */
  minResource?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PayAsYouGo
   * *   Pre
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
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
   * The name of the queue.
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
   * The status of the queue.
   * 
   * @example
   * RUNNING
   */
  queueStatus?: string;
  /**
   * @remarks
   * The type of the queue. Valid values:
   * 
   * *   instance
   * *   instanceChildren
   * 
   * @example
   * instance, instanceChildren
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
   * The capacity of resources that are used in the queue.
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
      environments: 'environments',
      maxResource: 'maxResource',
      minResource: 'minResource',
      paymentType: 'paymentType',
      properties: 'properties',
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
      environments: { 'type': 'array', 'itemType': 'string' },
      maxResource: 'string',
      minResource: 'string',
      paymentType: 'string',
      properties: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

