// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseRoleQueryAccountForRoleGrantByPageResponseBodyAccounts extends $dara.Model {
  alias?: string;
  aliyunId?: string;
  granted?: boolean;
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      aliyunId: 'AliyunId',
      granted: 'Granted',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      aliyunId: 'string',
      granted: 'boolean',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseRoleQueryAccountForRoleGrantByPageResponseBody extends $dara.Model {
  accounts?: EnterpriseRoleQueryAccountForRoleGrantByPageResponseBodyAccounts[];
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
      accounts: 'Accounts',
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
      accounts: { 'type': 'array', 'itemType': EnterpriseRoleQueryAccountForRoleGrantByPageResponseBodyAccounts },
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
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

