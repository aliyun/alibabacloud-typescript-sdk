// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicWarmPool } from "./PublicWarmPool";


export class DescribeWarmPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response business code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01234567-89AB-CDEF-0123-456789ABCDEF
   */
  requestId?: string;
  /**
   * @remarks
   * The warm pool configuration or current status.
   */
  warmPool?: PublicWarmPool;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      warmPool: 'warmPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      warmPool: PublicWarmPool,
    };
  }

  validate() {
    if(this.warmPool && typeof (this.warmPool as any).validate === 'function') {
      (this.warmPool as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

