// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrivateRegistryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1766185894104***
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
   * 273698***
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
   * 2
   */
  netType?: number;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * ***********
   */
  password?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * *   **1**: HTTP
   * *   **2**: HTTPS
   * 
   * @example
   * 2
   */
  protocolType?: number;
  /**
   * @remarks
   * The region ID of the image repository.
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
   * ``114.55.**.**``
   */
  registryHostIp?: string;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * 
   * *   **harbor**
   * *   **quay**
   * 
   * @example
   * harbor
   */
  registryType?: string;
  /**
   * @remarks
   * The version of the image repository. Default value: -. Valid values:
   * 
   * *   **-**: the default version
   * *   **V1**
   * *   **V2**
   * 
   * @example
   * V2
   */
  registryVersion?: string;
  /**
   * @remarks
   * The value of the token.
   * 
   * @example
   * 3c3c602c-fa1f-4bc0-992f-b4b2cac7****
   */
  token?: string;
  /**
   * @remarks
   * The number of scan tasks that are performed per hour.
   * 
   * @example
   * 10
   */
  transPerHour?: number;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * ******
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
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      domainName: 'DomainName',
      id: 'Id',
      netType: 'NetType',
      password: 'Password',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      registryHostIp: 'RegistryHostIp',
      registryType: 'RegistryType',
      registryVersion: 'RegistryVersion',
      token: 'Token',
      transPerHour: 'TransPerHour',
      userName: 'UserName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      domainName: 'string',
      id: 'number',
      netType: 'number',
      password: 'string',
      protocolType: 'number',
      regionId: 'string',
      registryHostIp: 'string',
      registryType: 'string',
      registryVersion: 'string',
      token: 'string',
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

export class AddPrivateRegistryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The handling result.
   */
  data?: AddPrivateRegistryResponseBodyData;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddPrivateRegistryResponseBodyData,
      requestId: 'string',
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

