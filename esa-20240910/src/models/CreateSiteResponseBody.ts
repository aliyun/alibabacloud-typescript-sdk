// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of name servers assigned to the site. This parameter is returned only if the site uses NS-based access. To activate the site, you must change your domain\\"s DNS servers to these name servers. This verifies your ownership of the site and activates it.
   * 
   * @example
   * ns1.example.com,ns2.example.com
   */
  nameServerList?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the site.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The verification code for the site. This parameter is returned only if the site uses CNAME-based access. To activate the site, you must add a TXT record to your domain\\"s DNS settings. Set the record\\"s host to **_esaauth.[your_site_name]** and its value to this **verification code**. This verifies your ownership of the site and activates it.
   * 
   * @example
   * verify_aah9dioasmov****
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      nameServerList: 'NameServerList',
      requestId: 'RequestId',
      siteId: 'SiteId',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameServerList: 'string',
      requestId: 'string',
      siteId: 'number',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

