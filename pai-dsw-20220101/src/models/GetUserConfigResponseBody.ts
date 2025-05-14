// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserConfigResponseBodyFreeTier } from "./GetUserConfigResponseBodyFreeTier";


export class GetUserConfigResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  accountSufficient?: boolean;
  /**
   * @example
   * null
   */
  code?: string;
  /**
   * @example
   * true
   */
  enableEciDisk?: boolean;
  freeTier?: GetUserConfigResponseBodyFreeTier;
  /**
   * @example
   * true
   */
  freeTierSpecAvailable?: boolean;
  /**
   * @example
   * null
   */
  httpStatusCode?: number;
  /**
   * @example
   * "Access denied"
   */
  message?: string;
  /**
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountSufficient: 'AccountSufficient',
      code: 'Code',
      enableEciDisk: 'EnableEciDisk',
      freeTier: 'FreeTier',
      freeTierSpecAvailable: 'FreeTierSpecAvailable',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSufficient: 'boolean',
      code: 'string',
      enableEciDisk: 'boolean',
      freeTier: GetUserConfigResponseBodyFreeTier,
      freeTierSpecAvailable: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.freeTier && typeof (this.freeTier as any).validate === 'function') {
      (this.freeTier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

