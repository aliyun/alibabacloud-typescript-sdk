// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateImageProtocolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images whose protocols failed to be updated.
   */
  failedIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D4E5AF5-DF28-5FE7-85C7-9F98315B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedIds: 'FailedIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedIds)) {
      $dara.Model.validateArray(this.failedIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

