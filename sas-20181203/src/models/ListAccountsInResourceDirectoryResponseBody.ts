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
   * This parameter is deprecated and does not need to be used.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  buySas?: number;
  /**
   * @remarks
   * Indicates whether a Security Center subscription instance is purchased. Valid values:
   * - **true**
   * - **false**.
   * 
   * @example
   * true
   */
  buySasNew?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **0**: upfront
   * * **1**: pay-as-you-go.
   * 
   * @example
   * 1
   */
  chargeType?: number;
  /**
   * @remarks
   * The account name.
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
   * The instance purchase type. Valid values:
   * - **0**: self-purchased
   * - **1**: allocated through multi-account management.
   * 
   * @example
   * 0
   */
  instanceBuyType?: number;
  /**
   * @remarks
   * Indicates whether the account is the management account of the resource directory. Valid values:
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isMaAccount?: string;
  /**
   * @remarks
   * Indicates whether the account is marked as followed.
   * 
   * @example
   * no
   */
  isMarked?: string;
  /**
   * @remarks
   * Indicates whether the account is a delegated administrator account of Security Center. Valid values:
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isSasDaAccount?: string;
  /**
   * @remarks
   * Indicates whether the account is a management account of Cloud Threat Detection and Response (CTDR). Valid values:
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isSiemControlAccount?: string;
  /**
   * @remarks
   * Indicates whether the account is a delegated administrator account of Cloud Threat Detection and Response (CTDR). Valid values:
   * 
   * - **yes**
   * 
   * - **no**.
   * 
   * @example
   * no
   */
  isSiemDaAccount?: string;
  /**
   * @remarks
   * The pay-as-you-go module switch. Valid values:
   * - **0**: disabled
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  postBasicService?: number;
  /**
   * @remarks
   * The status of pay-as-you-go module switches, in JsonString format. Valid values:
   * - Key:
   *   - **VUL**: vulnerability management module
   *   - **CSPM**: Cloud Security Posture Management (CSPM) module
   *   - **AGENTLESS**: agentless detection module
   *   - **SERVERLESS**: serverless asset module
   *   - **CTDR**: Cloud Threat Detection and Response (CTDR) module
   *   - **RASP**: Runtime Application Self-Protection (RASP) module
   *   - **SDK**: malicious file detection SDK module
   *   - **POST_HOST**: host and container security module
   * - Value: 0 indicates disabled. 1 indicates enabled.
   * 
   * @example
   * {\\"VUL\\":0}
   */
  postPayModuleSwitch?: string;
  /**
   * @remarks
   * The Security Center instance ID.
   * 
   * @example
   * postpay-sas-x5x3hy1ly***
   */
  saleInstance?: string;
  /**
   * @remarks
   * The purchased edition of Security Center. Valid values:
   * 
   * - **0** or **1**: Free Edition
   * - **2** or **3**: Enterprise Edition  
   * - **5**: Premium Edition  
   * - **6**: Anti-virus Edition 
   * - **7**: Ultimate Edition.
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
   * The list of member accounts in the resource directory.
   */
  accounts?: ListAccountsInResourceDirectoryResponseBodyAccounts[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
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

