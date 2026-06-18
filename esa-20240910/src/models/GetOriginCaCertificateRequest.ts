// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * babaabcd****
   */
  id?: string;
  /**
   * @remarks
   * The ID of the site. Call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API to get this value.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
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

