// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicCreateImageScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The SHA256 digest values of the images. Separate multiple SHA256 values with commas (,).
   * 
   * @example
   * 6a5e103187b31a94592a47a5858617f7a6c
   */
  digests?: string;
  /**
   * @remarks
   * The IDs of the Container Registry (ACR) instances. Separate multiple IDs with commas (,).
   * 
   * @example
   * i-uf6j8vq9l4r5ntht****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region IDs of the images. Separate multiple region IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIds?: string;
  /**
   * @remarks
   * The types of image registries. Separate multiple types with commas (,). Valid values:
   * 
   * - **acr**
   * - **harbor**
   * - **quay**.
   * 
   * @example
   * acr
   */
  registryTypes?: string;
  /**
   * @remarks
   * The IDs of the image registries. Separate multiple IDs with commas (,).
   * 
   * @example
   * crr-vridcl4****
   */
  repoIds?: string;
  /**
   * @remarks
   * The names of the image registries. Separate multiple names with commas (,).
   * 
   * @example
   * centos
   */
  repoNames?: string;
  /**
   * @remarks
   * The namespaces of the image registries. Separate multiple namespaces with commas (,).
   * 
   * @example
   * hanghai-namespace
   */
  repoNamespaces?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 192.168..XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The tags of the images. Separate multiple tags with commas (,).
   * 
   * @example
   * 0.2
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      digests: 'Digests',
      instanceIds: 'InstanceIds',
      regionIds: 'RegionIds',
      registryTypes: 'RegistryTypes',
      repoIds: 'RepoIds',
      repoNames: 'RepoNames',
      repoNamespaces: 'RepoNamespaces',
      sourceIp: 'SourceIp',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digests: 'string',
      instanceIds: 'string',
      regionIds: 'string',
      registryTypes: 'string',
      repoIds: 'string',
      repoNames: 'string',
      repoNamespaces: 'string',
      sourceIp: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

