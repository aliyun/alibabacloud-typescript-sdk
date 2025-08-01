// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayDomainsResponseBodyCustomDomains extends $dara.Model {
  certificateEndDate?: string;
  /**
   * @remarks
   * The ID of the SSL certificate bound to the domain name. Obtain the certificate ID after you upload or purchase a certificate in the [Certificate Management Service](https://yundunnext.console.aliyun.com/?spm=5176.2020520163.console-base_help.2.4b3baJixaJixOc\\&p=cas) console.
   * 
   * @example
   * 1473**25
   */
  certificateId?: string;
  certificateName?: string;
  certificateStartDate?: string;
  certificateStatus?: string;
  createTime?: string;
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
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      certificateEndDate: 'CertificateEndDate',
      certificateId: 'CertificateId',
      certificateName: 'CertificateName',
      certificateStartDate: 'CertificateStartDate',
      certificateStatus: 'CertificateStatus',
      createTime: 'CreateTime',
      domain: 'Domain',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateEndDate: 'string',
      certificateId: 'string',
      certificateName: 'string',
      certificateStartDate: 'string',
      certificateStatus: 'string',
      createTime: 'string',
      domain: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom domain names.
   */
  customDomains?: ListGatewayDomainsResponseBodyCustomDomains[];
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successfully get custom domains
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'CustomDomains',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': ListGatewayDomainsResponseBodyCustomDomains },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

