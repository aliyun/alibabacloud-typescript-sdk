// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAppResponseBodyChildTaskInfo extends $dara.Model {
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
      childTaskId: 'ChildTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class InstallAppResponseBody extends $dara.Model {
  childTaskInfo?: InstallAppResponseBodyChildTaskInfo[];
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
   * t-14xwibw7yp73q****
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
      childTaskInfo: { 'type': 'array', 'itemType': InstallAppResponseBodyChildTaskInfo },
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

