// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the canceled O\\&M events. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 1508850,1508310,1507849,1506274,1505811
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55A2504F-xxxx-xxxx-xxxx-C7C5E57350A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

