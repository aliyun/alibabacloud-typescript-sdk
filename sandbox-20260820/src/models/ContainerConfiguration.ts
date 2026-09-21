// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ContainerConfigurationRegistryCredential extends $dara.Model {
  /**
   * @example
   * Passw0rd****
   */
  password?: string;
  /**
   * @example
   * sandbox-puller
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContainerConfiguration extends $dara.Model {
  /**
   * @example
   * cri-****
   */
  acrInstanceId?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/sandbox-demo/python:3.12
   */
  image?: string;
  registryCredential?: ContainerConfigurationRegistryCredential;
  static names(): { [key: string]: string } {
    return {
      acrInstanceId: 'acrInstanceId',
      image: 'image',
      registryCredential: 'registryCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrInstanceId: 'string',
      image: 'string',
      registryCredential: ContainerConfigurationRegistryCredential,
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

