// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the repository.
   * 
   * @example
   * repo1
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
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
   * The name of the namespace to which the image repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PUBLIC`: The repository is a public repository.
   * *   `PRIVATE`: The repository is a private repository.
   * 
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The summary about the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  summary?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature of image tag immutability. Valid values:
   * 
   * *   `true`: enables the feature of image tag immutability.
   * *   `false`: disables the feature of image tag immutability.
   * 
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

