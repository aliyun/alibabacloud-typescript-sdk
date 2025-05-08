// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppVersionRequestContainersACRImageInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry image.
   * 
   * @example
   * 1500.***.net
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * xcdn-9axbo****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the image is an enterprise-level Container Registry image.
   * 
   * @example
   * false
   */
  isEnterpriseRegistry?: boolean;
  /**
   * @remarks
   * The regions in which the Container Registry instance resides.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-h1ghghu60ct****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_71
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * safeline
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The tag of the Container Registry image.
   * 
   * @example
   * 3.40.2
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the Container Registry image tag.
   */
  tagUrl?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceId: 'InstanceId',
      isEnterpriseRegistry: 'IsEnterpriseRegistry',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      tag: 'Tag',
      tagUrl: 'TagUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceId: 'string',
      isEnterpriseRegistry: 'boolean',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      tag: 'string',
      tagUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

