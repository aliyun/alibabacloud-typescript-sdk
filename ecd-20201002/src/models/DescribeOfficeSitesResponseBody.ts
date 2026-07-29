// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesResponseBodyOfficeSites extends $dara.Model {
  /**
   * @remarks
   * aliuid
   * 
   * @example
   * 125552
   */
  aliUid?: number;
  /**
   * @remarks
   * biztype
   * 
   * @example
   * ENTERPRISE
   */
  bizType?: number;
  /**
   * @remarks
   * The allowed connection types for accessing the office network.
   * 
   * > The VPC connection type depends on the Alibaba Cloud PrivateLink service, which incurs no fee. When this parameter is set to VPC or Any, the system automatically enables the PrivateLink service for you.
   * 
   * @example
   * VPC
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The endpoint used when connecting to cloud desktops through a VPC.
   * 
   * @example
   * http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com
   */
  desktopVpcEndpoint?: string;
  /**
   * @remarks
   * Office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of account system used by the office network.
   * 
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @remarks
   * User Account BID.
   * 
   * @example
   * 268****
   */
  providerId?: string;
  /**
   * @remarks
   * SSO connection.
   * 
   * @example
   * https://eds-cn-shanghai-67****
   */
  ssoServiceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      bizType: 'BizType',
      desktopAccessType: 'DesktopAccessType',
      desktopVpcEndpoint: 'DesktopVpcEndpoint',
      officeSiteId: 'OfficeSiteId',
      officeSiteType: 'OfficeSiteType',
      providerId: 'ProviderId',
      ssoServiceUrl: 'SsoServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      bizType: 'number',
      desktopAccessType: 'string',
      desktopVpcEndpoint: 'string',
      officeSiteId: 'string',
      officeSiteType: 'string',
      providerId: 'string',
      ssoServiceUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOfficeSitesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The office networks.
   */
  officeSites?: DescribeOfficeSitesResponseBodyOfficeSites[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeSites: 'OfficeSites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSites: { 'type': 'array', 'itemType': DescribeOfficeSitesResponseBodyOfficeSites },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSites)) {
      $dara.Model.validateArray(this.officeSites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

