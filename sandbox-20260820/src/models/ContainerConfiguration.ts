// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ContainerConfigurationRegistryCredential extends $dara.Model {
  /**
   * @remarks
   * The logon password or access token for the image repository. The value is encrypted and stored on the server, and plaintext is not returned in query responses.
   * 
   * @example
   * Passw0rd****
   */
  password?: string;
  /**
   * @remarks
   * The logon username for the image repository.
   * 
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
   * @remarks
   * The ID of the Container Registry Enterprise instance. This parameter is required when registryType is set to acree.
   * 
   * @example
   * cri-****
   */
  acrInstanceId?: string;
  /**
   * @remarks
   * The address of the sandbox base image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/sandbox-demo/python:3.12
   */
  image?: string;
  /**
   * @remarks
   * The repository access credentials used to pull images. You do not need to configure this parameter when you use public images.
   */
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

