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

