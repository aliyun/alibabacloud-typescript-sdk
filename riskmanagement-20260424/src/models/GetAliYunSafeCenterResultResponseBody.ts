// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  agentStatus?: boolean;
  /**
   * @example
   * true
   */
  ecsInstanceStatus?: boolean;
  instanceIds?: number[];
  /**
   * @example
   * 8169D779-3391-541F-936B-11F4EC09AD0D
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  swasInstanceStatus?: boolean;
  /**
   * @example
   * 12313123
   */
  taskId?: number;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetAliYunSafeCenterResultResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 3C107939-59BD-5EB9-B250-39559C830A85
   */
  requestId?: string;
  /**
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

