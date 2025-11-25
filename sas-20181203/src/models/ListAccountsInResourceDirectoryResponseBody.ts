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
   * @remarks
   * This parameter is deprecated and should be ignored.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  buySas?: number;
  /**
   * @remarks
   * Whether a yearly or monthly subscription of Cloud Security Center is purchased. Values:
   * - **true**: Yes
   * - **false**: No
   * 
   * @example
   * true
   */
  buySasNew?: boolean;
  /**
   * @remarks
   * Subscription type. Values:
   * * **0**: Prepaid
   * * **1**: Pay-As-You-Go
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * Instance purchase type. Values:
   * - **0**: Self-purchased
   * - **1**: Multi-account allocation
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * Post-paid module switch. Values:
   * - **0**: Off
   * - **1**: On
   * 
   * @example
   * 1
   */
  postBasicService?: number;
  /**
   * @remarks
   * The switch status of the pay-as-you-go module. The value is a JSON string. Valid values:
   * 
   * *   Key:
   * 
   *     *   **VUL**: vulnerability fixing module
   *     *   **CSPM**: cloud service configuration check module
   *     *   **AGENTLESS**: agentless detection module
   *     *   **SERVERLESS**: serverless asset module
   * 
   * *   Value: A value of 0 specifies disabled. A value of 1 specifies enabled.
   * 
   * >  If you do not specify a value for a module, the original value of the module is retained.
   * 
   * @example
   * {\\"VUL\\":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * Cloud Security Center Instance ID.
   * 
   * @example
   * postpay-sas-x5x3hy1ly***
   */
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

