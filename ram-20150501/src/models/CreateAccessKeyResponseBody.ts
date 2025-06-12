// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAccessKeyResponseBodyAccessKey } from "./CreateAccessKeyResponseBodyAccessKey";


export class CreateAccessKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the AccessKey pair.
   */
  accessKey?: CreateAccessKeyResponseBodyAccessKey;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: CreateAccessKeyResponseBodyAccessKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKey && typeof (this.accessKey as any).validate === 'function') {
      (this.accessKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

