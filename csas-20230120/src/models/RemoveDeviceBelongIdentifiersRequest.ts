// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDeviceBelongIdentifiersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  identifierIds?: string[];
  static names(): { [key: string]: string } {
    return {
      identifierIds: 'IdentifierIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifierIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.identifierIds)) {
      $dara.Model.validateArray(this.identifierIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

