// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskExecutionInvocationsResponseBodyTaskExecutionInvocations extends $dara.Model {
  /**
   * @example
   * t-hz0jdfwd9f****
   */
  invocationId?: string;
  /**
   * @example
   * exec-xxxx.t0001
   */
  invocationTaskExecutionId?: string;
  /**
   * @example
   * TaskName
   */
  invocationTaskName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      invocationId: 'InvocationId',
      invocationTaskExecutionId: 'InvocationTaskExecutionId',
      invocationTaskName: 'InvocationTaskName',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationId: 'string',
      invocationTaskExecutionId: 'string',
      invocationTaskName: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskExecutionInvocationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9E011F98-4EE5-5E3A-8FA3-D38F2C531C1F
   */
  requestId?: string;
  taskExecutionInvocations?: ListTaskExecutionInvocationsResponseBodyTaskExecutionInvocations[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskExecutionInvocations: 'TaskExecutionInvocations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskExecutionInvocations: { 'type': 'array', 'itemType': ListTaskExecutionInvocationsResponseBodyTaskExecutionInvocations },
    };
  }

  validate() {
    if(Array.isArray(this.taskExecutionInvocations)) {
      $dara.Model.validateArray(this.taskExecutionInvocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

