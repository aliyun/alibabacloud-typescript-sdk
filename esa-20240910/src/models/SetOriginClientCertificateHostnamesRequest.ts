// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetOriginClientCertificateHostnamesRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to associate.
   * 
   * This parameter is required.
   */
  hostnames?: string[];
  /**
   * @remarks
   * The certificate ID.
   * 
   * This parameter is required.
   * 
   * @example
   * babaabcd****
   */
  id?: string;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      hostnames: 'Hostnames',
      id: 'Id',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnames: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

