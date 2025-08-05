// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupClientResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of HBR clients. The value can be a JSON array that consists of up to 100 client IDs. Separate the IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["c-0007kyu045r0********", "c-000b6818umvo********"]
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

