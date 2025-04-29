// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyImageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image copy.
   * 
   * @example
   * m-bp1h46wfpjsjastd****
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
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

