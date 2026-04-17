// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UninstallAppResponseBodyChildTaskInfo extends $dara.Model {
  appId?: string;
  /**
   * @example
   * t-ybde48cevxxxx
   */
  childTaskId?: string;
  /**
   * @example
   * acp-ty3bnd7b9xxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      childTaskId: 'ChildTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      childTaskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAppResponseBody extends $dara.Model {
  childTaskInfo?: UninstallAppResponseBodyChildTaskInfo[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * t-1ljew7on6ay0j****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      childTaskInfo: 'ChildTaskInfo',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childTaskInfo: { 'type': 'array', 'itemType': UninstallAppResponseBodyChildTaskInfo },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childTaskInfo)) {
      $dara.Model.validateArray(this.childTaskInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

