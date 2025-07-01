// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowSubTaskRequestCondition extends $dara.Model {
  /**
   * @remarks
   * The modification time. The value must be a UNIX timestamp. Unit: ns.
   * 
   * @example
   * 1725897600000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 68
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

