// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVirtualNodeRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the virtual node.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the virtual node.
   * 
   * @example
   * test
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

