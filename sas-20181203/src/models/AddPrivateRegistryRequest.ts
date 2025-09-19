// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrivateRegistryRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The additional parameter of the image repository. This parameter is required when you set the RegistryType parameter to **quay**. Valid values:
   * 
   * *   **namespace**
   * *   **authToken**
   * 
   * @example
   * [{"namespace":"aa","authToken":"aa"}]
   */
  extraParam?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * *   **1**: Internet
   * *   **2**: virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  netType?: number;
  /**
   * @remarks
   * The password that is used to log on to the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * ******
   */
  password?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **1**: HTTP
   * *   **2**: HTTPS
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  protocolType?: number;
  /**
   * @remarks
   * The IP address of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * ``114.55.**.**``
   */
  registryHostIp?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * >  You can call the [ListImageRegistryRegion](~~ListImageRegistryRegion~~) operation to query the IDs of supported regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  registryRegionId?: string;
  /**
   * @remarks
   * The type of the private image repository. Valid values:
   * 
   * *   **harbor**
   * *   **quay**
   * 
   * This parameter is required.
   * 
   * @example
   * harbor
   */
  registryType?: string;
  /**
   * @remarks
   * The version of the image repository. Valid values:
   * 
   * *   **V1**
   * *   **V2**
   * 
   * This parameter is required.
   * 
   * @example
   * V2
   */
  registryVersion?: string;
  /**
   * @remarks
   * The number of images that are scanned per hour.
   * 
   * @example
   * 10
   */
  transPerHour?: number;
  /**
   * @remarks
   * The username that is used to log on to the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  userName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9hs3e5*******908kd
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      extraParam: 'ExtraParam',
      netType: 'NetType',
      password: 'Password',
      port: 'Port',
      protocolType: 'ProtocolType',
      registryHostIp: 'RegistryHostIp',
      registryRegionId: 'RegistryRegionId',
      registryType: 'RegistryType',
      registryVersion: 'RegistryVersion',
      transPerHour: 'TransPerHour',
      userName: 'UserName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      extraParam: 'string',
      netType: 'number',
      password: 'string',
      port: 'number',
      protocolType: 'number',
      registryHostIp: 'string',
      registryRegionId: 'string',
      registryType: 'string',
      registryVersion: 'string',
      transPerHour: 'number',
      userName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

