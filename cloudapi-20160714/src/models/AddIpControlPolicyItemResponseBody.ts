// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddIpControlPolicyItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy. The ID is unique.
   * 
   * @example
   * P151617000829241
   */
  policyItemId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyItemId: 'PolicyItemId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyItemId: 'string',
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

