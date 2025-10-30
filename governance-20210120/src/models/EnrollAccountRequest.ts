// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrollAccountRequestBaselineItems extends $dara.Model {
  /**
   * @remarks
   * The configurations of the baseline item.
   * 
   * @example
   * {\\"Notifications\\":[{\\"GroupKey\\":\\"account_msg\\",\\"Contacts\\":[{\\"Name\\":\\"aa\\"}],\\"PmsgStatus\\":1,\\"EmailStatus\\":1,\\"SmsStatus\\":1}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the baseline item.
   * 
   * @example
   * ACS-BP_ACCOUNT_FACTORY_VPC
   */
  name?: string;
  /**
   * @remarks
   * Whether to skip the baseline item. Valid values:
   * 
   * *   false: The baseline item is not skipped.
   * *   true: The baseline item is skipped.
   * 
   * @example
   * false
   */
  skip?: boolean;
  /**
   * @remarks
   * The version of the baseline item.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      skip: 'Skip',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      name: 'string',
      skip: 'boolean',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnrollAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix for the account name of the member.
   * 
   * *   If the account baseline is applied to an account that is newly created, you must configure this parameter.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * test-account
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * *   If the account baseline is applied to an account that is newly created, you do not need to configure this parameter.
   * *   If the account baseline is applied to an existing account, you must configure this parameter.
   * 
   * @example
   * 12868156179****
   */
  accountUid?: number;
  /**
   * @remarks
   * The baseline ID.
   * 
   * If this parameter is left empty, the default baseline is used.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The array that contains baseline items.
   * 
   * If this parameter is specified, the configurations of the baseline items are merged with the baseline applied to the specified account. The configurations of the same baseline items are subject to the configurations of this parameter. We recommend that you leave this parameter empty and configure the `BaselineId` parameter to specify an account baseline and apply the configurations of the account baseline to the account.
   */
  baselineItems?: EnrollAccountRequestBaselineItems[];
  /**
   * @remarks
   * The display name of the account.
   * 
   * *   If the account baseline is applied to an account that is newly created, you must configure this parameter.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * *   If the account baseline is applied to an account that is newly created, you need to specify a parent folder. If you do not configure this parameter, the account is created in the Root folder.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * *   If the account baseline is applied to an account that is newly created, you need to specify a billing account. If you do not configure this parameter, the self-pay settlement method is used for the account.
   * *   If the account baseline is applied to an existing account, you do not need to configure this parameter.
   * 
   * @example
   * 19534534552****
   */
  payerAccountUid?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The identity type of the member. Valid values:
   * 
   * *   resell (default): The member is an account for a reseller. A relationship is automatically established between the member and the reseller. The management account of the resource directory must be used as the billing account of the member.
   * *   non_resell: The member is not an account for a reseller. The member is an account that is not associated with a reseller. You can directly use the account to purchase Alibaba Cloud resources. The member is used as its own billing account.
   * 
   * > This parameter is available only for resellers at the international site (alibabacloud.com).
   * 
   * @example
   * resell
   */
  resellAccountType?: string;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: EnrollAccountRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountNamePrefix: 'AccountNamePrefix',
      accountUid: 'AccountUid',
      baselineId: 'BaselineId',
      baselineItems: 'BaselineItems',
      displayName: 'DisplayName',
      folderId: 'FolderId',
      payerAccountUid: 'PayerAccountUid',
      regionId: 'RegionId',
      resellAccountType: 'ResellAccountType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNamePrefix: 'string',
      accountUid: 'number',
      baselineId: 'string',
      baselineItems: { 'type': 'array', 'itemType': EnrollAccountRequestBaselineItems },
      displayName: 'string',
      folderId: 'string',
      payerAccountUid: 'number',
      regionId: 'string',
      resellAccountType: 'string',
      tag: { 'type': 'array', 'itemType': EnrollAccountRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.baselineItems)) {
      $dara.Model.validateArray(this.baselineItems);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

