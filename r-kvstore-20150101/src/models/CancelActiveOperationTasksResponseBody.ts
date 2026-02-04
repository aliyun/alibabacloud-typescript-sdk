// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of O\\&M events that are canceled at a time. Separate multiple IDs with commas (,).
   * 
   * @example
   * 1508850,1508310,1507849,1506274
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F16A51B0-436E-5B84-8326-A18AA150D1C4
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

