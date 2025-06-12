// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed } from "./GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed";


export class GetAccessKeyLastUsedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the time when the AccessKey pair was used for the last time.
   */
  accessKeyLastUsed?: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CCE804C-6450-49A7-B1DB-2460F7A97416
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyLastUsed: 'AccessKeyLastUsed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyLastUsed: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKeyLastUsed && typeof (this.accessKeyLastUsed as any).validate === 'function') {
      (this.accessKeyLastUsed as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

