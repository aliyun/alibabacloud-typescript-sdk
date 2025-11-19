// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewPortConfiguration extends $dara.Model {
  /**
   * @remarks
   * 视口高度（像素）
   * 
   * This parameter is required.
   */
  height?: number;
  /**
   * @remarks
   * 视口宽度（像素）
   * 
   * This parameter is required.
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'height',
      width: 'width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
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

