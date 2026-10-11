// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEgressProxyRuleGroupAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * 01A05AB5-5BED-56ED-8EE9-304FBC2F8537
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

