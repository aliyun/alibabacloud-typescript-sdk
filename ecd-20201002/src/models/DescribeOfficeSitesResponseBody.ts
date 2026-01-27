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
   * @example
   * VPC
   */
  desktopAccessType?: string;
  /**
   * @example
   * http://ep-bp1s2vmbj55r5rzc****.epsrv-bp1pcfhpwvlpny01****.cn-hangzhou.privatelink.aliyuncs.com
   */
  desktopVpcEndpoint?: string;
  /**
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @example
   * SIMPLE
   */
  officeSiteType?: string;
  /**
   * @example
   * 268****
   */
  providerId?: string;
  /**
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

