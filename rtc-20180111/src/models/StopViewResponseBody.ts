// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopViewResponseBody extends $dara.Model {
  /**
   * @example
   * E8236D21-B690-5251-A361-5971FBF552BA
   */
  requestId?: string;
  /**
   * @example
   * 2bd80921b81e4d4289f696606885606b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

