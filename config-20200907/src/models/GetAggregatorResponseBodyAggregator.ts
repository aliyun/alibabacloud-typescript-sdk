// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregatorResponseBodyAggregatorAggregatorAccounts } from "./GetAggregatorResponseBodyAggregatorAggregatorAccounts";
import { GetAggregatorResponseBodyAggregatorTags } from "./GetAggregatorResponseBodyAggregatorTags";


export class GetAggregatorResponseBodyAggregator extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account that is used to create the account group.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The number of members in the account group.
   * 
   * @example
   * 2
   */
  aggregatorAccountCount?: number;
  /**
   * @remarks
   * The information about the members in the account group.
   */
  aggregatorAccounts?: GetAggregatorResponseBodyAggregatorAggregatorAccounts[];
  /**
   * @remarks
   * The timestamp generated when the account group was created.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 1623034091000
   */
  aggregatorCreateTimestamp?: string;
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-88ea626622af0055****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * @example
   * Test-Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The status of the account group. Valid values:
   * 
   * *   0: The account group is being created.
   * *   1: The account group was created.
   * 
   * @example
   * 1
   */
  aggregatorStatus?: number;
  /**
   * @remarks
   * The type of the account group. Valid values:
   * 
   * *   RD: a global account group.
   * *   FOLDER: an account group for a folder.
   * *   CUSTOM: a custom account group.
   * 
   * @example
   * CUSTOM
   */
  aggregatorType?: string;
  /**
   * @remarks
   * The description of the account group.
   * 
   * @example
   * The description of the test account group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the attached folder of the account group.
   * 
   * @example
   * fd-brHdgv****
   */
  folderId?: string;
  /**
   * @remarks
   * tags
   */
  tags?: GetAggregatorResponseBodyAggregatorTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorAccountCount: 'AggregatorAccountCount',
      aggregatorAccounts: 'AggregatorAccounts',
      aggregatorCreateTimestamp: 'AggregatorCreateTimestamp',
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      aggregatorStatus: 'AggregatorStatus',
      aggregatorType: 'AggregatorType',
      description: 'Description',
      folderId: 'FolderId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      aggregatorAccountCount: 'number',
      aggregatorAccounts: { 'type': 'array', 'itemType': GetAggregatorResponseBodyAggregatorAggregatorAccounts },
      aggregatorCreateTimestamp: 'string',
      aggregatorId: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      description: 'string',
      folderId: 'string',
      tags: { 'type': 'array', 'itemType': GetAggregatorResponseBodyAggregatorTags },
    };
  }

  validate() {
    if(Array.isArray(this.aggregatorAccounts)) {
      $dara.Model.validateArray(this.aggregatorAccounts);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

