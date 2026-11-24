// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVirusScanAdditionalListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the added list entries. The order of the IDs is the same as the order of the entries in the AdditionalLists parameter of the request.
   */
  listIds?: string[];
  /**
   * @remarks
   * The ID of the request.
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

