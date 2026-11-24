// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateChartRepositoryRequest extends $dara.Model {
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
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the repository namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The repository type. Valid values:
   * - `PUBLIC`: public repository
   * 
   * - `PRIVATE`: private repository
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The summary.
   * 
   * @example
   * test
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

