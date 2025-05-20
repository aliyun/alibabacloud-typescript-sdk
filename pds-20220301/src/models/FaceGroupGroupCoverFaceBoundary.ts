// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGroupGroupCoverFaceBoundary extends $dara.Model {
  /**
   * @example
   * 300
   */
  height?: number;
  /**
   * @example
   * 10
   */
  left?: number;
  /**
   * @example
   * 30
   */
  top?: number;
  /**
   * @example
   * 200
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

