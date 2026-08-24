// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVirusScanAdditionalListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IDs for the newly added entries. The order is consistent with AdditionalLists in the request.
   */
  listIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D7EC0AF-DB2A-5D9C-90EC-F090A6BAAEA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      listIds: 'ListIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.listIds)) {
      $dara.Model.validateArray(this.listIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

