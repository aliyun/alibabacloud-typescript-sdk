// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttachedMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the auxiliary media assets that do not exist.
   */
  nonExistMediaIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4DF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nonExistMediaIds)) {
      $dara.Model.validateArray(this.nonExistMediaIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

