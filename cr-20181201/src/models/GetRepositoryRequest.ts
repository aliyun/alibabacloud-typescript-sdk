// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The repository ID. This API supports querying by RepoId, or by RepoNamespaceName and RepoName together.
   * 
   * @example
   * crr-03cuozrsqhkw****
   */
  repoId?: string;
  /**
   * @remarks
   * The repository name. This API supports querying by RepoId, or by RepoNamespaceName and RepoName together.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The repository namespace name. This API supports querying by RepoId, or by RepoNamespaceName and RepoName together.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

