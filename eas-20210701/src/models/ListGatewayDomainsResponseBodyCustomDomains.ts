// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayDomainsResponseBodyCustomDomains extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate bound to the domain name. Obtain the certificate ID after you upload or purchase a certificate in the [Certificate Management Service](https://yundunnext.console.aliyun.com/?spm=5176.2020520163.console-base_help.2.4b3baJixaJixOc\\&p=cas) console.
   * 
   * @example
   * 1473**25
   */
  certificateId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type.
   * 
   * Valid value:
   * 
   * *   intranet: internal network.
   * *   internet: public network.
   * 
   * @example
   * intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

