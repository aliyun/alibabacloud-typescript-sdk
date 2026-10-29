// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SdnsDeleteRuleCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to troubleshoot API call issues. This is not the policy ID.
   * 
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
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

