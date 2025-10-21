// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterAccountRequest extends $dara.Model {
  /**
   * @example
   * "user api register"
   */
  memo?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      memo: 'Memo',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memo: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

