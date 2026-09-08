// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressSync extends $dara.Model {
  /**
   * @remarks
   * The parameter synchronization duration in seconds. This property has a value only when State is end.
   * 
   * @example
   * 1.5
   */
  cost?: number;
  /**
   * @remarks
   * begin / end
   * 
   * @example
   * end
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'Cost',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

