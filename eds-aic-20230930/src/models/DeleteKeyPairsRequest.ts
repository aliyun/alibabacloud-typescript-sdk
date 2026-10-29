// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteKeyPairsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of key pair IDs.
   */
  keyPairIds?: string[];
  static names(): { [key: string]: string } {
    return {
      keyPairIds: 'KeyPairIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyPairIds)) {
      $dara.Model.validateArray(this.keyPairIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

