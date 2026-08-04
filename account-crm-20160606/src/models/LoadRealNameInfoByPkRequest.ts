// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LoadRealNameInfoByPkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  PK?: string;
  static names(): { [key: string]: string } {
    return {
      PK: 'PK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PK: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

