// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRbacPermissionRequest extends $dara.Model {
  bizId?: string;
  permissionData?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      permissionData: 'PermissionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      permissionData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

