// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ParseSkillPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05C2791F-41A7-5E7C-B5E4-1401FD0E****
   */
  requestId?: string;
  /**
   * @remarks
   * The key of the skill package parsing task.
   * 
   * @example
   * 2E7D8B71-2677-1B4C-9E25-A88B9******
   */
  taskKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskKey: 'TaskKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

