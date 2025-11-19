// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 365
   */
  longTtl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-memory
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  shortTtl?: number;
  /**
   * @example
   * [\"Preference\", \"Facts\"]
   */
  strategy?: string[];
  static names(): { [key: string]: string } {
    return {
      longTtl: 'longTtl',
      name: 'name',
      shortTtl: 'shortTtl',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTtl: 'number',
      name: 'string',
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

