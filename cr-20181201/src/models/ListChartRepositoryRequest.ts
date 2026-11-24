// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChartRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * ns1
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * repo1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the chart repository. Valid values:
   * 
   * - `NORMAL`: The chart repository is in the Normal state.
   *  
   * - `DELETING`: The chart repository is being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

