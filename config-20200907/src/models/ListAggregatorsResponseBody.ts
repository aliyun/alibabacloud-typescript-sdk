// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregatorsResponseBodyAggregatorsResultAggregatorsTags extends $dara.Model {
  tagKey?: string;
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
  accountId?: number;
  aggregatorAccountCount?: number;
  aggregatorCreateTimestamp?: number;
  aggregatorId?: string;
  aggregatorName?: string;
  aggregatorStatus?: number;
  aggregatorType?: string;
  description?: string;
  folderId?: string;
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
  aggregators?: ListAggregatorsResponseBodyAggregatorsResultAggregators[];
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
  aggregatorsResult?: ListAggregatorsResponseBodyAggregatorsResult;
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

