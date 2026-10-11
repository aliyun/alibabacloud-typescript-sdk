// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEgressProxyRuleGroupsToConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11E669F9-B301-575C-AB02-C54E41ADFA4B
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

