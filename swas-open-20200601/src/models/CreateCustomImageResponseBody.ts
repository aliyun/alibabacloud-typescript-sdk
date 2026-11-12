// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * @example
   * m-csaascsaccscs****
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
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

