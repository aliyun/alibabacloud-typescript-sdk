// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliYunSafeCenterResultResponseBodyData extends $dara.Model {
  agentStatus?: boolean;
  ecsInstanceStatus?: boolean;
  instanceIds?: number[];
  requestId?: string;
  swasInstanceStatus?: boolean;
  taskId?: number;
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
  code?: string;
  data?: GetAliYunSafeCenterResultResponseBodyData;
  message?: string;
  requestId?: string;
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

