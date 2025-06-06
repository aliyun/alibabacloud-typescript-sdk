// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ServiceChanges extends $dara.Model {
  /**
   * @example
   * {}: 不进行修改
   */
  merge?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      merge: 'merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.merge) {
      $dara.Model.validateMap(this.merge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

