// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScanFileInputConfig extends $dara.Model {
  /**
   * @remarks
   * The automatic trim.
   * 
   * @example
   * true
   */
  autoCrop?: string;
  /**
   * @remarks
   * The automatic rotation.
   * 
   * @example
   * true
   */
  autoRotate?: string;
  static names(): { [key: string]: string } {
    return {
      autoCrop: 'autoCrop',
      autoRotate: 'autoRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCrop: 'string',
      autoRotate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

