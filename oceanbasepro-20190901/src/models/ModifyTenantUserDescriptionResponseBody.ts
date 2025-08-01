// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantUserDescriptionResponseBody extends $dara.Model {
  /**
   * @remarks
   * You can call this operation to modify the description of a specified account in a tenant.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
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

