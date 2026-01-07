// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList extends $dara.Model {
  alias?: string;
  belongToMasterAccount?: boolean;
  email?: string;
  enterpriseEcId?: string;
  enterpriseEntityId?: string;
  enterpriseLicenseNo?: string;
  enterpriseName?: string;
  enterpriseNbId?: string;
  freezeLogin?: boolean;
  loginId?: string;
  manageInviteTimeStamp?: string;
  pk?: string;
  securityMobile?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      belongToMasterAccount: 'BelongToMasterAccount',
      email: 'Email',
      enterpriseEcId: 'EnterpriseEcId',
      enterpriseEntityId: 'EnterpriseEntityId',
      enterpriseLicenseNo: 'EnterpriseLicenseNo',
      enterpriseName: 'EnterpriseName',
      enterpriseNbId: 'EnterpriseNbId',
      freezeLogin: 'FreezeLogin',
      loginId: 'LoginId',
      manageInviteTimeStamp: 'ManageInviteTimeStamp',
      pk: 'Pk',
      securityMobile: 'SecurityMobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      belongToMasterAccount: 'boolean',
      email: 'string',
      enterpriseEcId: 'string',
      enterpriseEntityId: 'string',
      enterpriseLicenseNo: 'string',
      enterpriseName: 'string',
      enterpriseNbId: 'string',
      freezeLogin: 'boolean',
      loginId: 'string',
      manageInviteTimeStamp: 'string',
      pk: 'string',
      securityMobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnterpriseAccountQueryAccountsInfoResponseBody extends $dara.Model {
  accountInfoDtoList?: EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList[];
  code?: string;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountInfoDtoList: 'AccountInfoDtoList',
      code: 'Code',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountInfoDtoList: { 'type': 'array', 'itemType': EnterpriseAccountQueryAccountsInfoResponseBodyAccountInfoDtoList },
      code: 'string',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.accountInfoDtoList)) {
      $dara.Model.validateArray(this.accountInfoDtoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

