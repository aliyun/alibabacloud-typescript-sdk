// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The region ID of the destination instance.
   * 
   * @example
   * cn-shenzhen
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      targetInstanceId: 'TargetInstanceId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      targetInstanceId: 'string',
      targetRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

