// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregatorsResponseBodyAggregatorsResultAggregatorsTags } from "./ListAggregatorsResponseBodyAggregatorsResultAggregatorsTags";


export class ListAggregatorsResponseBodyAggregatorsResultAggregators extends $dara.Model {
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
   * The number of member accounts in the account group.
   * 
   * @example
   * 2
   */
  aggregatorAccountCount?: number;
  /**
   * @remarks
   * The timestamp generated when the account group was created.
   * 
   * @example
   * 1623036305000
   */
  aggregatorCreateTimestamp?: number;
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
   * Test_Group
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
   * *   RD: global account group.
   * *   FOLDER: account group of the folder.
   * *   CUSTOM: custom account group.
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
   * Example-description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * r-BU****
   */
  folderId?: string;
  /**
   * @remarks
   * tags
   */
  tags?: ListAggregatorsResponseBodyAggregatorsResultAggregatorsTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      aggregatorAccountCount: 'AggregatorAccountCount',
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
      aggregatorCreateTimestamp: 'number',
      aggregatorId: 'string',
      aggregatorName: 'string',
      aggregatorStatus: 'number',
      aggregatorType: 'string',
      description: 'string',
      folderId: 'string',
      tags: { 'type': 'array', 'itemType': ListAggregatorsResponseBodyAggregatorsResultAggregatorsTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

