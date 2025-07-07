// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetailBizPermissions extends $dara.Model {
  bizPermissionCode?: string;
  bizPermissionDesc?: string;
  bizPermissionName?: string;
  static names(): { [key: string]: string } {
    return {
      bizPermissionCode: 'BizPermissionCode',
      bizPermissionDesc: 'BizPermissionDesc',
      bizPermissionName: 'BizPermissionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizPermissionCode: 'string',
      bizPermissionDesc: 'string',
      bizPermissionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

