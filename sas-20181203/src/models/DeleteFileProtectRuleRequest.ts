// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileProtectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the core file monitoring rules that you want to delete.
   */
  id?: number[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.id)) {
      $dara.Model.validateArray(this.id);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

