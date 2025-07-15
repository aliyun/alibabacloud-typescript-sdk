// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteImagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IDs of the images that failed to be deleted.
   */
  failDeleteImageIds?: string[];
  /**
   * @remarks
   * The IDs of the images that are successfully deleted.
   */
  successDeleteImageIds?: string[];
  static names(): { [key: string]: string } {
    return {
      failDeleteImageIds: 'FailDeleteImageIds',
      successDeleteImageIds: 'SuccessDeleteImageIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
      successDeleteImageIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failDeleteImageIds)) {
      $dara.Model.validateArray(this.failDeleteImageIds);
    }
    if(Array.isArray(this.successDeleteImageIds)) {
      $dara.Model.validateArray(this.successDeleteImageIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The images.
   */
  data?: DeleteImagesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4610632D-D661-5982-B3D7-5D3FD183F595
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteImagesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

