// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveDeviceBelongIdentifiersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of identifier record IDs to remove. You can specify 1 to 1,000 IDs per batch. All IDs must exist and belong to the current tenant. Otherwise, an InvalidParameter error is returned and no records are deleted.
   * 
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

