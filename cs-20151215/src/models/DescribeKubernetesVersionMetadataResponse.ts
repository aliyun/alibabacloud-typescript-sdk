// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Runtime } from "./Runtime";


export class DescribeKubernetesVersionMetadataResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The architecture of the image.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The category of the image. Valid values:
   * 
   * - `system`: public image
   * - `self`: custom image
   * - `others`: shared image
   * - `marketplace`: Alibaba Cloud Marketplace image
   * 
   * @example
   * system
   */
  imageCategory?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20241218.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * Alibaba Cloud Linux 3.2104
   */
  imageName?: string;
  /**
   * @remarks
   * The type of the operating system distribution. Use this field to specify the operating system for nodes. Valid values:
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
   * The type of the operating system. Examples:
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
   * The image version.
   * 
   * @example
   * 3.2104
   */
  osVersion?: string;
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
  static names(): { [key: string]: string } {
    return {
      architecture: 'architecture',
      imageCategory: 'image_category',
      imageId: 'image_id',
      imageName: 'image_name',
      imageType: 'image_type',
      osType: 'os_type',
      osVersion: 'os_version',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      imageCategory: 'string',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      osType: 'string',
      osVersion: 'string',
      platform: 'string',
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
   * The features of the Kubernetes version.
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
   * Specifies whether the Kubernetes version is available for cluster creation.
   * 
   * @example
   * true
   */
  creatable?: boolean;
  /**
   * @remarks
   * The expiration time of the Kubernetes version, in ISO 8601 format with time zone information.
   * 
   * @example
   * 2026-01-30T00:00:00Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * The expiration time of the extended support for the Kubernetes version. An empty value indicates that extended support is not provided for this version.
   * 
   * @example
   * 2026-04-30T00:00:00Z
   */
  extendedExpirationDate?: string;
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
   * The release time of the Kubernetes version, in ISO 8601 format with time zone information.
   * 
   * @example
   * 2025-01-30T00:00:00Z
   */
  releaseDate?: string;
  /**
   * @remarks
   * The container runtime configurations.
   */
  runtimes?: Runtime[];
  /**
   * @remarks
   * The support policy required to obtain the patch version. The values are case-sensitive. Valid values:
   * - Standard: regular patch version
   * - Extended: patch version exclusive to the extended support period, which includes backported CVE and critical bug fixes, and is only available for clusters with extended support enabled
   * This field always has a value. It shares the same name and value range as the support_policy of the cluster. You can directly compare the policy enabled for the cluster with the policy required for this version.
   * 
   * @example
   * Extended
   */
  supportPolicy?: string;
  /**
   * @remarks
   * The list of upgradable versions.
   */
  upgradableVersions?: string[];
  /**
   * @remarks
   * The Kubernetes version released by ACK. For more information about versions, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.31.1-aliyun.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      capabilities: 'capabilities',
      creatable: 'creatable',
      expirationDate: 'expiration_date',
      extendedExpirationDate: 'extended_expiration_date',
      images: 'images',
      metaData: 'meta_data',
      releaseDate: 'release_date',
      runtimes: 'runtimes',
      supportPolicy: 'support_policy',
      upgradableVersions: 'upgradable_versions',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilities: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      creatable: 'boolean',
      expirationDate: 'string',
      extendedExpirationDate: 'string',
      images: { 'type': 'array', 'itemType': DescribeKubernetesVersionMetadataResponseBodyImages },
      metaData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      releaseDate: 'string',
      runtimes: { 'type': 'array', 'itemType': Runtime },
      supportPolicy: 'string',
      upgradableVersions: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
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

