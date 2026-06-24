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
   * Specifies whether to skip the baseline item. Valid values:
   * 
   * - false (default): does not skip the baseline item.
   * 
   * - true: skips the baseline item.
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
   * The prefix for the account name.
   * 
   * - If you are creating a new resource account, this parameter is required.
   * 
   * - If you are enrolling an existing account, this parameter is not required.
   * 
   * @example
   * test-account
   */
  accountNamePrefix?: string;
  /**
   * @remarks
   * The ID of the account to enroll.
   * 
   * - If you are creating a new resource account, this parameter is not required.
   * 
   * - If you are enrolling an existing account, this parameter is required.
   * 
   * @example
   * 12868156179****
   */
  accountUid?: number;
  /**
   * @remarks
   * The ID of the baseline. If you leave this parameter empty, the default baseline is used.
   * 
   * @example
   * afb-bp1durvn3lgqe28v****
   */
  baselineId?: string;
  /**
   * @remarks
   * The baseline items.
   * 
   * If you specify this parameter, the baseline item configurations are merged with the configurations of the baseline specified by `BaselineId`. For duplicate baseline items, the configurations in this parameter take precedence. We recommend that you leave this parameter empty and use `BaselineId` to apply baseline configurations.
   */
  baselineItems?: EnrollAccountRequestBaselineItems[];
  /**
   * @remarks
   * The display name of the account.
   * 
   * - If you are creating a new resource account, this parameter is required.
   * 
   * - If you are enrolling an existing account, this parameter is not required.
   * 
   * @example
   * test-account
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * - If you are creating a new resource account and do not specify this parameter, the account is created in the Root folder.
   * 
   * - If you are enrolling an existing account, this parameter is not required.
   * 
   * @example
   * fd-5ESoku****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the billing account.
   * 
   * - If you are creating a new resource account and do not specify this parameter, the self-pay settlement method is used.
   * 
   * - If you are enrolling an existing account, this parameter is not required.
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
   * - resell (default): The member is a reseller account. A reseller relationship is automatically established between the member and the reseller. The management account of the resource directory is used as the billing account of the member.
   * 
   * - non_resell: The member is a non-reseller account. The member is not associated with a reseller and can directly purchase Alibaba Cloud resources. The member is used as its own billing account.
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

