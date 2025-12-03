// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVideoInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the videos that cannot be modified. Generally, videos cannot be modified if you do not have required [permissions](https://help.aliyun.com/document_detail/113600.html).
   */
  forbiddenVideoIds?: string[];
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The IDs of the videos that do not exist.
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

