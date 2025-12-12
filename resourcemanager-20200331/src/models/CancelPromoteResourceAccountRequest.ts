// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPromoteResourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 06950264-3f0d-4ca9-82dd-6ee7a3d33d6b
   */
  recordId?: string;
  static names(): { [key: string]: string } {
    return {
      recordId: 'RecordId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      recordId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

