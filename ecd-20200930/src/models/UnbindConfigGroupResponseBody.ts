// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindConfigGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the configuration groups.
   */
  groupIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD0FF13D-FC7D-56AD-934F-91C8487*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

