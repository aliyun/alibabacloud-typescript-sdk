// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateImageCacheRequestAcrRegistryInfos extends $dara.Model {
  /**
   * @example
   * cri-nwj395hgf6f*****
   */
  instanceId?: string;
  /**
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
   * @example
   * mypassword
   */
  password?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  server?: string;
  /**
   * @example
   * false
   */
  skipCertVerification?: boolean;
  /**
   * @example
   * false
   */
  usePlainHttp?: boolean;
  /**
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
   * @example
   * true
   */
  autoCreate?: boolean;
  /**
   * @example
   * 100
   */
  bandwidth?: number;
  /**
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
  eipInstance?: CreateImageCacheRequestNetworkConfigEipInstance;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sg-0jlgektkddwa42n*****
   */
  securityGroupId?: string;
  /**
   * @remarks
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
   * @example
   * imc
   */
  key?: string;
  /**
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
  acrRegistryInfos?: CreateImageCacheRequestAcrRegistryInfos[];
  /**
   * @example
   * *****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-imc
   */
  imageCacheName?: string;
  imageRegistryCredentials?: CreateImageCacheRequestImageRegistryCredentials[];
  /**
   * @remarks
   * This parameter is required.
   */
  images?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfig?: CreateImageCacheRequestNetworkConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  tags?: CreateImageCacheRequestTags[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      clientToken: 'ClientToken',
      imageCacheName: 'ImageCacheName',
      imageRegistryCredentials: 'ImageRegistryCredentials',
      images: 'Images',
      networkConfig: 'NetworkConfig',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': CreateImageCacheRequestAcrRegistryInfos },
      clientToken: 'string',
      imageCacheName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': CreateImageCacheRequestImageRegistryCredentials },
      images: { 'type': 'array', 'itemType': 'string' },
      networkConfig: CreateImageCacheRequestNetworkConfig,
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateImageCacheRequestTags },
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

