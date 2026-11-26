// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateImageCacheRequestAcrRegistryInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACR Enterprise instance.
   * 
   * @example
   * cri-nwj395hgf6f*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region to which the ACR Enterprise instance belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequestImageRegistryCredentials extends $dara.Model {
  /**
   * @remarks
   * The password of the image registry.
   * 
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @remarks
   * The address of the image registry without the http:// or https:// prefix.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @remarks
   * Specifies whether to skip certificate verification when you create an image cache by using images from a self-managed image registry that uses a self-signed certificate to prevent image pull failures caused by certificate verification failures.
   * Default value: `false`.
   * 
   * @example
   * false
   */
  skipCertVerification?: boolean;
  /**
   * @remarks
   * Specifies whether the service uses the HTTP protocol to pull images to prevent image pull failures caused by protocol mismatches.
   * Default value: `false`.
   * 
   * @example
   * false
   */
  usePlainHttp?: boolean;
  /**
   * @remarks
   * The username of the image registry.
   * 
   * @example
   * myusername
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      server: 'Server',
      skipCertVerification: 'SkipCertVerification',
      usePlainHttp: 'UsePlainHttp',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      server: 'string',
      skipCertVerification: 'boolean',
      usePlainHttp: 'boolean',
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

export class CreateImageCacheRequestNetworkConfigEipInstance extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic creation of an EIP is enabled.
   * 
   * @example
   * true
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The bandwidth of the EIP for automatic creation. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: number;
  /**
   * @remarks
   * The elastic IP address. This parameter takes precedence. If you specify this parameter, other parameters are ignored.
   * 
   * @example
   * eip-0jl0bx3fnpnjc9i4*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequestNetworkConfig extends $dara.Model {
  /**
   * @remarks
   * The configurations of the elastic IP address (EIP) instance.
   */
  eipInstance?: CreateImageCacheRequestNetworkConfigEipInstance;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-0jlgektkddwa42n*****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches. You can specify up to 10 vSwitch IDs. One of the vSwitches is selected to pull the image.
   * 
   * This parameter is required.
   */
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      eipInstance: 'EipInstance',
      securityGroupId: 'SecurityGroupId',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipInstance: CreateImageCacheRequestNetworkConfigEipInstance,
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.eipInstance && typeof (this.eipInstance as any).validate === 'function') {
      (this.eipInstance as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the image cache.
   * 
   * @example
   * imc
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the image cache.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The ACR Enterprise instance information.
   */
  acrRegistryInfos?: CreateImageCacheRequestAcrRegistryInfos[];
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * 7f3a2c18-6c47-4eb7-a6bb-8432a394a620
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable base image cache matching. Default value: `false`.
   * 
   * @example
   * false
   */
  enableBaseImageCacheMatch?: boolean;
  /**
   * @remarks
   * The name of the image cache.
   * 
   * This parameter is required.
   * 
   * @example
   * my-imc
   */
  imageCacheName?: string;
  /**
   * @remarks
   * The credentials of the image registry.
   */
  imageRegistryCredentials?: CreateImageCacheRequestImageRegistryCredentials[];
  /**
   * @remarks
   * The container images used to create the image cache. Currently, only one image is supported.
   * 
   * This parameter is required.
   */
  images?: string[];
  /**
   * @remarks
   * The network configurations for pulling images when creating the image cache.
   * 
   * This parameter is required.
   */
  networkConfig?: CreateImageCacheRequestNetworkConfig;
  /**
   * @remarks
   * The platform type of the image cache. Valid values: linux/amd64 and windows/amd64. Default value: linux/amd64.
   * 
   * @example
   * windows/amd64
   */
  platform?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the image cache. You can specify up to 20 tags.
   */
  tags?: CreateImageCacheRequestTags[];
  /**
   * @remarks
   * The type of the image cache. Valid values: `General` and `Base`. Default value: `General`.
   * 
   * @example
   * General
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      clientToken: 'ClientToken',
      enableBaseImageCacheMatch: 'EnableBaseImageCacheMatch',
      imageCacheName: 'ImageCacheName',
      imageRegistryCredentials: 'ImageRegistryCredentials',
      images: 'Images',
      networkConfig: 'NetworkConfig',
      platform: 'Platform',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': CreateImageCacheRequestAcrRegistryInfos },
      clientToken: 'string',
      enableBaseImageCacheMatch: 'boolean',
      imageCacheName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': CreateImageCacheRequestImageRegistryCredentials },
      images: { 'type': 'array', 'itemType': 'string' },
      networkConfig: CreateImageCacheRequestNetworkConfig,
      platform: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateImageCacheRequestTags },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acrRegistryInfos)) {
      $dara.Model.validateArray(this.acrRegistryInfos);
    }
    if(Array.isArray(this.imageRegistryCredentials)) {
      $dara.Model.validateArray(this.imageRegistryCredentials);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

