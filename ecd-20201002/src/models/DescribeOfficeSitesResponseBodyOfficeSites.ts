// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfficeSitesResponseBodyOfficeSites extends $dara.Model {
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

