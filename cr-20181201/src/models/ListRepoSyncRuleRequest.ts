// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncRuleRequest extends $dara.Model {
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
   * The namespace name.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
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
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The image repository name.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The target instance ID.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The target region ID.
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

