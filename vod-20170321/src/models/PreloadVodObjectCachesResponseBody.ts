// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadVodObjectCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task ID returned for the prefetch operation. Multiple task IDs are separated by commas (,).
   * 
   * @example
   * 9524****
   */
  preloadTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5BD4B50-7A02-493A-*****-97B9024B4135
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preloadTaskId: 'PreloadTaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preloadTaskId: 'string',
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

