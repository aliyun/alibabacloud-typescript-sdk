// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFpShotDBResponseBodyFpShotDBList } from "./ListFpShotDbresponseBodyFpShotDblist";
import { ListFpShotDBResponseBodyNonExistIds } from "./ListFpShotDbresponseBodyNonExistIds";


export class ListFpShotDBResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media fingerprint libraries.
   */
  fpShotDBList?: ListFpShotDBResponseBodyFpShotDBList;
  /**
   * @remarks
   * The IDs of the media fingerprint libraries that do not exist.
   */
  nonExistIds?: ListFpShotDBResponseBodyNonExistIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotDBList: 'FpShotDBList',
      nonExistIds: 'NonExistIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotDBList: ListFpShotDBResponseBodyFpShotDBList,
      nonExistIds: ListFpShotDBResponseBodyNonExistIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotDBList && typeof (this.fpShotDBList as any).validate === 'function') {
      (this.fpShotDBList as any).validate();
    }
    if(this.nonExistIds && typeof (this.nonExistIds as any).validate === 'function') {
      (this.nonExistIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

