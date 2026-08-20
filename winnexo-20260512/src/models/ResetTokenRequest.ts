// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target user on the WINNEXO platform. If this parameter is left empty, the operation is performed on the caller. Administrators can specify the ID of another user to perform the operation on behalf of that user.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

