// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The O&M task IDs. Multiple IDs are separated by commas (,).
   * 
   * @example
   * 11111,22222
   */
  ids?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE4F6C34-065F-45AA-F5BN-4B8D816F6305
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

