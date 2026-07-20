// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain names included in the certificate of the deployment task.
   * 
   * @example
   * aliyundoc1.com,aliyundoc2.com,aliyundoc3.com
   */
  certDomain?: string;
  /**
   * @remarks
   * The certificate type. Valid values:
   * 
   * - **upload**: uploaded certificate
   * - **buy**: purchased certificate
   * - **free**: personal test certificate (supported only on the China site)
   * 
   * @example
   * upload
   */
  certType?: string;
  /**
   * @remarks
   * The deletion flag. This parameter has no practical significance. Valid values:
   * 
   * - **0**: not deleted.
   * - **1**: deleted.
   * 
   * @example
   * 1
   */
  del?: number;
  /**
   * @remarks
   * The end time of the deployment task execution, in UNIX timestamp format (seconds).
   * 
   * @example
   * 1606482979000
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the deployment task was created, in UNIX timestamp format (seconds).
   * 
   * @example
   * 1624343180000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment task was last modified, in UNIX timestamp format (seconds).
   * 
   * @example
   * 1606482979000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The deployment task ID. You can use this ID to query the deployment task details and status.
   * 
   * @example
   * 19975
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the deployment task.
   * 
   * @example
   * cas-job-user-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - **cloud**: multi-cloud deployment task.
   * - **user**: cloud service deployment task (excluding ECS instances).
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * @example
   * job-test
   */
  name?: string;
  /**
   * @remarks
   * The cloud services included in the deployment task resources.
   * 
   * @example
   * NLB
   */
  productName?: string;
  /**
   * @remarks
   * Indicates whether the task contains a rollback worker. For example, if a cloud service in the task has been rolled back, the value **1** is returned. Valid values:
   * 
   * - **0**: does not contain a rollback worker.
   * - **1**: contains a rollback worker.
   * 
   * @example
   * 1
   */
  rollback?: number;
  /**
   * @remarks
   * The scheduled time of the task, in UNIX timestamp format (seconds).
   * 
   * @example
   * 1606482979000
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the deployment task execution, in UNIX timestamp format (seconds).
   * 
   * @example
   * 1606482979000
   */
  startTime?: string;
  /**
   * @remarks
   * The deployment task status. Valid values:
   * 
   * - **pending**: pending execution.
   * - **editing**: being edited.
   * - **scheduling**: being scheduled.
   * - **processing**: being deployed.
   * - **error**: deployment failed.
   * - **success**: deployment succeeded.
   * 
   * @example
   * scheduling
   */
  status?: string;
  /**
   * @remarks
   * The user account ID (UID).
   * 
   * @example
   * 166688437*****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      certDomain: 'CertDomain',
      certType: 'CertType',
      del: 'Del',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      name: 'Name',
      productName: 'ProductName',
      rollback: 'Rollback',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certDomain: 'string',
      certType: 'string',
      del: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobType: 'string',
      name: 'string',
      productName: 'string',
      rollback: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data returned by the API.
   */
  data?: ListDeploymentJobResponseBodyData[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  /**
   * @remarks
   * The number of deployment tasks per page. Default value: **50**.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of deployment tasks returned.
   * 
   * @example
   * 7
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListDeploymentJobResponseBodyData },
      requestId: 'string',
      showSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

