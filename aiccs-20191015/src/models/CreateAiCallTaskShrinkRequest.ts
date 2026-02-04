// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiCallTaskShrinkRequest extends $dara.Model {
  /**
   * @example
   * 121223123123****
   */
  agentId?: string;
  /**
   * @example
   * 示例值示例值
   */
  applicationCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  applicationName?: string;
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
   * 示例值示例值
   */
  lineEncoding?: string;
  /**
   * @example
   * 示例值示例值
   */
  linePhoneNum?: string;
  /**
   * @example
   * false
   */
  missCallRetry?: boolean;
  ownerId?: number;
  /**
   * @example
   * 54
   */
  phoneType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 92
   */
  source?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SCHEDULE
   */
  startType?: string;
  /**
   * @example
   * 75
   */
  taskCps?: number;
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
   * @example
   * 032712122*****
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      applicationCode: 'ApplicationCode',
      applicationName: 'ApplicationName',
      callDayShrink: 'CallDay',
      callRetryInterval: 'CallRetryInterval',
      callRetryReasonShrink: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTimeShrink: 'CallTime',
      lineEncoding: 'LineEncoding',
      linePhoneNum: 'LinePhoneNum',
      missCallRetry: 'MissCallRetry',
      ownerId: 'OwnerId',
      phoneType: 'PhoneType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      source: 'Source',
      startType: 'StartType',
      taskCps: 'TaskCps',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      applicationCode: 'string',
      applicationName: 'string',
      callDayShrink: 'string',
      callRetryInterval: 'number',
      callRetryReasonShrink: 'string',
      callRetryTimes: 'number',
      callTimeShrink: 'string',
      lineEncoding: 'string',
      linePhoneNum: 'string',
      missCallRetry: 'boolean',
      ownerId: 'number',
      phoneType: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      source: 'number',
      startType: 'string',
      taskCps: 'number',
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

