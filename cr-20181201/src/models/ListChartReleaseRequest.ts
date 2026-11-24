// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChartReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The version prefix.
   * 
   * @example
   * null
   */
  chart?: string;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository name.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace name.
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
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
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

