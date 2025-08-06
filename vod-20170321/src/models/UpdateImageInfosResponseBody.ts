// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateImageInfosResponseBodyNonExistImageIds extends $dara.Model {
  imageId?: string[];
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.imageId)) {
      $dara.Model.validateArray(this.imageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateImageInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images that do not exist.
   */
  nonExistImageIds?: UpdateImageInfosResponseBodyNonExistImageIds;
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
      nonExistImageIds: 'NonExistImageIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistImageIds: UpdateImageInfosResponseBodyNonExistImageIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nonExistImageIds && typeof (this.nonExistImageIds as any).validate === 'function') {
      (this.nonExistImageIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

