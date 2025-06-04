// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskShrinkRequest extends $dara.Model {
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
  callDayShrink?: string;
  /**
   * @example
   * 32
   */
  callRetryInterval?: number;
  callRetryReasonShrink?: string;
  /**
   * @example
   * 2
   */
  callRetryTimes?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  callTimeShrink?: string;
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
      callDayShrink: 'CallDay',
      callRetryInterval: 'CallRetryInterval',
      callRetryReasonShrink: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTimeShrink: 'CallTime',
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
      callDayShrink: 'string',
      callRetryInterval: 'number',
      callRetryReasonShrink: 'string',
      callRetryTimes: 'number',
      callTimeShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

