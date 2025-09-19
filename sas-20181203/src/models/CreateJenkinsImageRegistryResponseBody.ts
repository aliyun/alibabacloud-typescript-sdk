// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJenkinsImageRegistryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The blacklist.
   * 
   * @example
   * 61.9.XXX.XXX
   */
  blackList?: string;
  /**
   * @remarks
   * The domain name of the image repository.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The creation time. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-10-16 18:17:16
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2022-11-21 10:40:01
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * 443496
   */
  id?: number;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **1**: Internet
   * *   **2**: VPC
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
   * The number of days during which assets can be retained.
   * 
   * @example
   * 30
   */
  persistenceDay?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **1**: HTTP
   * *   **2**: HTTPS
   * 
   * @example
   * 1
   */
  protocolType?: number;
  /**
   * @remarks
   * The region ID of the image repository.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address of the image repository.
   * 
   * @example
   * 1.13.XXX.XXX
   */
  registryHostIp?: string;
  /**
   * @remarks
   * The alias of the image repository.
   * 
   * @example
   * fanyi
   */
  registryName?: string;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * 
   * *   **CI/CD**: Jenkins
   * 
   * @example
   * CI/CD
   */
  registryType?: string;
  /**
   * @remarks
   * The authentication token of the user.
   * 
   * @example
   * 3c3c602c-fa1f-4bc0-992f-b4b2cac7****
   */
  token?: string;
  /**
   * @remarks
   * The number of images that can be scanned per hour.
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
   * The ID of the VPC.
   * 
   * @example
   * vpc-2vchkxmf2j9yjt3x2****
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

export class CreateJenkinsImageRegistryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of creating the image repository.
   */
  data?: CreateJenkinsImageRegistryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AF1E723-53F1-55BF-A4B2-15CB7A32****
   */
  requestId?: string;
  /**
   * @remarks
   * The time consumed. Unit: seconds.
   * 
   * @example
   * 1
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateJenkinsImageRegistryResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      timeCost: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

