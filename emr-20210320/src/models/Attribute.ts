// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Attribute extends $dara.Model {
  /**
   * @remarks
   * 键。
   * 
   * @example
   * currentYarnRangerPluginState
   */
  key?: string;
  /**
   * @remarks
   * 值。
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

