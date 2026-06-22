// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageImageRegistryResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The blacklist.
   * 
   * @example
   * 129.211.XXX.XXX
   */
  blackList?: string;
  /**
   * @remarks
   * The domain name of the repository.
   * 
   * @example
   * sinochem.com
   */
  domainName?: string;
  /**
   * @remarks
   * The creation time, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-08-30 10:23:30
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time, in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-09-30 10:23:30
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the image repository.
   * 
   * @example
   * 1078312
   */
  id?: number;
  /**
   * @remarks
   * The number of images in the repository.
   * 
   * @example
   * 1
   */
  imageCount?: number;
  /**
   * @remarks
   * The Jenkins environment context.
   * 
   * @example
   * projectInfo
   */
  jenkinsEnv?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * - **1**: public network
   * - **2**: VPC.
   * 
   * @example
   * 1
   */
  netType?: number;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * Harbor******
   */
  password?: string;
  /**
   * @remarks
   * The number of days that assets are retained.
   * 
   * @example
   * 30
   */
  persistenceDay?: number;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - **1**: HTTP
   * - **2**: HTTPS.
   * 
   * @example
   * 1
   */
  protocolType?: number;
  /**
   * @remarks
   * The region ID of the repository.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address of the repository.
   * 
   * @example
   * 39.104.XXX.XXX
   */
  registryHostIp?: string;
  /**
   * @remarks
   * The alias of the image repository.
   * 
   * @example
   * test1
   */
  registryName?: string;
  /**
   * @remarks
   * The image repository type. Valid values:
   * 
   * - **acr**: ACR
   * - **harbor**: Harbor
   * - **quay**: Quay
   * - **CI/CD**: Jenkins.
   * 
   * @example
   * harbor
   */
  registryType?: string;
  /**
   * @remarks
   * The authentication token of the user.
   * 
   * @example
   * c7b90d29-632f-4e58-88b8-00ad77f6****
   */
  token?: string;
  /**
   * @remarks
   * The number of scan tasks per hour.
   * 
   * @example
   * 30
   */
  transPerHour?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * RegistryUser
   */
  userName?: string;
  /**
   * @remarks
   * The instance ID of the VPC.
   * 
   * @example
   * vpc-5gu8iu68w9b472jbb****
   */
  vpcId?: string;
  /**
   * @remarks
   * The whitelist.
   * 
   * @example
   * 192.168.XXX.XXX
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      blackList: 'BlackList',
      domainName: 'DomainName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      imageCount: 'ImageCount',
      jenkinsEnv: 'JenkinsEnv',
      netType: 'NetType',
      password: 'Password',
      persistenceDay: 'PersistenceDay',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      registryHostIp: 'RegistryHostIp',
      registryName: 'RegistryName',
      registryType: 'RegistryType',
      token: 'Token',
      transPerHour: 'TransPerHour',
      userName: 'UserName',
      vpcId: 'VpcId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: 'string',
      domainName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      imageCount: 'number',
      jenkinsEnv: 'string',
      netType: 'number',
      password: 'string',
      persistenceDay: 'number',
      protocolType: 'number',
      regionId: 'string',
      registryHostIp: 'string',
      registryName: 'string',
      registryType: 'string',
      token: 'string',
      transPerHour: 'number',
      userName: 'string',
      vpcId: 'string',
      whiteList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageImageRegistryResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageImageRegistryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image repository list data.
   */
  list?: PageImageRegistryResponseBodyList[];
  /**
   * @remarks
   * The pagination information for the paged query.
   */
  pageInfo?: PageImageRegistryResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. The ID is a unique identifier that Alibaba Cloud generates for the request and can be used to troubleshoot issues.
   * 
   * @example
   * FDA9E37C-6114-5945-8FF1-E3D4D397****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': PageImageRegistryResponseBodyList },
      pageInfo: PageImageRegistryResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

