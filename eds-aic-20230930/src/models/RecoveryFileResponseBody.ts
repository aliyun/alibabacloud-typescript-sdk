// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoveryFileResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-34pqe4r0kd9kn****
   */
  androidInstanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-ehs0yoedsskom****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceId: 'AndroidInstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceId: 'string',
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

export class RecoveryFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of restored instances.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The returned result object.
   * 
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  data?: RecoveryFileResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6AD56E39-430B-5401-AB4A-7B086454****
   */
  requestId?: string;
  /**
   * @remarks
   * The batch task ID.
   * 
   * @example
   * t-3eourrxaoliqq****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': RecoveryFileResponseBodyData },
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

