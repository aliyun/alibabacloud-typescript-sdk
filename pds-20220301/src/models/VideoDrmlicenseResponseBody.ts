// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoDRMLicenseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned DRM license.
   * 
   * @example
   * cb9swCy8P50H9KePsxET3jZ1tm41bDs9HTsxbWnsjf3bsf6QGdiS4kZPhDaskimbNyAfNjmhQRmWFt3AhwNF3
   */
  data?: string;
  /**
   * @remarks
   * The information about the device from which the DRM request was initiated.
   * 
   * @example
   * ""
   */
  deviceInfo?: string;
  /**
   * @remarks
   * The request state returned by the DRM server.
   * 
   * @example
   * 0
   */
  states?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      deviceInfo: 'device_info',
      states: 'states',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      deviceInfo: 'string',
      states: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

