// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRepositoryRequest extends $dara.Model {
  /**
   * @example
   * repo-for-test
   */
  detail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @example
   * dsp/domain-microapp
   */
  repoName?: string;
  /**
   * @example
   * ejiayou-other
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test repo
   */
  summary?: string;
  /**
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

