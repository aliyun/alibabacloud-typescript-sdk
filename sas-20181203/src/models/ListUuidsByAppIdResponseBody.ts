// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUuidsByAppIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8E****
   */
  requestId?: string;
  /**
   * @remarks
   * The UUIDs of SAE instances.
   */
  uuids?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      requestId: 'RequestId',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      requestId: 'string',
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

