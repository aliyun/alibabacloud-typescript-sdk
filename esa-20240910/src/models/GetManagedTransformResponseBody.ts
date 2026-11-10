// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedTransformResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the visitor geolocation header is added. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  addClientGeolocationHeader?: string;
  /**
   * @remarks
   * Indicates whether the ali-real-client-ip header containing the real client IP address is added. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * The name of the real client IP address header.
   * 
   * @example
   * test-header
   */
  realClientIpHeaderName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The site version number. For sites with version management enabled, you can use this parameter to specify the site version to which the configuration applies. Default value: 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      addClientGeolocationHeader: 'AddClientGeolocationHeader',
      addRealClientIpHeader: 'AddRealClientIpHeader',
      realClientIpHeaderName: 'RealClientIpHeaderName',
      requestId: 'RequestId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addClientGeolocationHeader: 'string',
      addRealClientIpHeader: 'string',
      realClientIpHeaderName: 'string',
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

