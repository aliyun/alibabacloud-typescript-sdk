// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublicCreateImageScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The SHA-256 value of the image digest. Separate multiple SHA-256 values with commas (,).
   * 
   * @example
   * 6a5e103187b31a94592a47a5858617f7a6c
   */
  digests?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance in which the image repository is created. Separate multiple IDs with commas (,).
   * 
   * @example
   * i-uf6j8vq9l4r5ntht****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The region ID of the image. Separate multiple IDs with commas (,).
   * 
   * @example
   * cn-hangzhou
   */
  regionIds?: string;
  /**
   * @remarks
   * The type of the image repository. Separate multiple types with commas (,). Valid values:
   * 
   * *   **acr**
   * *   **harbor**
   * *   **quay**
   * 
   * @example
   * acr
   */
  registryTypes?: string;
  /**
   * @remarks
   * The ID of the image repository. Separate multiple IDs with commas (,).
   * 
   * @example
   * crr-vridcl4****
   */
  repoIds?: string;
  /**
   * @remarks
   * The name of the image repository. Separate multiple names with commas (,).
   * 
   * @example
   * centos
   */
  repoNames?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs. Separate multiple namespaces with commas (,).
   * 
   * @example
   * hanghai-namespace
   */
  repoNamespaces?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168..XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The tag that is added to the image. Separate multiple tags with commas (,).
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

