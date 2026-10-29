// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSdnsRuleCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request. You can use the ID to troubleshoot call issues. This ID is not the policy ID.
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

