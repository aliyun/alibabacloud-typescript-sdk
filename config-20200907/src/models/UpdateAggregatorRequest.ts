// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregatorRequestAggregatorAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * For more information about how to obtain the ID of a member, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * > To update the member list, you must specify both `AccountId` and `AccountType`.
   * 
   * @example
   * 173808452267****
   */
  accountId?: number;
  /**
   * @remarks
   * The name of the member.
   * 
   * For more information about how to obtain the name of a member, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * > To update the member list, you must specify both `AccountId` and `AccountType`.
   * 
   * @example
   * Tony
   */
  accountName?: string;
  /**
   * @remarks
   * The affiliation of the member. Only ResourceDirectory is supported.
   * 
   * > To update the member list, you must specify both `AccountId` and `AccountType`.
   * 
   * @example
   * ResourceDirectory
   */
  accountType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountType: 'AccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAggregatorRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. A tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value can be up to 128 characters in length. It cannot start with `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * value-1
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

export class UpdateAggregatorRequest extends $dara.Model {
  /**
   * @remarks
   * The members in the account group.
   * 
   * > You can leave this parameter empty to skip updating the member list. To update the member list, you must specify both `AccountId` and `AccountType`.
   * 
   * **if can be null:**
   * false
   */
  aggregatorAccounts?: UpdateAggregatorRequestAggregatorAccounts[];
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-dacf86d8314e00eb****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * For more information about how to obtain the name of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * @example
   * Test_Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * A client token that ensures the idempotence of the request. Generate a unique token for each request. The token can contain only ASCII characters and must be no more than 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the account group.
   * 
   * For more information about how to obtain the description of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * @example
   * 测试组
   */
  description?: string;
  /**
   * @remarks
   * The ID of the folder. You can enter multiple folder IDs. Separate the IDs with commas (,).
   * 
   * @example
   * fd-brHdgv****,fd-brHdgk****
   */
  folderId?: string;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated and no longer takes effect. Ignore this parameter.
   * 
   * You can attach up to 20 tags.
   * 
   * @deprecated
   */
  tag?: UpdateAggregatorRequestTag[];
  static names(): { [key: string]: string } {
    return {
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      clientToken: 'ClientToken',
      description: 'Description',
      folderId: 'FolderId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccounts: { 'type': 'array', 'itemType': UpdateAggregatorRequestAggregatorAccounts },
      aggregatorId: 'string',
      aggregatorName: 'string',
      clientToken: 'string',
      description: 'string',
      folderId: 'string',
      tag: { 'type': 'array', 'itemType': UpdateAggregatorRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.aggregatorAccounts)) {
      $dara.Model.validateArray(this.aggregatorAccounts);
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

