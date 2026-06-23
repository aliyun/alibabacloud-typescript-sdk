// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The status code of the node addition result.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-2ze0lgm3y6iylcbt****
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the node addition result.
   * 
   * @example
   * successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      instanceId: 'instanceId',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node addition information.
   */
  list?: AttachInstancesResponseBodyList[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a544aff80282e39ea00****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AttachInstancesResponseBodyList },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

