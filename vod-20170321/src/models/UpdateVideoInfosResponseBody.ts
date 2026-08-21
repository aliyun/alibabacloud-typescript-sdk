// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the audio and video files that cannot be operated on. This is typically caused by insufficient [permissions](https://help.aliyun.com/document_detail/113600.html).
   */
  forbiddenVideoIds?: string[];
  /**
   * @remarks
   * The list of custom IDs that do not exist.
   */
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The IDs of the audio and video files that do not exist.
   */
  nonExistVideoIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenVideoIds: 'ForbiddenVideoIds',
      nonExistReferenceIds: 'NonExistReferenceIds',
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenVideoIds: { 'type': 'array', 'itemType': 'string' },
      nonExistReferenceIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenVideoIds)) {
      $dara.Model.validateArray(this.forbiddenVideoIds);
    }
    if(Array.isArray(this.nonExistReferenceIds)) {
      $dara.Model.validateArray(this.nonExistReferenceIds);
    }
    if(Array.isArray(this.nonExistVideoIds)) {
      $dara.Model.validateArray(this.nonExistVideoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

