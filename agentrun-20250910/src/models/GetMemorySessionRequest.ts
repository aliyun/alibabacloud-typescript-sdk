// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMemorySessionRequest extends $dara.Model {
  /**
   * @example
   * 1736558346
   */
  from?: number;
  /**
   * @example
   * 20
   */
  size?: number;
  /**
   * @example
   * 1736561898
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      size: 'size',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      size: 'number',
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

