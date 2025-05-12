// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateInstancePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the instance.
   */
  instanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5ED62C81-9948-5612-81E1-EA3853752306
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 498115273
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

