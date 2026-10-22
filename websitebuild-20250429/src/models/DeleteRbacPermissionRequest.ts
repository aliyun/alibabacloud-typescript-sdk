// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRbacPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The business instance ID.
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * The permission ID.
   * 
   * @example
   * 804a6b2a-82ac-49f2-960a-a6c2ed9e73dd
   */
  permissionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      permissionId: 'PermissionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      permissionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

