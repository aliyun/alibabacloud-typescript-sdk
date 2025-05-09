// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTrFirewallV2ConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A74C8FDD-2BEF-52D5-8B01-EB6FD94606F9
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

