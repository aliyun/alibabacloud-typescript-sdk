// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequest extends $dara.Model {
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
   * 30
   */
  shortTtl?: number;
  static names(): { [key: string]: string } {
    return {
      longTtl: 'longTtl',
      shortTtl: 'shortTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      longTtl: 'number',
      shortTtl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

