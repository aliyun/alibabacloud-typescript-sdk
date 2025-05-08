// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the SDGs that you want to delete.
   * 
   * This parameter is required.
   */
  SDGId?: string[];
  static names(): { [key: string]: string } {
    return {
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SDGId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.SDGId)) {
      $dara.Model.validateArray(this.SDGId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

