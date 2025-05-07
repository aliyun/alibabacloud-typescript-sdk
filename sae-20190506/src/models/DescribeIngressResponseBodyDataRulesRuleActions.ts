// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIngressResponseBodyDataRulesRuleActions extends $dara.Model {
  actionConfig?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      actionConfig: 'ActionConfig',
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionConfig: 'string',
      actionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

