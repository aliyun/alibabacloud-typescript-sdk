// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartTairKVCacheCustomInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * AD425AD3-CC7B-4EE2-A5CB-2F61BA73****
   */
  requestId?: string;
  /**
   * @example
   * 11111****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

