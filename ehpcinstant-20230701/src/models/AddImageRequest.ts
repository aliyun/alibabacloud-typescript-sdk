// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddImageRequestContainerImageSpecRegistryCredential extends $dara.Model {
  /**
   * @remarks
   * The logon password.
   * 
   * @example
   * userpassword
   */
  password?: string;
  /**
   * @remarks
   * The registry address of the image repository.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * The logon username.
   * 
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequestContainerImageSpec extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the image is stored in Alibaba Cloud Container Registry Enterprise Edition. Valid values:
   * 
   * - True: yes
   * - False: no
   * 
   * @example
   * True
   */
  isACREnterprise?: boolean;
  /**
   * @remarks
   * Specifies whether the image is stored in Alibaba Cloud Container Registry. Valid values:
   * 
   * - True: yes
   * - False: no
   * 
   * @example
   * True
   */
  isACRRegistry?: boolean;
  /**
   * @remarks
   * The authentication credentials for the private image repository.
   */
  registryCredential?: AddImageRequestContainerImageSpecRegistryCredential;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * cri-xyz795ygf8k9****
   */
  registryCriId?: string;
  /**
   * @remarks
   * The access URL of the container image.
   * 
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

export class AddImageRequestVMImageSpec extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-bp1akkkr1rkxtb******
   */
  imageId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $dara.Model {
  /**
   * @remarks
   * The container image configuration.
   */
  containerImageSpec?: AddImageRequestContainerImageSpec;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * Test image
   */
  description?: string;
  /**
   * @remarks
   * The image type. Valid values:
   * 
   * - VM: virtual machine image
   * - Container: container image
   * 
   * @example
   * VM
   */
  imageType?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * V1.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * The image name.
   * 
   * This parameter is required.
   * 
   * @example
   * app-image
   */
  name?: string;
  /**
   * @remarks
   * The virtual machine image configuration.
   */
  VMImageSpec?: AddImageRequestVMImageSpec;
  static names(): { [key: string]: string } {
    return {
      containerImageSpec: 'ContainerImageSpec',
      description: 'Description',
      imageType: 'ImageType',
      imageVersion: 'ImageVersion',
      name: 'Name',
      VMImageSpec: 'VMImageSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerImageSpec: AddImageRequestContainerImageSpec,
      description: 'string',
      imageType: 'string',
      imageVersion: 'string',
      name: 'string',
      VMImageSpec: AddImageRequestVMImageSpec,
    };
  }

  validate() {
    if(this.containerImageSpec && typeof (this.containerImageSpec as any).validate === 'function') {
      (this.containerImageSpec as any).validate();
    }
    if(this.VMImageSpec && typeof (this.VMImageSpec as any).validate === 'function') {
      (this.VMImageSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

