// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target user (WINNEXO platform user ID). If this parameter is left empty, the operation is performed on the caller. Administrators can specify another user\\"s ID to perform the operation on behalf of that user.
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

