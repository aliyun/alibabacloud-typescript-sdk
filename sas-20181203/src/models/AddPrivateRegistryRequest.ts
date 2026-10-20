// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrivateRegistryRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of the registry.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The additional parameters for the image registry. This parameter is required when you use **quay**. The parameters include:
   * 
   * - **namespace**: The namespace.
   * - **authToken**: The authorization token.
   * 
   * @example
   * [{"namespace":"aa","authToken":"aa"}]
   */
  extraParam?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * - **1**: Internet.
   * - **2**: VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  netType?: number;
  /**
   * @remarks
   * The password.
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
   * The protocol type. Valid values:
   * - **1**: HTTP.
   * - **2**: HTTPS.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  protocolType?: number;
  /**
   * @remarks
   * The IP address of the registry.
   * 
   * Enter a valid IPv4 address that can be used to connect to the image registry. To specify a domain name for the image registry, use the DomainName parameter.
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
   * >You can call the [ListImageRegistryRegion](~~ListImageRegistryRegion~~) operation to query the supported region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  registryRegionId?: string;
  /**
   * @remarks
   * The type of the private image registry. Valid values:
   * - **harbor**: Harbor environment.
   * - **quay**: Quay environment.
   * 
   * This parameter is required.
   * 
   * @example
   * harbor
   */
  registryType?: string;
  /**
   * @remarks
   * The version of the image registry. Valid values:
   * 
   * 
   * - **V1**: Version 1.0.
   * - **V2**: Version 2.0.
   * 
   * This parameter is required.
   * 
   * @example
   * V2
   */
  registryVersion?: string;
  /**
   * @remarks
   * The number of images scanned per hour.
   * 
   * @example
   * 10
   */
  transPerHour?: number;
  /**
   * @remarks
   * The username of the image registry.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx
   */
  userName?: string;
  /**
   * @remarks
   * The instance ID of the VPC.
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

