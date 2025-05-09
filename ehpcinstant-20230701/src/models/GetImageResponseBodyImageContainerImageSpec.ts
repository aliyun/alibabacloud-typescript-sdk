// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetImageResponseBodyImageContainerImageSpecRegistryCredential } from "./GetImageResponseBodyImageContainerImageSpecRegistryCredential";


export class GetImageResponseBodyImageContainerImageSpec extends $dara.Model {
  architecture?: string;
  /**
   * @example
   * True
   */
  isACREnterprise?: boolean;
  /**
   * @example
   * True
   */
  isACRRegistry?: boolean;
  osTag?: string;
  platform?: string;
  registryCredential?: GetImageResponseBodyImageContainerImageSpecRegistryCredential;
  /**
   * @example
   * cri-xyz795ygf8k9****
   */
  registryCriId?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/ehpc_open/nginx:latest
   */
  registryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      osTag: 'OsTag',
      platform: 'Platform',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      osTag: 'string',
      platform: 'string',
      registryCredential: GetImageResponseBodyImageContainerImageSpecRegistryCredential,
      registryCriId: 'string',
      registryUrl: 'string',
    };
  }

  validate() {
    if(this.registryCredential && typeof (this.registryCredential as any).validate === 'function') {
      (this.registryCredential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

