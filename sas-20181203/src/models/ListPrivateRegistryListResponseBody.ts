// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateRegistryListResponseBodyImageRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1766185894******
   */
  aliUid?: number;
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
   * The ID of the image repository.
   * 
   * @example
   * 66485
   */
  id?: number;
  /**
   * @remarks
   * The information about the Jenkins environment.
   * 
   * @example
   * JenkinsInfo
   */
  jenkinsEnv?: string;
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
   * The password used to log on to the image repository.
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
   * 90
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
   * The region ID of the server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IP address of the image repository.
   * 
   * @example
   * 114.55.XXX.XXX
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
   * The type of the image repository. Valid values:
   * 
   * *   **acr**: Container Registry
   * *   **harbor**: Harbor
   * *   **quay**: Quay
   * *   **CI/CD**: Jenkins
   * 
   * @example
   * harbor
   */
  registryType?: string;
  /**
   * @remarks
   * The version of the image repository. Valid values:
   * 
   * *   **V1**: V1.0
   * *   **V2**: V2.0
   * 
   * @example
   * V1
   */
  registryVersion?: string;
  /**
   * @remarks
   * The authentication token of the user.
   * 
   * @example
   * 0da12bce-cc36-4c48-b3e6-2215fc3a****
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
   * The username used to log on to the image repository.
   * 
   * @example
   * RegistryUser
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp12897gqrex01zn0****
   */
  vpcId?: string;
  /**
   * @remarks
   * The whitelist of IP addresses.
   * 
   * @example
   * 100.104.XXX.XXX
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      domainName: 'DomainName',
      id: 'Id',
      jenkinsEnv: 'JenkinsEnv',
      netType: 'NetType',
      password: 'Password',
      persistenceDay: 'PersistenceDay',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      registryHostIp: 'RegistryHostIp',
      registryName: 'RegistryName',
      registryType: 'RegistryType',
      registryVersion: 'RegistryVersion',
      token: 'Token',
      transPerHour: 'TransPerHour',
      userName: 'UserName',
      vpcId: 'VpcId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      domainName: 'string',
      id: 'number',
      jenkinsEnv: 'string',
      netType: 'number',
      password: 'string',
      persistenceDay: 'number',
      protocolType: 'number',
      regionId: 'string',
      registryHostIp: 'string',
      registryName: 'string',
      registryType: 'string',
      registryVersion: 'string',
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

export class ListPrivateRegistryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the image repositories.
   */
  imageRegistryInfos?: ListPrivateRegistryListResponseBodyImageRegistryInfos[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageRegistryInfos: 'ImageRegistryInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageRegistryInfos: { 'type': 'array', 'itemType': ListPrivateRegistryListResponseBodyImageRegistryInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRegistryInfos)) {
      $dara.Model.validateArray(this.imageRegistryInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

