// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChartRepositoryRequest extends $dara.Model {
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
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo01
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository.
   * *   `PRIVATE`: a private repository.
   * 
   * You can specify the RepoType or Summary parameter. The RepoType parameter is optional.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * summary
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

