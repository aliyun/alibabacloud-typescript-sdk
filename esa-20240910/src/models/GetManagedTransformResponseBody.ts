// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedTransformResponseBody extends $dara.Model {
  /**
   * @remarks
   * Add visitor geolocation header. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  addClientGeolocationHeader?: string;
  /**
   * @remarks
   * Add the "ali-real-client-ip" header containing the real client IP. Value range:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The version number of the site. For sites with version management enabled, this parameter can be used to specify the site version for which the configuration takes effect, defaulting to version 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      addClientGeolocationHeader: 'AddClientGeolocationHeader',
      addRealClientIpHeader: 'AddRealClientIpHeader',
      requestId: 'RequestId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addClientGeolocationHeader: 'string',
      addRealClientIpHeader: 'string',
      requestId: 'string',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

