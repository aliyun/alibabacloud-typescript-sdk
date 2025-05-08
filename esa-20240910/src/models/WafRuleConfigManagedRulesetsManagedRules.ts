// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleConfigManagedRulesetsManagedRules extends $dara.Model {
  action?: string;
  id?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

