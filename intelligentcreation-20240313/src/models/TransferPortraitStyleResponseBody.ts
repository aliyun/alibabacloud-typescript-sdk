// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferPortraitStyleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 725E87CD-F2DE-5FC4-8A09-2EBDFBF26DAA
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

