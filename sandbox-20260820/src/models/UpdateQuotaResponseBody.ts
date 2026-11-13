// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class UpdateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message. The value is success if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The quota configuration information.
   */
  quota?: Quota;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BCFAE0A-9FA9-5F72-8E8B-724632BC19A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      quota: 'quota',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      quota: Quota,
      requestId: 'string',
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

