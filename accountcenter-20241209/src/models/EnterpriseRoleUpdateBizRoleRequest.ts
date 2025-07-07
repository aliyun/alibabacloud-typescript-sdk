// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleUpdateBizRoleRequest extends $dara.Model {
  bizPermissionCodeListJson?: string;
  bizRoleCode?: string;
  bizRoleDesc?: string;
  bizRoleName?: string;
  encryptTicket?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  static names(): { [key: string]: string } {
    return {
      bizPermissionCodeListJson: 'BizPermissionCodeListJson',
      bizRoleCode: 'BizRoleCode',
      bizRoleDesc: 'BizRoleDesc',
      bizRoleName: 'BizRoleName',
      encryptTicket: 'EncryptTicket',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizPermissionCodeListJson: 'string',
      bizRoleCode: 'string',
      bizRoleDesc: 'string',
      bizRoleName: 'string',
      encryptTicket: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

