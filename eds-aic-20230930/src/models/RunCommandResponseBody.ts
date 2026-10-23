// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandResponseBodyRunCommandInfos extends $dara.Model {
  /**
   * @remarks
   * The instance-level child task ID.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  childTaskId?: string;
  /**
   * @remarks
   * The cloud phone instance ID.
   * 
   * @example
   * acp-uto81vfd8t8z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The command execution ID.
   * 
   * @example
   * B8ED2BA9-0C6A-5643-818F-B5D60A64****
   */
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      childTaskId: 'ChildTaskId',
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childTaskId: 'string',
      instanceId: 'string',
      invokeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command execution ID. You can use this ID to query the command execution result.
   * 
   * @example
   * t-gov2ujrk32v4****
   */
  invokeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of command execution information for each cloud phone instance.
   */
  runCommandInfos?: RunCommandResponseBodyRunCommandInfos[];
  /**
   * @remarks
   * The batch task ID.
   * 
   * @example
   * t-bp67acfmxazb4p****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
      runCommandInfos: 'RunCommandInfos',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
      runCommandInfos: { 'type': 'array', 'itemType': RunCommandResponseBodyRunCommandInfos },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runCommandInfos)) {
      $dara.Model.validateArray(this.runCommandInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

