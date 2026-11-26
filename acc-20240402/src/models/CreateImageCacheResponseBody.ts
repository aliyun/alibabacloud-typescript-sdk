// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0E234675-3465-4CC3-9D0F-9A864BC*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageCacheId: 'ImageCacheId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCacheId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

