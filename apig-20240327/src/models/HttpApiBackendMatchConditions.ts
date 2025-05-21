// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiBackendMatchCondition } from "./HttpApiBackendMatchCondition";


export class HttpApiBackendMatchConditions extends $dara.Model {
  conditions?: HttpApiBackendMatchCondition[];
  /**
   * @example
   * true
   */
  default?: boolean;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      default: 'default',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': HttpApiBackendMatchCondition },
      default: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

