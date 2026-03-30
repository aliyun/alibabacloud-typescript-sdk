// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloneDisksResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * g-2ze2op2grqpclwu7****
   */
  taskGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskGroupId: 'TaskGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

