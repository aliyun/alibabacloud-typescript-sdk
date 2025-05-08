// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleConfigActionsResponse extends $dara.Model {
  code?: number;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

