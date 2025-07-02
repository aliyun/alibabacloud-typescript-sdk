// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Trigger } from "./Trigger";


export class ListTriggersOutput extends $dara.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  triggers?: Trigger[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      triggers: 'triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      triggers: { 'type': 'array', 'itemType': Trigger },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

