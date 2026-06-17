// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradePolarClawSkillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 45D24263-7E3A-4140-9472-************
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 32077061
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

