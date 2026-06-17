// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatFirewallPreCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the precheck.
   * 
   * @example
   * 2122
   */
  preCheckId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A426611F-04FA-5205-8D04-4F6DCF09****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preCheckId: 'PreCheckId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckId: 'string',
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

