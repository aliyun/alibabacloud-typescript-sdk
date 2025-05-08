// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppVersionResponseBodyVersionContainersACRImageInfo extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry image.
   * 
   * @example
   * *.mooc.seewo.com
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * xcdn-9ak2thl14z5s
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the image is an enterprise-level image.
   * 
   * @example
   * false
   */
  isEnterpriseRegistry?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-zeu0xyk28alyxozh
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * wpy1
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-healthy-100-soa-1710987653
   */
  tag?: string;
  /**
   * @remarks
   * The URL of the Container Registry image tag.
   * 
   * @example
   * registry-vpc.cn-shenzhen.aliyuncs.com/lihetech/easywits_server_exam:3.40.2
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

