// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactSubscriptionTaskResultResponseBodyTaskResults extends $dara.Model {
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1692756630000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-isj2wgaw4z9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message returned when the task fails.
   * 
   * @example
   * Tag not found.
   */
  message?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test-reop
   */
  repoName?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1691719501000
   */
  startTime?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v2.0
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-wkpfwqozjiq****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      message: 'Message',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      message: 'string',
      namespaceName: 'string',
      repoName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
      tag: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Specifies whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
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
   * The request ID.
   * 
   * @example
   * 0A8768F6-9B47-5127-A075-9CFB9F79181F
   */
  requestId?: string;
  /**
   * @remarks
   * The image task results.
   */
  taskResults?: GetArtifactSubscriptionTaskResultResponseBodyTaskResults[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskResults: 'TaskResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskResults: { 'type': 'array', 'itemType': GetArtifactSubscriptionTaskResultResponseBodyTaskResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskResults)) {
      $dara.Model.validateArray(this.taskResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

