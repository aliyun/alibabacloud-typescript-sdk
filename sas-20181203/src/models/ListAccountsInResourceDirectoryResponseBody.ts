// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsInResourceDirectoryResponseBodyAccounts extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member.
   * 
   * @example
   * 180803538814****
   */
  accountId?: string;
  /**
   * @deprecated
   */
  buySas?: number;
  buySasNew?: boolean;
  chargeType?: number;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * abc**
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the folder in the resource directory.
   * 
   * @example
   * fd-cE2SQP****
   */
  folderId?: string;
  instanceBuyType?: number;
  /**
   * @remarks
   * Indicates whether the member is an administrator account of the resource directory. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  isMaAccount?: string;
  /**
   * @remarks
   * Indicates whether the member is marked as followed.
   * 
   * @example
   * no
   */
  isMarked?: string;
  /**
   * @remarks
   * Indicates whether the member is a delegated administrator account of Security Center. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  isSasDaAccount?: string;
  /**
   * @remarks
   * Indicates whether the member is an account of the threat analysis and response feature. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  isSiemControlAccount?: string;
  /**
   * @remarks
   * Indicates whether the member is a delegated administrator account of the threat analysis and response feature. Valid values:
   * 
   * *   **yes**
   * *   **no**
   * 
   * @example
   * no
   */
  isSiemDaAccount?: string;
  postBasicService?: number;
  postPayModuleSwitch?: string;
  saleInstance?: string;
  /**
   * @remarks
   * The edition of Security Center that you use. Valid value:
   * 
   * *   **0** or **1**: Basic
   * *   **2** or **3**: Enterprise
   * *   **5**: Advanced
   * *   **6**: Anti-virus
   * *   **7**: Ultimate
   * 
   * @example
   * 0
   */
  sasVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      buySas: 'BuySas',
      buySasNew: 'BuySasNew',
      chargeType: 'ChargeType',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      instanceBuyType: 'InstanceBuyType',
      isMaAccount: 'IsMaAccount',
      isMarked: 'IsMarked',
      isSasDaAccount: 'IsSasDaAccount',
      isSiemControlAccount: 'IsSiemControlAccount',
      isSiemDaAccount: 'IsSiemDaAccount',
      postBasicService: 'PostBasicService',
      postPayModuleSwitch: 'PostPayModuleSwitch',
      saleInstance: 'SaleInstance',
      sasVersion: 'SasVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      buySas: 'number',
      buySasNew: 'boolean',
      chargeType: 'number',
      displayName: 'string',
      folderId: 'string',
      instanceBuyType: 'number',
      isMaAccount: 'string',
      isMarked: 'string',
      isSasDaAccount: 'string',
      isSiemControlAccount: 'string',
      isSiemDaAccount: 'string',
      postBasicService: 'number',
      postPayModuleSwitch: 'string',
      saleInstance: 'string',
      sasVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsInResourceDirectoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The members in the resource directory.
   */
  accounts?: ListAccountsInResourceDirectoryResponseBodyAccounts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7A839E8-70AE-591D-8D9E-C5419A2240DB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': ListAccountsInResourceDirectoryResponseBodyAccounts },
      requestId: 'string',
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

