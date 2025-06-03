// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartStreamingOutShrinkRequestBgColor extends $dara.Model {
  /**
   * @example
   * 255
   */
  b?: number;
  /**
   * @example
   * 255
   */
  g?: number;
  /**
   * @example
   * 255
   */
  r?: number;
  static names(): { [key: string]: string } {
    return {
      b: 'B',
      g: 'G',
      r: 'R',
    };
  }

  static types(): { [key: string]: any } {
    return {
      b: 'number',
      g: 'number',
      r: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

