// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoTagRequest extends $dara.Model {
  /**
   * @remarks
   * The source image tag.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  fromTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The image tag that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * v2
   */
  toTag?: string;
  static names(): { [key: string]: string } {
    return {
      fromTag: 'FromTag',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      toTag: 'ToTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTag: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      toTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

