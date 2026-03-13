// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Action extends $dara.Model {
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

