// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContentItemExtInfoPos extends $dara.Model {
  /**
   * @example
   * 1
   */
  x?: number;
  /**
   * @example
   * 2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

