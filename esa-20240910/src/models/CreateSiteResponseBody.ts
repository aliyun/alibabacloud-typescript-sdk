// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nameservers assigned by ESA. The values are separated by commas (,). This parameter is returned if you set AccessType to NS. In this case, you must change the nameservers of your domain to the assigned ones. Then, you can verify the domain ownership and activate your website.
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
   * The website ID.
   * 
   * @example
   * 1234567890123
   */
  siteId?: number;
  /**
   * @remarks
   * The verification code for the website. If you set AccessType to CNAME, you need to add a TXT record whose hostname is **_esaauth.[websiteDomainName]** and record value is the value of VerifyCode to the DNS records of your domain. ****Then, you can verify the domain ownership and activate your website.
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

