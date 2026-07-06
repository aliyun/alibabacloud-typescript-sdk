// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The repository description.
   * 
   * @example
   * repo-for-test
   */
  detail?: string;
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
   * The repository ID.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * dsp/domain-microapp
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the repository namespace.
   * 
   * @example
   * ejiayou-other
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The repository type. Valid values:
   * 
   * - `PUBLIC`: public repository
   * 
   * - `PRIVATE`: private repository.
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The summary.
   * 
   * This parameter is required.
   * 
   * @example
   * test repo
   */
  summary?: string;
  /**
   * @remarks
   * Specifies whether image tag immutability is enabled. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled.
   * 
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
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
      repoId: 'string',
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

