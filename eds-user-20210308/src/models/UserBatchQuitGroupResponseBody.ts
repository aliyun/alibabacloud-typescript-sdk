// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserBatchQuitGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 890JNJNF-SADASSDFS-SDFSDF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

