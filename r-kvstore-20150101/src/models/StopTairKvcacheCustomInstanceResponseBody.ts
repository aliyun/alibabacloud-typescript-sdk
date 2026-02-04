// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopTairKVCacheCustomInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * tc-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @example
   * 20C8341E-B5AD-4B24-BD82-D73241522ABF
   */
  requestId?: string;
  /**
   * @example
   * 578678678
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

