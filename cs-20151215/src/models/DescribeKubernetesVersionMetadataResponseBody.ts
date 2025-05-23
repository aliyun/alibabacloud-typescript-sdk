// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKubernetesVersionMetadataResponseBodyImages } from "./DescribeKubernetesVersionMetadataResponseBodyImages";
import { Runtime } from "./Runtime";


export class DescribeKubernetesVersionMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Features of the queried Kubernetes version.
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
   * The OS images that are returned.
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
   * The Kubernetes version supported by ACK. For more information, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  version?: string;
  /**
   * @remarks
   * The release date of the Kubernetes version.
   * 
   * @example
   * 2023-04-30T00:00:00Z
   */
  releaseDate?: string;
  /**
   * @remarks
   * The expiration date of the Kubernetes version.
   * 
   * @example
   * 2025-04-30T00:00:00Z
   */
  expirationDate?: string;
  /**
   * @remarks
   * Indicates whether you can create clusters that run the Kubernetes version.
   * 
   * @example
   * true
   */
  creatable?: boolean;
  /**
   * @remarks
   * The list of available Kubernetes versions for updates.
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

