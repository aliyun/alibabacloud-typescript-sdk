// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntelligentStrategyResponseBody extends $dara.Model {
  requestId?: string;
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

