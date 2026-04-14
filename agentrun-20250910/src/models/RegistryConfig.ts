// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RegistryAuthConfig } from "./RegistryAuthConfig";
import { RegistryCertConfig } from "./RegistryCertConfig";
import { RegistryNetworkConfig } from "./RegistryNetworkConfig";


export class RegistryConfig extends $dara.Model {
  /**
   * @remarks
   * 镜像仓库的认证配置信息
   * 
   * @example
   * {}
   */
  authConfig?: RegistryAuthConfig;
  /**
   * @remarks
   * 镜像仓库的证书配置信息
   * 
   * @example
   * {}
   */
  certConfig?: RegistryCertConfig;
  /**
   * @remarks
   * 镜像仓库的网络配置信息
   * 
   * @example
   * {}
   */
  networkConfig?: RegistryNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: RegistryAuthConfig,
      certConfig: RegistryCertConfig,
      networkConfig: RegistryNetworkConfig,
    };
  }

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

