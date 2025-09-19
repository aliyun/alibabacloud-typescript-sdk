// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallAegisForLingjunRequest extends $dara.Model {
  /**
   * @remarks
   * List of unique UUIDs for Lingjun bare metal.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

