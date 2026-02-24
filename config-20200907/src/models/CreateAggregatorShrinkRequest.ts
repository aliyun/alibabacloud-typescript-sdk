// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregatorShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The member accounts of the account group.
   * 
   * > - If you set `AggregatorType` to \\`RD, you can leave this parameter empty. This indicates that all members in the resource directory are added to the global account group.
   * >
   * > - If you set `AggregatorType` to `FOLDER`, you can leave this parameter empty. This indicates that all members in a specific folder in the resource directory are added to the folder account group.
   * 
   * **if can be null:**
   * false
   */
  aggregatorAccountsShrink?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * Example_Aggregator
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The type of the account group. Valid values:
   * 
   * - RD: global account group.
   * 
   * - FOLDER: folder account group. You must also set the `FolderId` parameter. For more information about how to obtain a folder ID, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * - CUSTOM (default): custom account group. You must also set the `AccountId` and `AccountType` parameters for `AggregatorAccounts`.
   * 
   * @example
   * CUSTOM
   */
  aggregatorType?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You must make sure that the token is unique for different requests. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1594295238-f9361358-5843-4294-8d30-b5183fac****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the account group.
   * 
   * @example
   * Example aggregator used to demonstrate how to create an aggregator.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the attached folder. You can specify multiple folder IDs. Separate the IDs with commas (,).
   * 
   * This parameter is required if you set `AggregatorType` to `FOLDER`.
   * 
   * @example
   * fd-brHdgv****,fd-brHdgk****
   */
  folderId?: string;
  /**
   * @remarks
   * The tags of the resource.
   * 
   * You can attach a maximum of 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorAccountsShrink: 'AggregatorAccounts',
      aggregatorName: 'AggregatorName',
      aggregatorType: 'AggregatorType',
      clientToken: 'ClientToken',
      description: 'Description',
      folderId: 'FolderId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorAccountsShrink: 'string',
      aggregatorName: 'string',
      aggregatorType: 'string',
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

