// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFixTaskResponseBodyBuildTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * ivf-939536b5-c3ca-427b-8183-91007756
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The timestamp when the task starts. Unit: milliseconds.
   * 
   * @example
   * 2021-10-14 20:34:07
   */
  finishTime?: string;
  /**
   * @remarks
   * The timestamp when the task ends. Unit: milliseconds.
   * 
   * @example
   * 2021-10-14 20:32:05
   */
  fixTime?: string;
  /**
   * @remarks
   * The version of the image after image risks are fixed.
   * 
   * @example
   * redhat8-vault
   */
  newTag?: string;
  /**
   * @remarks
   * The UUID of the image after image risks are fixed.
   * 
   * @example
   * 2fa731681911ae8d1b5f11893ace****
   */
  newUuid?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * centos8.1-ja
   */
  oldTag?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * 2fa731681911ae8d1b5f11893ace****
   */
  oldUuid?: string;
  /**
   * @remarks
   * The region of the image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test-redhat
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image.
   * 
   * @example
   * name-002
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **1**: The task is running.
   * *   **2**: The task is successful.
   * *   **3**: The task failed.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The type of the task. The value is fixed as IMAGE_REPAIR. The value indicates a task that fixes image risks.
   * 
   * @example
   * IMAGE_REPAIR
   */
  taskType?: string;
  /**
   * @remarks
   * The alias of the fixed vulnerability.
   * 
   * @example
   * CVE-2007-5686:rpath_linux Information Disclosure
   */
  vulAlias?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      finishTime: 'FinishTime',
      fixTime: 'FixTime',
      newTag: 'NewTag',
      newUuid: 'NewUuid',
      oldTag: 'OldTag',
      oldUuid: 'OldUuid',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      status: 'Status',
      taskType: 'TaskType',
      vulAlias: 'VulAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      finishTime: 'string',
      fixTime: 'string',
      newTag: 'string',
      newUuid: 'string',
      oldTag: 'string',
      oldUuid: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      status: 'number',
      taskType: 'string',
      vulAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of tasks returned on the current page.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of tasks returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageFixTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tasks returned.
   */
  buildTasks?: DescribeImageFixTaskResponseBodyBuildTasks[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageFixTaskResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8AC52BBA-85D3-5F64-9B48-D08437CAF916
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTasks: 'BuildTasks',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTasks: { 'type': 'array', 'itemType': DescribeImageFixTaskResponseBodyBuildTasks },
      pageInfo: DescribeImageFixTaskResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildTasks)) {
      $dara.Model.validateArray(this.buildTasks);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

