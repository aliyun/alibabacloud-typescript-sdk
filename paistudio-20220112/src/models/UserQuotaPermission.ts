// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserQuotaPermission extends $dara.Model {
  /**
   * @remarks
   * The permissions.
   */
  permissions?: string[];
  /**
   * @remarks
   * Quota ID
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      quotaId: 'QuotaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
      quotaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

