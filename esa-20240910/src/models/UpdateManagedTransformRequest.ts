// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateManagedTransformRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add a header that contains visitor geolocation information. Valid values:
   * 
   * - `on`: Add the header.
   * 
   * - `off`: Do not add the header.
   * 
   * @example
   * on
   */
  addClientGeolocationHeader?: string;
  /**
   * @remarks
   * Specifies whether to add the `ali-real-client-ip` header, which contains the real client IP. Valid values:
   * 
   * - `on`: Add the header.
   * 
   * - `off`: Do not add the header.
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * The name of the header that contains the real client IP. The name must start with a letter and can contain letters, digits (0-9), and hyphens (-).
   * 
   * @example
   * test-header
   */
  realClientIpHeaderName?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version of the site. For sites with version management enabled, this parameter specifies the version to which the configuration applies. Default value: 0.
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
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addClientGeolocationHeader: 'string',
      addRealClientIpHeader: 'string',
      realClientIpHeaderName: 'string',
      siteId: 'number',
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

