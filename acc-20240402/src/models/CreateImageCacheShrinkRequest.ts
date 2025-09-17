// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageCacheShrinkRequestAcrRegistryInfos extends $dara.Model {
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

export class CreateImageCacheShrinkRequestImageRegistryCredentials extends $dara.Model {
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

export class CreateImageCacheShrinkRequestTags extends $dara.Model {
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

export class CreateImageCacheShrinkRequest extends $dara.Model {
  acrRegistryInfos?: CreateImageCacheShrinkRequestAcrRegistryInfos[];
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
  imageRegistryCredentials?: CreateImageCacheShrinkRequestImageRegistryCredentials[];
  /**
   * @remarks
   * This parameter is required.
   */
  images?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  networkConfigShrink?: string;
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
  tags?: CreateImageCacheShrinkRequestTags[];
  static names(): { [key: string]: string } {
    return {
      acrRegistryInfos: 'AcrRegistryInfos',
      clientToken: 'ClientToken',
      imageCacheName: 'ImageCacheName',
      imageRegistryCredentials: 'ImageRegistryCredentials',
      images: 'Images',
      networkConfigShrink: 'NetworkConfig',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acrRegistryInfos: { 'type': 'array', 'itemType': CreateImageCacheShrinkRequestAcrRegistryInfos },
      clientToken: 'string',
      imageCacheName: 'string',
      imageRegistryCredentials: { 'type': 'array', 'itemType': CreateImageCacheShrinkRequestImageRegistryCredentials },
      images: { 'type': 'array', 'itemType': 'string' },
      networkConfigShrink: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateImageCacheShrinkRequestTags },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

