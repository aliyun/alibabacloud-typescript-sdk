// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductExtendProperty extends $dara.Model {
  /**
   * @example
   * ss_picture_scene
   */
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

