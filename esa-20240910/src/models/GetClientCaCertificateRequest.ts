// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. You can get this ID by calling the [ListClientCaCertificates](https://help.aliyun.com/document_detail/2860651.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * babab9db65ee5efcca9f3d41d4b5****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the site. You can get this ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

