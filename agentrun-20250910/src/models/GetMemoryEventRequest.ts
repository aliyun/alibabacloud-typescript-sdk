// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemoryEventRequest extends $dara.Model {
  /**
   * @example
   * 1758273080
   */
  from?: number;
  /**
   * @example
   * 1758273680
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

