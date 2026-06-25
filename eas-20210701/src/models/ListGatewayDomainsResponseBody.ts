// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayDomainsResponseBodyCustomDomains extends $dara.Model {
  /**
   * @remarks
   * The expiration date of the certificate.
   * 
   * @example
   * 2023-10-25
   */
  certificateEndDate?: string;
  /**
   * @remarks
   * The ID of the SSL certificate attached to the domain name. To obtain the certificate ID, upload or purchase a certificate in the [Digital Certificate Management Service](https://yundunnext.console.aliyun.com/?spm=5176.2020520163.console-base_help.2.4b3baJixaJixOc\\&p=cas) console.
   * 
   * @example
   * 1473**25
   */
  certificateId?: string;
  /**
   * @remarks
   * The name of the SSL certificate.
   * 
   * @example
   * cert-9955038
   */
  certificateName?: string;
  /**
   * @remarks
   * The issuance date of the certificate.
   * 
   * @example
   * 2018-07-13
   */
  certificateStartDate?: string;
  /**
   * @remarks
   * The status of the domain name.
   * 
   * @example
   * Succeeded
   */
  certificateStatus?: string;
  /**
   * @remarks
   * The time when the domain name was created.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
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
   * The type of the domain name.
   * 
   * @example
   * intranet
   */
  type?: string;
  /**
   * @remarks
   * The time when the domain name was last updated.
   * 
   * @example
   * 2021-05-19T14:19:42Z
   */
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
   * The list of custom domain names.
   */
  customDomains?: ListGatewayDomainsResponseBodyCustomDomains[];
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * Successfully get custom domains
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

