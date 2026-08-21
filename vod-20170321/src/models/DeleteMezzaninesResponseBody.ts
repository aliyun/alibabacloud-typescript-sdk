// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMezzaninesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom IDs that do not exist.
   */
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The list of audio or video IDs that do not exist.
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
  /**
   * @remarks
   * The list of audio or video IDs that cannot be deleted.
   * 
   * > This is typically because the source file is used as the original stream (if the video transcoding pattern is no transcoding or asynchronous transcoding, the source file is used as the original stream for playback and cannot be deleted by default) or because of insufficient [permissions](https://help.aliyun.com/document_detail/113600.html).
   */
  unRemoveableVideoIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nonExistReferenceIds: 'NonExistReferenceIds',
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
      unRemoveableVideoIds: 'UnRemoveableVideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistReferenceIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      unRemoveableVideoIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nonExistReferenceIds)) {
      $dara.Model.validateArray(this.nonExistReferenceIds);
    }
    if(Array.isArray(this.nonExistVideoIds)) {
      $dara.Model.validateArray(this.nonExistVideoIds);
    }
    if(Array.isArray(this.unRemoveableVideoIds)) {
      $dara.Model.validateArray(this.unRemoveableVideoIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

