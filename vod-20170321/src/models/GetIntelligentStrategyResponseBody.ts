// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIntelligentStrategyResponseBodyIntelligentStrategy extends $dara.Model {
  conditions?: string;
  creationTime?: string;
  executeParams?: string;
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

export class GetIntelligentStrategyResponseBody extends $dara.Model {
  intelligentStrategy?: GetIntelligentStrategyResponseBodyIntelligentStrategy;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      intelligentStrategy: 'IntelligentStrategy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intelligentStrategy: GetIntelligentStrategyResponseBodyIntelligentStrategy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.intelligentStrategy && typeof (this.intelligentStrategy as any).validate === 'function') {
      (this.intelligentStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

