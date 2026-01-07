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

export class EnterpriseRoleQueryBizRoleDetailResponseBody extends $dara.Model {
  bizRoleDetail?: EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizRoleDetail: 'BizRoleDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoleDetail: EnterpriseRoleQueryBizRoleDetailResponseBodyBizRoleDetail,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.bizRoleDetail && typeof (this.bizRoleDetail as any).validate === 'function') {
      (this.bizRoleDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

