// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateManagedTransformRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add the visitor geolocation header. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  addClientGeolocationHeader?: string;
  /**
   * @remarks
   * Specifies whether to add the ali-real-client-ip header that contains the real client IP address. Valid values:
   * - on: Enabled.
   * - off: Disabled.
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * The name of the real client IP address header. The name must start with a letter and can contain digits and hyphens (-).
   * 
   * @example
   * test-header
   */
  realClientIpHeaderName?: string;
  /**
   * @remarks
   * The ID of the site. You can obtain the ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site. For sites with version management enabled, you can use this parameter to specify the site version to which the configuration applies. Default value: 0.
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

