// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMezzaninesResponseBody extends $dara.Model {
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The IDs of the audio or video files that do not exist.
   */
  nonExistVideoIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the audio or video files whose source files cannot be deleted.
   * 
   * >  In most cases, source files cannot be deleted if they are used for original-quality playback or you do not have required permissions to delete them. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
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

