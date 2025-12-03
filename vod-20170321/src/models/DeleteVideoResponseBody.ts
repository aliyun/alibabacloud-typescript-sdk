// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the videos that cannot be deleted.
   * > Generally, videos cannot be deleted if you do not have the required [permissions](https://help.aliyun.com/document_detail/113600.html).
   */
  forbiddenVideoIds?: string[];
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The IDs of the videos that do not exist.
   * > If the list of videos to be deleted contains one or more videos that do not exist, the IDs of these non-existing videos are returned. If none of the videos in the list exists, a 404 error is returned.
   */
  nonExistVideoIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E4EBD2BF-5EB0-4476-8829-9D94E1B1****
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

