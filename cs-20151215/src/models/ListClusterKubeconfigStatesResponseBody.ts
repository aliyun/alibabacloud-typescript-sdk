// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterKubeconfigStatesResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'page_number',
      pageSize: 'page_size',
      totalCount: 'total_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBodyStates extends $dara.Model {
  /**
   * @remarks
   * The displayed name or role name of the RAM user.
   * 
   * @example
   * tom
   */
  accountDisplayName?: string;
  /**
   * @remarks
   * The ID of an Alibaba Cloud account, RAM user, or RAM role.
   * 
   * @example
   * 22855*****************
   */
  accountId?: string;
  /**
   * @remarks
   * The logon name or role name of the RAM user.
   * 
   * @example
   * tom
   */
  accountName?: string;
  /**
   * @remarks
   * The status of the account.
   * 
   * *   Active: The account is active.
   * *   InActive: The account is locked.
   * *   Deleted: The account is deleted.
   * 
   * @example
   * Active
   */
  accountState?: string;
  /**
   * @remarks
   * The type of the account.
   * 
   * *   RootAccount: Alibaba Cloud account.
   * *   RamUser: RAM user.
   * *   RamRole: RAM role.
   * 
   * @example
   * RamUser
   */
  accountType?: string;
  /**
   * @remarks
   * The expiration time of the client certificate for the kubeconfig file.
   * 
   * @example
   * 2027-07-15T01:32:20Z
   */
  certExpireTime?: string;
  /**
   * @remarks
   * The status of the client certificate for the kubeconfig file.
   * 
   * *   Unexpired: The certificate is not expired.
   * *   Expired: The certificate is expired.
   * *   Unknown: The status of the certificate is unknown.
   * 
   * @example
   * Expired
   */
  certState?: string;
  /**
   * @remarks
   * Indicates whether the client certificate for the kubeconfig file can be revoked.
   * 
   * @example
   * true
   */
  revokable?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountDisplayName: 'account_display_name',
      accountId: 'account_id',
      accountName: 'account_name',
      accountState: 'account_state',
      accountType: 'account_type',
      certExpireTime: 'cert_expire_time',
      certState: 'cert_state',
      revokable: 'revokable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDisplayName: 'string',
      accountId: 'string',
      accountName: 'string',
      accountState: 'string',
      accountType: 'string',
      certExpireTime: 'string',
      certState: 'string',
      revokable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterKubeconfigStatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  page?: ListClusterKubeconfigStatesResponseBodyPage;
  /**
   * @remarks
   * The status list of the kubeconfig files associated with the cluster.
   */
  states?: ListClusterKubeconfigStatesResponseBodyStates[];
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: ListClusterKubeconfigStatesResponseBodyPage,
      states: { 'type': 'array', 'itemType': ListClusterKubeconfigStatesResponseBodyStates },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.states)) {
      $dara.Model.validateArray(this.states);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

