// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoSyncTaskRequest extends $dara.Model {
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
   * The repository name.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the repository namespace.
   * 
   * @example
   * ns
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The ID of the sync task. This ID is also the `SyncBatchTaskId` returned in the response, which identifies the image\\"s sync batch task.
   * 
   * > An image that matches multiple sync rules generates multiple sync tasks, each with the same `SyncBatchTaskId`.
   * 
   * @example
   * 9d8ac4f6-8138-4c15-a2e3-60624ad3****
   */
  syncRecordId?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * nginx
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      syncRecordId: 'SyncRecordId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      syncRecordId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

