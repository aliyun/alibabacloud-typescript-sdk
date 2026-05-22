// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWafRulesetResponseBody extends $dara.Model {
  id?: number;
  requestId?: string;
  ruleIds?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
      ruleIds: 'RuleIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      ruleIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

