// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryAgAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pkList?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pkList: 'PkList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pkList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

