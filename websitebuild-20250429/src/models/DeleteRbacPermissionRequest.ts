// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRbacPermissionRequest extends $dara.Model {
  bizId?: string;
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

