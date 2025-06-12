// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileModerationResultResponseBodyDataPageResultImageResultLocation extends $dara.Model {
  /**
   * @remarks
   * The H value of the coordinate point.
   * 
   * @example
   * 44
   */
  h?: number;
  /**
   * @remarks
   * The W value of the coordinate point.
   * 
   * @example
   * 33
   */
  w?: number;
  /**
   * @remarks
   * The X value of the coordinate point.
   * 
   * @example
   * 11
   */
  x?: number;
  /**
   * @remarks
   * The Y value of the coordinate point.
   * 
   * @example
   * 22
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
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

