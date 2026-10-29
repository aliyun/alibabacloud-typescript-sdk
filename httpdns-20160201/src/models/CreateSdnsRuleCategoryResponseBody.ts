// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSdnsRuleCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the policy created and saved in this request. This ID is consistent with the ID in the list and details, and is used for querying, updating, enabling, disabling, and deleting the policy. The ID is saved as a string to avoid precision loss of large integers.
   * 
   * @example
   * 123456789012345678
   */
  id?: string;
  /**
   * @remarks
   * The ID of the request. This ID is used to troubleshoot call issues and is not the policy ID.
   * 
   * @example
   * 50F9C40E-188D-4208-BE2C-74271337****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

