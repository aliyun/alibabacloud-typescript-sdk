// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 121223123123****
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callDay?: string[];
  /**
   * @example
   * 32
   */
  callRetryInterval?: number;
  callRetryReason?: string[];
  /**
   * @example
   * 2
   */
  callRetryTimes?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  callTime?: string[];
  /**
   * @example
   * false
   */
  missCallRetry?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  startType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  taskName?: string;
  /**
   * @example
   * 12313123133
   */
  taskStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 032712122*****
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      callDay: 'CallDay',
      callRetryInterval: 'CallRetryInterval',
      callRetryReason: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTime: 'CallTime',
      missCallRetry: 'MissCallRetry',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startType: 'StartType',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      callDay: { 'type': 'array', 'itemType': 'string' },
      callRetryInterval: 'number',
      callRetryReason: { 'type': 'array', 'itemType': 'string' },
      callRetryTimes: 'number',
      callTime: { 'type': 'array', 'itemType': 'string' },
      missCallRetry: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startType: 'string',
      taskName: 'string',
      taskStartTime: 'number',
      virtualNumber: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callDay)) {
      $dara.Model.validateArray(this.callDay);
    }
    if(Array.isArray(this.callRetryReason)) {
      $dara.Model.validateArray(this.callRetryReason);
    }
    if(Array.isArray(this.callTime)) {
      $dara.Model.validateArray(this.callTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

