// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ContainerConfigurationRegistryCredential extends $dara.Model {
  password?: string;
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
  acrInstanceId?: string;
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

