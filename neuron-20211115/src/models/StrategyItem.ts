// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StrategyItem extends $dara.Model {
  action?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

