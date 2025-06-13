// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupStickySession extends $dara.Model {
  enabled?: boolean;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

