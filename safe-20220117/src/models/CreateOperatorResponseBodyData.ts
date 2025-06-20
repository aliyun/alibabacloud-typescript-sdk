// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOperatorResponseBodyData extends $dara.Model {
  approveStrategyId?: number;
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      approveStrategyId: 'ApproveStrategyId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveStrategyId: 'number',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

