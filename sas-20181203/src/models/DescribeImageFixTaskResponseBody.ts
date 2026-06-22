// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageFixTaskResponseBodyBuildTasks extends $dara.Model {
  /**
   * @remarks
   * The ID of the image repair task.
   * 
   * @example
   * ivf-939536b5-c3ca-427b-8183-91007756
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The timestamp when the repair task started. Unit: milliseconds.
   * 
   * @example
   * 2021-10-14 20:34:07
   */
  finishTime?: string;
  /**
   * @remarks
   * The timestamp when the repair task ended. Unit: milliseconds.
   * 
   * @example
   * 2021-10-14 20:32:05
   */
  fixTime?: string;
  /**
   * @remarks
   * The tag of the repaired image.
   * 
   * @example
   * redhat8-vault
   */
  newTag?: string;
  /**
   * @remarks
   * The UUID of the repaired image.
   * 
   * @example
   * 2fa731681911ae8d1b5f11893ace****
   */
  newUuid?: string;
  /**
   * @remarks
   * The tag of the original image.
   * 
   * @example
   * centos8.1-ja
   */
  oldTag?: string;
  /**
   * @remarks
   * The UUID of the original image.
   * 
   * @example
   * 2fa731681911ae8d1b5f11893ace****
   */
  oldUuid?: string;
  /**
   * @remarks
   * The region ID of the image.
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
   * The status of the image repair task. Valid values:
   * 
   * - **1**: Repairing
   * - **2**: Repaired
   * - **3**: Repair failed
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The type of the image repair task. The value is fixed as IMAGE_REPAIR, which indicates image repair.
   * 
   * @example
   * IMAGE_REPAIR
   */
  taskType?: string;
  /**
   * @remarks
   * The name of the vulnerability that was repaired.
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
   * The number of image repair tasks on the current page.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The page number of the results returned. Default value: **1**, which indicates that the results start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in a paginated query. Default value: **20**, which indicates that up to 20 entries are returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of image repair tasks.
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
   * The details of the image repair tasks.
   */
  buildTasks?: DescribeImageFixTaskResponseBodyBuildTasks[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageFixTaskResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
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

