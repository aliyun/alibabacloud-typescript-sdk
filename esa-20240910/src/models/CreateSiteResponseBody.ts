// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of NS records assigned to the site, separated by commas (,). This field has a value when the access type of the site is NS. You must change the DNS servers of the site to these NS records. Then you can verify the site ownership and activate the site.
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
   * The site ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The verification code of the site. When the access type of the site is CNAME, you must add a TXT record to the DNS server of the site with the record name **_esaauth.[site name]** and the record value set to the **verification code**. Then you can verify the site ownership and activate the site.
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

