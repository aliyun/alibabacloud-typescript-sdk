// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConcurrencyConfig } from "./ConcurrencyConfig";


export class ListConcurrencyConfigsOutput extends $dara.Model {
  configs?: ConcurrencyConfig[];
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ConcurrencyConfig },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

