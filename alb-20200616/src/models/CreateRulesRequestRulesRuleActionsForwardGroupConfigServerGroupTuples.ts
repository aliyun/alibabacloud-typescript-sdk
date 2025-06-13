// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRulesRequestRulesRuleActionsForwardGroupConfigServerGroupTuples extends $dara.Model {
  serverGroupId?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      serverGroupId: 'ServerGroupId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

