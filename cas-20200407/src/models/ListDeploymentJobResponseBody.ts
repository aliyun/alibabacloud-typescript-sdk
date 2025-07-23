// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain names bound to the certificate of the deployment task.
   * 
   * @example
   * aliyundoc1.com,aliyundoc2.com,aliyundoc3.com
   */
  certDomain?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **buy**: purchased certificate
   * *   **free**: free certificate, available only on the China site (aliyun.com)
   * 
   * @example
   * upload
   */
  certType?: string;
  /**
   * @remarks
   * Indicates whether the deployment task is deleted. Valid values:
   * 
   * *   **0**: not deleted
   * *   **1**: deleted
   * 
   * @example
   * 1
   */
  del?: number;
  /**
   * @remarks
   * The end time of the deployment task.
   * 
   * @example
   * 1606482979000
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the deployment task was created.
   * 
   * @example
   * 1624343180000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment task was last modified.
   * 
   * @example
   * 1606482979000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the deployment task. You can use the ID to query the details and status of the deployment task.
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
   * cas-job-user-0gvntn
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the deployment task.
   * 
   * *   **cloud**: multi-cloud deployment task.
   * *   **user**: cloud service deployment task. This type of task does not support ECS instances.
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
   * The cloud service included in the resources of the deployment task.
   * 
   * @example
   * NLB
   */
  productName?: string;
  /**
   * @remarks
   * Indicates whether the rollback worker is included. For example, if a cloud service involved in a deployment task has been rolled back, **1** is returned. Valid values:
   * 
   * *   **0**: The rollback worker is not included.
   * *   **1**: The rollback worker is included.
   * 
   * @example
   * 1
   */
  rollback?: number;
  /**
   * @remarks
   * The time when the deployment task was scheduled.
   * 
   * @example
   * 1606482979000
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the deployment task.
   * 
   * @example
   * 1606482979000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the deployment task. Valid values:
   * 
   * *   **pending**
   * *   **editing**
   * *   **scheduling**
   * *   **processing**
   * *   **error**
   * *   **success**
   * 
   * @example
   * scheduling
   */
  status?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1666884372152785
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
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data returned for the request.
   */
  data?: ListDeploymentJobResponseBodyData[];
  /**
   * @remarks
   * The request ID.
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
   * 20
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

