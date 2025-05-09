// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddImageRequestContainerImageSpecRegistryCredential } from "./AddImageRequestContainerImageSpecRegistryCredential";


export class AddImageRequestContainerImageSpec extends $dara.Model {
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
  registryCredential?: AddImageRequestContainerImageSpecRegistryCredential;
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
      isACREnterprise: 'IsACREnterprise',
      isACRRegistry: 'IsACRRegistry',
      registryCredential: 'RegistryCredential',
      registryCriId: 'RegistryCriId',
      registryUrl: 'RegistryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isACREnterprise: 'boolean',
      isACRRegistry: 'boolean',
      registryCredential: AddImageRequestContainerImageSpecRegistryCredential,
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

