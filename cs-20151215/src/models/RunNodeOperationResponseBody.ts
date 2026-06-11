// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunNodeOperationResponseBody extends $dara.Model {
  /**
   * @example
   * c2230fxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * xxxx
   */
  requestId?: string;
  /**
   * @example
   * T-xxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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

