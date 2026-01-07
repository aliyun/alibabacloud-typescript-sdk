// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleQueryBizRoleByPageResponseBodyBizRoles extends $dara.Model {
  bizPermissionCount?: number;
  bizPermissionNameList?: string[];
  bizRoleCode?: string;
  bizRoleDesc?: string;
  bizRoleName?: string;
  grantedPkCount?: number;
  resourceType?: string;
  srcType?: string;
  static names(): { [key: string]: string } {
    return {
      bizPermissionCount: 'BizPermissionCount',
      bizPermissionNameList: 'BizPermissionNameList',
      bizRoleCode: 'BizRoleCode',
      bizRoleDesc: 'BizRoleDesc',
      bizRoleName: 'BizRoleName',
      grantedPkCount: 'GrantedPkCount',
      resourceType: 'ResourceType',
      srcType: 'SrcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizPermissionCount: 'number',
      bizPermissionNameList: { 'type': 'array', 'itemType': 'string' },
      bizRoleCode: 'string',
      bizRoleDesc: 'string',
      bizRoleName: 'string',
      grantedPkCount: 'number',
      resourceType: 'string',
      srcType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizPermissionNameList)) {
      $dara.Model.validateArray(this.bizPermissionNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseRoleQueryBizRoleByPageResponseBody extends $dara.Model {
  bizRoles?: EnterpriseRoleQueryBizRoleByPageResponseBodyBizRoles[];
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      bizRoles: 'BizRoles',
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRoles: { 'type': 'array', 'itemType': EnterpriseRoleQueryBizRoleByPageResponseBodyBizRoles },
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bizRoles)) {
      $dara.Model.validateArray(this.bizRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

