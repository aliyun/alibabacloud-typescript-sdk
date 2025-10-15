// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationAccountsResponseBodyApplicationAccounts extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 应用账号Id
   * 
   * @example
   * aac_m66smhbq5krept7nza54hxxxx
   */
  applicationAccountId?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用Id
   * 
   * @example
   * app_m43o4h5adeo5klvbbxgxxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM 应用账号名称
   * 
   * @example
   * test
   */
  applicationUsername?: string;
  /**
   * @remarks
   * 创建时间
   * 
   * @example
   * 1737510353000
   */
  createTime?: number;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_eznwtkkaucljizh6qqu7ptxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * IDaaS EIAM 用户Id
   * 
   * @example
   * user_tkmboufpnvpbitdpzrlngxzxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccountId: 'ApplicationAccountId',
      applicationId: 'ApplicationId',
      applicationUsername: 'ApplicationUsername',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccountId: 'string',
      applicationId: 'string',
      applicationUsername: 'string',
      createTime: 'number',
      instanceId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccountsResponseBody extends $dara.Model {
  applicationAccounts?: ListApplicationAccountsResponseBodyApplicationAccounts[];
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationAccounts: 'ApplicationAccounts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccounts: { 'type': 'array', 'itemType': ListApplicationAccountsResponseBodyApplicationAccounts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationAccounts)) {
      $dara.Model.validateArray(this.applicationAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

