// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedTransformResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a header that contains the visitor\\"s geolocation is added. Valid values:
   * 
   * - on: Enables this feature.
   * 
   * - off: Disables this feature.
   * 
   * @example
   * on
   */
  addClientGeolocationHeader?: string;
  /**
   * @remarks
   * Indicates whether the "ali-real-client-ip" header is added to include the real client IP. Valid values:
   * 
   * - on: Enables this feature.
   * 
   * - off: Disables this feature.
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * The real client IP header name.
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
   * The version of the site for which the configuration is returned.
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

