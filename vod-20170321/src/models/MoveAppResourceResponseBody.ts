// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveAppResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the resources that failed to be migrated.
   */
  failedResourceIds?: string[];
  /**
   * @remarks
   * The IDs of the resources that were not found.
   */
  nonExistResourceIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failedResourceIds: 'FailedResourceIds',
      nonExistResourceIds: 'NonExistResourceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedResourceIds: { 'type': 'array', 'itemType': 'string' },
      nonExistResourceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.failedResourceIds)) {
      $dara.Model.validateArray(this.failedResourceIds);
    }
    if(Array.isArray(this.nonExistResourceIds)) {
      $dara.Model.validateArray(this.nonExistResourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

