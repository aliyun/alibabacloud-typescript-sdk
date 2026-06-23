// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";


export class DescribeKubernetesVersionMetadataResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Alibaba Cloud Linux 3.2104
   */
  imageName?: string;
  /**
   * @remarks
   * The operating system platform. Valid values:
   * - `AliyunLinux`
   * - `CentOS`
   * - `Windows`
   * - `WindowsCore`
   * 
   * @example
   * AliyunLinux
   */
  platform?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 3.2104
   */
  osVersion?: string;
  /**
   * @remarks
   * The type of the operating system distribution. We recommend that you use this field to specify the node operating system. Valid values:
   * 
   * - `CentOS`
   * - `AliyunLinux`
   * - `AliyunLinux Qboot`
   * - `AliyunLinuxUEFI`
   * - `AliyunLinux3`
   * - `Windows`
   * - `WindowsCore`
   * - `AliyunLinux3Arm64`
   * - `ContainerOS`
   * 
   * @example
   * AliyunLinux3
   */
  imageType?: string;
  /**
   * @remarks
   * The operating system type. Examples:
   * 
   * - `Windows`
   * - `Linux`
   * 
   * @example
   * Linux
   */
  osType?: string;
  /**
   * @remarks
   * The image category. Partial valid values:
   * 
   * - `system`: public image.
   * - `self`: custom image.
   * - `others`: shared image from other users.
   * - `marketplace`: Alibaba Cloud Marketplace image.
   * 
   * @example
   * system
   */
  imageCategory?: string;
  /**
   * @remarks
   * The image architecture.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'image_id',
      imageName: 'image_name',
      platform: 'platform',
      osVersion: 'os_version',
      imageType: 'image_type',
      osType: 'os_type',
      imageCategory: 'image_category',
      architecture: 'architecture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      imageName: 'string',
      platform: 'string',
      osVersion: 'string',
      imageType: 'string',
      osType: 'string',
      imageCategory: 'string',
      architecture: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The feature capabilities of the Kubernetes version.
   * 
   * @example
   * {
   *       "AnyAZ": true,
   *       "ChargeType": "PostPaid"
   * }
   */
  capabilities?: { [key: string]: any };
  /**
   * @remarks
   * The list of system images.
   */
  images?: DescribeKubernetesVersionMetadataResponseBodyImages[];
  /**
   * @remarks
   * The metadata of the Kubernetes version.
   * 
   * @example
   * {
   *       "KubernetesVersion": "1.31.1-aliyun.1",
   *       "SubClass": "default",
   *       "ServiceCIDR": ""
   * }
   */
  metaData?: { [key: string]: any };
  /**
   * @remarks
   * The container runtime configurations.
   */
  runtimes?: Runtime[];
  /**
   * @remarks
   * The Kubernetes version released by ACK. For more information about versions, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.31.1-aliyun.1
   */
  version?: string;
  /**
   * @remarks
   * The release date of the Kubernetes version.
   * 
   * @example
   * 2025-01-30T00:00:00Z
   */
  releaseDate?: string;
  /**
   * @remarks
   * The expiration date of the Kubernetes version.
   * 
   * @example
   * 2026-01-30T00:00:00Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * Indicates whether the Kubernetes version can be used to create clusters.
   * 
   * @example
   * true
   */
  creatable?: boolean;
  /**
   * @remarks
   * The list of upgradable versions.
   */
  upgradableVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      images: 'images',
      metaData: 'meta_data',
      runtimes: 'runtimes',
      version: 'version',
      releaseDate: 'release_date',
      expirationDate: 'expiration_date',
      creatable: 'creatable',
      upgradableVersions: 'upgradable_versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      images: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBodyImages },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runtimes: { 'type': 'array', 'itemType': Runtime },
      version: 'string',
      releaseDate: 'string',
      expirationDate: 'string',
      creatable: 'boolean',
      upgradableVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.capabilities) {
      $dara.Model.validateMap(this.capabilities);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(this.metaData) {
      $dara.Model.validateMap(this.metaData);
    }
    if(Array.isArray(this.runtimes)) {
      $dara.Model.validateArray(this.runtimes);
    }
    if(Array.isArray(this.upgradableVersions)) {
      $dara.Model.validateArray(this.upgradableVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKubernetesVersionMetadataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKubernetesVersionMetadataResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

