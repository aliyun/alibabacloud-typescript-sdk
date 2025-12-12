// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @example
   * 188****,188****,188****
   */
  ids?: string;
  /**
   * @example
   * 617242AA-04D8-5AF0-8C0C-6E53DDA8C3C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

