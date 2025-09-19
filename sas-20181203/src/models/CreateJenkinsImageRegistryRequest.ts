// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJenkinsImageRegistryRequest extends $dara.Model {
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
   * The additional parameters of the image repository. The value of this parameter contains the following fields:
   * 
   * *   **namespace**: the namespace
   * *   **authToken**: the authorization token
   * 
   * @example
   * [{\\"namespace\\":\\"aa\\",\\"authToken\\":\\"aa\\"}]
   */
  extraParam?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **1**: Internet
   * *   **2**: Virtual Private Cloud (VPC)
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
   * Harbor********
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
   * 114.55.XXX.XXX
   */
  registryHostIp?: string;
  /**
   * @remarks
   * The alias of the image repository.
   * 
   * @example
   * testRepo
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
   * The version of the image repository. Default value: -. Valid values:
   * 
   * *   **-**: the default version
   * *   **V1**: V1.0
   * *   **V2**: V2.0
   * 
   * @example
   * V1
   */
  registryVersion?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 41.121.XXX.XXX
   */
  sourceIp?: string;
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
   * vpc-2ze4aoqgeu51ydfb8****
   */
  vpcId?: string;
  /**
   * @remarks
   * The whitelist of IP addresses.
   * 
   * @example
   * 192.168.XXX.XXX
   */
  whiteList?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      extraParam: 'ExtraParam',
      netType: 'NetType',
      password: 'Password',
      persistenceDay: 'PersistenceDay',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      registryHostIp: 'RegistryHostIp',
      registryName: 'RegistryName',
      registryType: 'RegistryType',
      registryVersion: 'RegistryVersion',
      sourceIp: 'SourceIp',
      transPerHour: 'TransPerHour',
      userName: 'UserName',
      vpcId: 'VpcId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      extraParam: 'string',
      netType: 'number',
      password: 'string',
      persistenceDay: 'number',
      protocolType: 'number',
      regionId: 'string',
      registryHostIp: 'string',
      registryName: 'string',
      registryType: 'string',
      registryVersion: 'string',
      sourceIp: 'string',
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

