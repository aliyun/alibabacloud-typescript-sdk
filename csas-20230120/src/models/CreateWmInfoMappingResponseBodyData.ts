// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWmInfoMappingResponseBodyData extends $dara.Model {
  /**
   * @example
   * 123***
   */
  wmInfoUint?: number;
  static names(): { [key: string]: string } {
    return {
      wmInfoUint: 'WmInfoUint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wmInfoUint: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

