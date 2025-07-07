// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleCreateBizRoleRequest extends $dara.Model {
  bizPermissionCodeListJson?: string;
  bizRoleDesc?: string;
  bizRoleName?: string;
  encryptTicket?: string;
  orientedEcId?: string;
  orientedLeId?: string;
  orientedNbId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      bizPermissionCodeListJson: 'BizPermissionCodeListJson',
      bizRoleDesc: 'BizRoleDesc',
      bizRoleName: 'BizRoleName',
      encryptTicket: 'EncryptTicket',
      orientedEcId: 'OrientedEcId',
      orientedLeId: 'OrientedLeId',
      orientedNbId: 'OrientedNbId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizPermissionCodeListJson: 'string',
      bizRoleDesc: 'string',
      bizRoleName: 'string',
      encryptTicket: 'string',
      orientedEcId: 'string',
      orientedLeId: 'string',
      orientedNbId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

