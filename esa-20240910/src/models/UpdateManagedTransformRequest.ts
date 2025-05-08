// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateManagedTransformRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to include the header that indicates the geographical location of a client in an origin request. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  addClientGeolocationHeader?: string;
  /**
   * @remarks
   * Specifies whether to include the "ali-real-client-ip" header that indicates the client\\"s real IP address in an origin request. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  addRealClientIpHeader?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the website. You can use this parameter to specify a version of your website to apply the feature settings. By default, version 0 is used.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      addClientGeolocationHeader: 'AddClientGeolocationHeader',
      addRealClientIpHeader: 'AddRealClientIpHeader',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addClientGeolocationHeader: 'string',
      addRealClientIpHeader: 'string',
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

