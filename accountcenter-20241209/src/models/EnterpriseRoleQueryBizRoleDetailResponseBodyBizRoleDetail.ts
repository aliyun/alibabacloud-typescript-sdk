// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetailBizPermissions } from "./EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetailBizPermissions";


export class EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail extends $dara.Model {
  bizPermissions?: EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetailBizPermissions[];
  bizRoleCode?: string;
  bizRoleDesc?: string;
  bizRoleName?: string;
  resourceType?: string;
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      bizPermissions: 'BizPermissions',
      bizRoleCode: 'BizRoleCode',
      bizRoleDesc: 'BizRoleDesc',
      bizRoleName: 'BizRoleName',
      resourceType: 'ResourceType',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizPermissions: { 'type': 'array', 'itemType': EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetailBizPermissions },
      bizRoleCode: 'string',
      bizRoleDesc: 'string',
      bizRoleName: 'string',
      resourceType: 'string',
      srcType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizPermissions)) {
      $dara.Model.validateArray(this.bizPermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

