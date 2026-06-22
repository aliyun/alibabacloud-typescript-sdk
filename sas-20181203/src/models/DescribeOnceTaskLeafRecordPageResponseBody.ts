// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskLeafRecordPageResponseBodyOnceTasksTaskImageInfo extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * ack-jenkins-****
   */
  appName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * a765ba1435e7f9446065370e9a41****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ACK-test-****
   */
  clusterName?: string;
  /**
   * @remarks
   * The time consumption statistics in JSON format, showing the end time of each item. Valid values:
   * - **vul**: System vulnerability.
   * - **scaVul**: Application vulnerability.
   * - **baseline**: Baseline.
   * - **binary**: Binary.
   * - **forbiddenPackageInfo**: Forbidden installation.
   * - **identificationInfo**: Identity authentication.
   * - **script**: Malicious script.
   * - **sensitiveFile**: Sensitive file.
   * - **sensitiveInfo**: AK detection.
   * - **webshell**: Web shell.
   * 
   * @example
   * {"scaVul":"2023-09-04 09:37:21","identificationInfo":"2023-09-04 09:37:30","forbiddenPackageInfo":"2023-09-04 09:37:16","binary":"2023-09-04 09:37:25","baseline":"2023-09-04 09:37:19","sensitiveFile":"2023-09-04 09:38:34","vul":"2023-09-04 09:37:31","webshell":"2023-09-04 09:38:27","sensitiveInfo":"2023-09-04 09:37:16","script":"2023-09-04 09:39:44"}
   */
  costTimeInfo?: string;
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * 9e0dc29d872d2e386cc5c0c92b529a84e3acfade16f5cb1d054a2ee3c99****
   */
  digest?: string;
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * ***s.com/sas_test/baseli***
   */
  image?: string;
  /**
   * @remarks
   * The node instance ID.
   * 
   * @example
   * i-0xi5mxvtmfw9****
   */
  nodeInstanceId?: string;
  /**
   * @remarks
   * The node IP address.
   * 
   * @example
   * 172.18.XXX.XXX
   */
  nodeIp?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * pztest****
   */
  nodeName?: string;
  /**
   * @remarks
   * The image pod information.
   * 
   * @example
   * expoit-law-****
   */
  pod?: string;
  /**
   * @remarks
   * The region where the server image is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * - **acr**: acr.
   * - **harbor**: harbor.
   * - **quay**: quay.
   * - **CI/CD**: CI/CD repository type.
   * 
   * @example
   * acr
   */
  registryType?: string;
  /**
   * @remarks
   * The image repository ID.
   * 
   * @example
   * crr-r88w2vryp8m****
   */
  repoId?: string;
  /**
   * @remarks
   * The image repository name.
   * 
   * @example
   * testyyy
   */
  repoName?: string;
  /**
   * @remarks
   * The image namespace.
   * 
   * @example
   * bitn***
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The region ID of the image repository.
   * 
   * @example
   * cn-hangzhou
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v1.20-002-a2*****
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      costTimeInfo: 'CostTimeInfo',
      digest: 'Digest',
      image: 'Image',
      nodeInstanceId: 'NodeInstanceId',
      nodeIp: 'NodeIp',
      nodeName: 'NodeName',
      pod: 'Pod',
      regionId: 'RegionId',
      registryType: 'RegistryType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoRegionId: 'RepoRegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      costTimeInfo: 'string',
      digest: 'string',
      image: 'string',
      nodeInstanceId: 'string',
      nodeIp: 'string',
      nodeName: 'string',
      pod: 'string',
      regionId: 'string',
      registryType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoRegionId: 'string',
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

export class DescribeOnceTaskLeafRecordPageResponseBodyOnceTasks extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1670307567000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the task is completed. Valid values:
   * - **0**: Not completed.
   * - **1**: Completed.
   * 
   * @example
   * 1
   */
  finish?: number;
  /**
   * @remarks
   * The number of completed records.
   * 
   * @example
   * 67
   */
  finishCount?: string;
  /**
   * @remarks
   * The export progress percentage (%).
   * 
   * @example
   * 75
   */
  progress?: number;
  /**
   * @remarks
   * The task execution time.
   * 
   * @example
   * 1670307567000
   */
  realRunTime?: number;
  /**
   * @remarks
   * The execution result.
   * 
   * @example
   * TASK_NOT_SUPPORT_REGION
   */
  resultInfo?: string;
  /**
   * @remarks
   * The start execution time.
   * 
   * @example
   * 1640102400000
   */
  startTime?: number;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The running status of the task. Valid values:
   * - **INIT**: Pending.
   * - **START**: Started.
   * - **SUCCESS**: Completed.
   * - **TIMEOUT**: Timed out.
   * 
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @remarks
   * The task target.
   * 
   * @example
   * 238cf050a7270dd6940602e70f1e5a11eeaf4e02035f445b7f613ff5e064****
   */
  target?: string;
  /**
   * @remarks
   * The scan object type. Valid values:
   * - **IMAGE_REPO**: Image repository.
   * - **IMAGE**: Image.
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 9fb50f2af8bb67c9fdb684194c83****
   */
  taskId?: string;
  /**
   * @remarks
   * The image scan-related information.
   */
  taskImageInfo?: DescribeOnceTaskLeafRecordPageResponseBodyOnceTasksTaskImageInfo;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of records. This parameter takes effect in a paged query with paging enabled.
   * 
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      finish: 'Finish',
      finishCount: 'FinishCount',
      progress: 'Progress',
      realRunTime: 'RealRunTime',
      resultInfo: 'ResultInfo',
      startTime: 'StartTime',
      status: 'Status',
      statusText: 'StatusText',
      target: 'Target',
      targetType: 'TargetType',
      taskId: 'TaskId',
      taskImageInfo: 'TaskImageInfo',
      taskName: 'TaskName',
      taskType: 'TaskType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      finish: 'number',
      finishCount: 'string',
      progress: 'number',
      realRunTime: 'number',
      resultInfo: 'string',
      startTime: 'number',
      status: 'string',
      statusText: 'string',
      target: 'string',
      targetType: 'string',
      taskId: 'string',
      taskImageInfo: DescribeOnceTaskLeafRecordPageResponseBodyOnceTasksTaskImageInfo,
      taskName: 'string',
      taskType: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.taskImageInfo && typeof (this.taskImageInfo as any).validate === 'function') {
      (this.taskImageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOnceTaskLeafRecordPageResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of records on the current page in a paged query.
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records in the query result.
   * 
   * @example
   * 16
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

export class DescribeOnceTaskLeafRecordPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of task details.
   */
  onceTasks?: DescribeOnceTaskLeafRecordPageResponseBodyOnceTasks[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeOnceTaskLeafRecordPageResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID generated by Alibaba Cloud for this request. You can use it to troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB393****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onceTasks: 'OnceTasks',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onceTasks: { 'type': 'array', 'itemType': DescribeOnceTaskLeafRecordPageResponseBodyOnceTasks },
      pageInfo: DescribeOnceTaskLeafRecordPageResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onceTasks)) {
      $dara.Model.validateArray(this.onceTasks);
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

