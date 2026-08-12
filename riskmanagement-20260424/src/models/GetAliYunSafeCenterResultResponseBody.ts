// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the Security Center Agent.
   * 
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  agentStatus?: boolean;
  /**
   * @remarks
   * The running status of the ECS instance.
   * 
   * - **true**: Running.
   * - **false**: Not running.
   * 
   * @example
   * true
   */
  ecsInstanceStatus?: boolean;
  /**
   * @remarks
   * The list of instance IDs of identical security alert events in Security Center.
   */
  instanceIds?: number[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8169D779-3391-541F-936B-11F4EC09AD0D
   */
  requestId?: string;
  /**
   * @remarks
   * The running status of the simple application server.
   * 
   * - **true**: Running.
   * - **false**: Not running.
   * 
   * @example
   * true
   */
  swasInstanceStatus?: boolean;
  /**
   * @remarks
   * The task ID for querying security alerting events triggered by the same rule or alerting type.
   * 
   * @example
   * 12313123
   */
  taskId?: number;
  /**
   * @remarks
   * Indicates whether the list of security alerting events that match the same IP rule or same alerting type as the alerting event to be handled is empty.
   * 
   * - **true**: Empty.
   * - **false**: Not empty.
   * 
   * @example
   * true
   */
  taskStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      ecsInstanceStatus: 'EcsInstanceStatus',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      swasInstanceStatus: 'SwasInstanceStatus',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'boolean',
      ecsInstanceStatus: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      swasInstanceStatus: 'boolean',
      taskId: 'number',
      taskStatus: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliYunSafeCenterResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > 200: Success. Other values (500, 400, etc.): Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAliYunSafeCenterResultResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3C107939-59BD-5EB9-B250-39559C830A85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call is successful. Valid values: True/False. This does not indicate the success of subsequent business operations.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAliYunSafeCenterResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

