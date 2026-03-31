// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregatorsResponseBodyAggregatorsResultAggregatorsTags extends $dara.Model {
  /**
   * @remarks
   * The tag keys of the resource.
   * 
   * @example
   * key-1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag values of the resource.
   * 
   * @example
   * value-1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListAggregatorsResponseBodyAggregatorsResult extends $dara.Model {
  /**
   * @remarks
   * The list of the account groups.
   */
  aggregators?: ListAggregatorsResponseBodyAggregatorsResultAggregators[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * TGlzdFJlc291cmNlU2hhcmVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregators: 'Aggregators',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregators: { 'type': 'array', 'itemType': ListAggregatorsResponseBodyAggregatorsResultAggregators },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aggregators)) {
      $dara.Model.validateArray(this.aggregators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account groups.
   */
  aggregatorsResult?: ListAggregatorsResponseBodyAggregatorsResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20C8526D-12C5-4336-BC72-EBD5D1BA732F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorsResult: 'AggregatorsResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorsResult: ListAggregatorsResponseBodyAggregatorsResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aggregatorsResult && typeof (this.aggregatorsResult as any).validate === 'function') {
      (this.aggregatorsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

