// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupClientResourceRequest extends $dara.Model {
  /**
   * @remarks
   * A list of client IDs. The list can contain up to 100 client IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIds?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clientIds: 'ClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.clientIds) {
      $dara.Model.validateMap(this.clientIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

