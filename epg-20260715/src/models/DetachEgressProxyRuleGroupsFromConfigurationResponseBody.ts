// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachEgressProxyRuleGroupsFromConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 01A05AC2-567F-5BB5-8F2D-436C4BE402E3
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

