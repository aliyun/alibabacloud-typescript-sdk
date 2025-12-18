// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregatorRequestAggregatorAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * For more information about how to obtain the ID of a member, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * >  If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
   * 
   * @example
   * 173808452267****
   */
  accountId?: number;
  /**
   * @remarks
   * The display name of the member.
   * 
   * For more information about how to obtain the name of a member, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * >  If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
   * 
   * @example
   * Tony
   */
  accountName?: string;
  /**
   * @remarks
   * The resource directory to which the member belongs. Valid value: ResourceDirectory. ResourceDirectory indicates that the member belongs to a resource directory.
   * 
   * >  If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
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
   * The tag key of the resource. You can specify up to 20 tag keys.
   * 
   * The tag key cannot be an empty string. The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs`:. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag values.
   * 
   * The tag values can be an empty string or up to 128 characters in length. The tag values cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each key-value must be unique. You can specify at most 20 tag values in each call.
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
   * >  When you modify the configurations of an account group, this parameter can be left empty. In this case, the member list is not updated. If you want to update the member list, you must configure both the `AccountId` and `AccountType` parameters.
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * Test_Aggregator_Description
   */
  description?: string;
  /**
   * @remarks
   * The folder ID. Separate multiple folder IDs with commas (,).
   * 
   * @example
   * fd-brHdgv****,fd-brHdgk****
   */
  folderId?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can add up to 20 tags to a resource.
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

