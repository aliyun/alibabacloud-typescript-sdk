// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChartReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the chart.
   * 
   * This parameter is required.
   * 
   * @example
   * chart3
   */
  chart?: string;
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
   * The version of the chart that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1.0
   */
  release?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      release: 'Release',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      release: 'string',
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

