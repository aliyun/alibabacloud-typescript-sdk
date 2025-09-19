// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnceTaskLeafRecordPageResponseBodyOnceTasksTaskImageInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * ack-jenkins-****
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the cluster.
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
   * The time consumed. The value is in the JSON format. The end time of each item is displayed.
   * 
   * *   **vul**: system vulnerabilities
   * *   **scaVul**: application vulnerabilities
   * *   **scaVul**: baseline
   * *   **binary**: binary
   * *   **forbiddenPackageInfo**: information about the prohibited package
   * *   **identificationInfo**: identity authentication
   * *   **script**: malicious scripts
   * *   **sensitiveFile**: sensitive files
   * *   **sensitiveInfo**: AccessKey pair leaks
   * *   **webshell**: website scripts
   * 
   * @example
   * {"scaVul":"2023-09-04 09:37:21","identificationInfo":"2023-09-04 09:37:30","forbiddenPackageInfo":"2023-09-04 09:37:16","binary":"2023-09-04 09:37:25","baseline":"2023-09-04 09:37:19","sensitiveFile":"2023-09-04 09:38:34","vul":"2023-09-04 09:37:31","webshell":"2023-09-04 09:38:27","sensitiveInfo":"2023-09-04 09:37:16","script":"2023-09-04 09:39:44"}
   */
  costTimeInfo?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 9e0dc29d872d2e386cc5c0c92b529a84e3acfade16f5cb1d054a2ee3c99****
   */
  digest?: string;
  /**
   * @remarks
   * The image of the container.
   * 
   * @example
   * ***s.com/sas_test/baseli***
   */
  image?: string;
  /**
   * @remarks
   * The instance ID of the node.
   * 
   * @example
   * i-0xi5mxvtmfw9****
   */
  nodeInstanceId?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 172.18.XXX.XXX
   */
  nodeIp?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * pztest****
   */
  nodeName?: string;
  /**
   * @remarks
   * The pod of the image.
   * 
   * @example
   * expoit-law-****
   */
  pod?: string;
  /**
   * @remarks
   * The region ID of the server image.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * 
   * *   **acr**
   * *   **harbor**
   * *   **quay**
   * *   **CI/CD**
   * 
   * @example
   * acr
   */
  registryType?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-r88w2vryp8m****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * testyyy
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the image repository belongs.
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
   * The tag that is added to the image.
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
   * The time when the sub-task ends.
   * 
   * @example
   * 1670307567000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the sub-task is complete.
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  finish?: number;
  /**
   * @remarks
   * The number of the assets that are scanned.
   * 
   * @example
   * 67
   */
  finishCount?: string;
  /**
   * @remarks
   * The progress percentage of the sub-task.
   * 
   * @example
   * 75
   */
  progress?: number;
  /**
   * @remarks
   * The execution duration of the sub-task.
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
   * The time when the sub-task starts.
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
   * The sub-task status. Valid values:
   * 
   * *   **INIT**: The sub-task is not started.
   * *   **START**: The sub-task is started.
   * *   **SUCCESS**: The sub-task is complete.
   * *   **TIMEOUT**: The sub-task timed out.
   * 
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @remarks
   * The objective of the sub-task.
   * 
   * @example
   * 238cf050a7270dd6940602e70f1e5a11eeaf4e02035f445b7f613ff5e064****
   */
  target?: string;
  /**
   * @remarks
   * The type of the assets that are scanned. Valid values:
   * 
   * *   **IMAGE_REPO**: image repository
   * *   **IMAGE**: image
   * 
   * @example
   * IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The sub-task ID.
   * 
   * @example
   * 9fb50f2af8bb67c9fdb684194c83****
   */
  taskId?: string;
  /**
   * @remarks
   * The information about the image scan.
   */
  taskImageInfo?: DescribeOnceTaskLeafRecordPageResponseBodyOnceTasksTaskImageInfo;
  /**
   * @remarks
   * The name of the sub-task.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the sub-task.
   * 
   * @example
   * IMAGE_SCAN
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 6
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The details of tasks.
   */
  onceTasks?: DescribeOnceTaskLeafRecordPageResponseBodyOnceTasks[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeOnceTaskLeafRecordPageResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

