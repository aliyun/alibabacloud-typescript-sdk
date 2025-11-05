// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiCallTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callDayShrink?: string;
  /**
   * @example
   * 25
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
   * true
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
   * IMMEDIATE
   */
  startType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 57
   */
  taskCps?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1152311212312***
   */
  taskId?: string;
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
   * 1748923429000
   */
  taskStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0537022*****
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
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
      taskCps: 'TaskCps',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
      taskCps: 'number',
      taskId: 'string',
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

