// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoDRMLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * The type of DRM encryption.
   * 
   * Valid values:
   * 
   * *   fairplay
   * *   widevine
   * 
   * This parameter is required.
   * 
   * @example
   * widevine
   */
  drmType?: string;
  /**
   * @remarks
   * The request that is initiated to obtain the license.
   * 
   * @example
   * CAES6B8SQgpACioSENGxDhqCLIVwwCBOyPayyWoSENGxDhqCLIVwwCBOyPayyWpI88aJmwYQARoQdRV32
   */
  licenseRequest?: string;
  static names(): { [key: string]: string } {
    return {
      drmType: 'drmType',
      licenseRequest: 'licenseRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drmType: 'string',
      licenseRequest: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

