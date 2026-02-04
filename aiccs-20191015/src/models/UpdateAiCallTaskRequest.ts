// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiCallTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  callDay?: string[];
  /**
   * @example
   * 25
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
   * 示例值示例值示例值
   */
  lineEncoding?: string;
  /**
   * @example
   * 示例值示例值
   */
  linePhoneNum?: string;
  /**
   * @example
   * true
   */
  missCallRetry?: boolean;
  ownerId?: number;
  /**
   * @example
   * 53
   */
  phoneType?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 31
   */
  source?: number;
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
   * @example
   * 0537022*****
   */
  virtualNumber?: string;
  static names(): { [key: string]: string } {
    return {
      callDay: 'CallDay',
      callRetryInterval: 'CallRetryInterval',
      callRetryReason: 'CallRetryReason',
      callRetryTimes: 'CallRetryTimes',
      callTime: 'CallTime',
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
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskStartTime: 'TaskStartTime',
      virtualNumber: 'VirtualNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDay: { 'type': 'array', 'itemType': 'string' },
      callRetryInterval: 'number',
      callRetryReason: { 'type': 'array', 'itemType': 'string' },
      callRetryTimes: 'number',
      callTime: { 'type': 'array', 'itemType': 'string' },
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
      taskId: 'string',
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

