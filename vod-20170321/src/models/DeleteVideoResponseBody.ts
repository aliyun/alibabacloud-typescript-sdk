// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of video IDs for which the operation is forbidden.
   * 
   * > This is typically caused by insufficient [permissions](https://help.aliyun.com/document_detail/113600.html).
   */
  forbiddenVideoIds?: string[];
  /**
   * @remarks
   * The list of custom IDs that do not exist.
   */
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The list of video IDs that do not exist.
   */
  nonExistVideoIds?: string[];
  /**
   * @remarks
   * The request ID.
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

