// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAccessKeysResponseBodyAccessKeys } from "./ListAccessKeysResponseBodyAccessKeys";


export class ListAccessKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey pairs that belong to the RAM user.
   */
  accessKeys?: ListAccessKeysResponseBodyAccessKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeys: 'AccessKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeys: ListAccessKeysResponseBodyAccessKeys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKeys && typeof (this.accessKeys as any).validate === 'function') {
      (this.accessKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

