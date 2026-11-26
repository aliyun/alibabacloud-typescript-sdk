// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDeviceBelongIdentifiersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the records actually added in the batch, returned in the input order of the added items. Skipped duplicates are not included in the array. An empty list is returned if no records are added in the batch.
   */
  identifierIds?: string[];
  /**
   * @remarks
   * The request ID. You can use this ID to locate the API call.
   * 
   * @example
   * 7A92B549-EC82-5F79-8301-63711AFC9DCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      identifierIds: 'IdentifierIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifierIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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

