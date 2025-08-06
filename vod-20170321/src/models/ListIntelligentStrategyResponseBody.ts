// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntelligentStrategyResponseBodyIntelligentStrategyList extends $dara.Model {
  conditions?: string;
  creationTime?: string;
  executeParams?: string;
  matchLimit?: number;
  modifiedTime?: string;
  name?: string;
  priority?: number;
  startTime?: string;
  state?: string;
  strategyId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      creationTime: 'CreationTime',
      executeParams: 'ExecuteParams',
      matchLimit: 'MatchLimit',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      priority: 'Priority',
      startTime: 'StartTime',
      state: 'State',
      strategyId: 'StrategyId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: 'string',
      creationTime: 'string',
      executeParams: 'string',
      matchLimit: 'number',
      modifiedTime: 'string',
      name: 'string',
      priority: 'number',
      startTime: 'string',
      state: 'string',
      strategyId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntelligentStrategyResponseBody extends $dara.Model {
  intelligentStrategyList?: ListIntelligentStrategyResponseBodyIntelligentStrategyList[];
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      intelligentStrategyList: 'IntelligentStrategyList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intelligentStrategyList: { 'type': 'array', 'itemType': ListIntelligentStrategyResponseBodyIntelligentStrategyList },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.intelligentStrategyList)) {
      $dara.Model.validateArray(this.intelligentStrategyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

