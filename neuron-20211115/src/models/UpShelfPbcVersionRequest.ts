// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpShelfPbcVersionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  marketId?: number;
  static names(): { [key: string]: string } {
    return {
      marketId: 'marketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

