// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequest extends $dara.Model {
  /**
   * @example
   * 365
   */
  longTtl?: number;
  /**
   * @example
   * 30
   */
  shortTtl?: number;
  strategy?: string[];
  static names(): { [key: string]: string } {
    return {
      longTtl: 'longTtl',
      shortTtl: 'shortTtl',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTtl: 'number',
      shortTtl: 'number',
      strategy: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.strategy)) {
      $dara.Model.validateArray(this.strategy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

