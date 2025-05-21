// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRealisticPortraitResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D5798660-1531-5D12-9C20-16FEE9D22351
   */
  requestId?: string;
  /**
   * @example
   * 313123123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
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

