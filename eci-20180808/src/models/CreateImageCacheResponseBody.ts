// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the intermediate elastic container instance that is used to create the image cache.
   * 
   * @example
   * eci-2zebxkiifuyzzlhl****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * @example
   * imc-2zebxkiifuyzzlhl****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0E234675-3465-4CC3-9D0F-9A864BC391DD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      imageCacheId: 'ImageCacheId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
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

