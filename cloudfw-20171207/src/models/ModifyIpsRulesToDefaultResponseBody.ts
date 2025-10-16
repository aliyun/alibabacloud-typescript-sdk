// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyIpsRulesToDefaultResponseBody extends $dara.Model {
  /**
   * @example
   * B713361D-62E2-5FF0-9D29-BBFAAF40****
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

