// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAggregatorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The members in the account group.
   * 
   * > You can leave this parameter empty to skip updating the member list. To update the member list, you must specify both `AccountId` and `AccountType`.
   * 
   * **if can be null:**
   * false
   */
  aggregatorAccountsShrink?: string;
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
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccountsShrink: 'AggregatorAccounts',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      clientToken: 'ClientToken',
      description: 'Description',
      folderId: 'FolderId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccountsShrink: 'string',
      aggregatorId: 'string',
      aggregatorName: 'string',
      clientToken: 'string',
      description: 'string',
      folderId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

