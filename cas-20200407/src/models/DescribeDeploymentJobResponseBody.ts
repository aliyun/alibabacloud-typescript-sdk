// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeploymentJobResponseBodyCasContacts extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * username@example.com
   */
  email?: string;
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * 3304
   */
  id?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 139****0000
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * zhangsan
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      mobile: 'Mobile',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'string',
      mobile: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeploymentJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the contact.
   */
  casContacts?: DescribeDeploymentJobResponseBodyCasContacts[];
  /**
   * @remarks
   * The domain names bound to the certificate of the deployment task.
   * 
   * @example
   * example.aliyundoc.com,demo.aliyundoc.com
   */
  certDomain?: string;
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **upload**: uploaded certificate
   * *   **buy**: purchased certificate
   * *   **free**: free certificate available only on the China site (aliyun.com)
   * 
   * @example
   * buy
   */
  certType?: string;
  /**
   * @remarks
   * The configurations of the deployment task.
   * 
   * @example
   * {\\"shareCertIds\\":[],\\"certIds\\":[12342649,12304338,12067351,9957285]}
   */
  config?: string;
  /**
   * @remarks
   * Indicates whether the deployment job was deleted. Valid values:
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
   * The end time of the deployment job. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the deployment job was created. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the deployment job was last modified. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the deployment job.
   * 
   * @example
   * 8888
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the deployment task.
   * 
   * @example
   * 14dcc8afc7578e1f
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the deployment job. Valid values:
   * 
   * *   **cloud**: multi-cloud deployment job.
   * *   **trustee**: hosted deployment job available only on the China site (aliyun.com).
   * *   **user**: cloud service deployment job. The cloud server is not included.
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
   * auto-test-AXX
   */
  name?: string;
  /**
   * @remarks
   * The cloud services included in the deployment task.
   * 
   * @example
   * CDN
   */
  productName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the deployment job includes the rollback worker. For example, if a cloud service in a deployment job has been rolled back, **1** is returned. Valid values:
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
   * The time when the deployment job was scheduled. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1678083209335
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The start time of the deployment job. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679541809000
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the deployment job. Valid values:
   * 
   * *   **pending**
   * *   **editing**
   * *   **scheduling**
   * *   **processing**
   * *   **error**
   * *   **success**
   * 
   * @example
   * editing
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in which the deployment job is created.
   * 
   * @example
   * 166688437XXXX785
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      casContacts: 'CasContacts',
      certDomain: 'CertDomain',
      certType: 'CertType',
      config: 'Config',
      del: 'Del',
      endTime: 'EndTime',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      name: 'Name',
      productName: 'ProductName',
      requestId: 'RequestId',
      rollback: 'Rollback',
      scheduleTime: 'ScheduleTime',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casContacts: { 'type': 'array', 'itemType': DescribeDeploymentJobResponseBodyCasContacts },
      certDomain: 'string',
      certType: 'string',
      config: 'string',
      del: 'number',
      endTime: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      instanceId: 'string',
      jobType: 'string',
      name: 'string',
      productName: 'string',
      requestId: 'string',
      rollback: 'number',
      scheduleTime: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.casContacts)) {
      $dara.Model.validateArray(this.casContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

