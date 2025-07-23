// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Separate multiple certificate IDs with commas (,). You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the IDs of certificates from the **CertificateId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 12342649,12304338,12067351,9957285
   */
  certIds?: string;
  /**
   * @remarks
   * The ID of the contact. Separate multiple contact IDs with commas (,). You can call the [ListContact](https://help.aliyun.com/document_detail/2712221.html) operation to obtain the IDs of contacts from the **ContactId** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  contactIds?: string;
  /**
   * @remarks
   * The type of the deployment task.
   * 
   * Valid values:
   * 
   * *   cloud: multi-cloud deployment task.
   * *   user: cloud service deployment task. This type of task does not support cloud servers.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * jobName
   */
  name?: string;
  /**
   * @remarks
   * The ID of the cloud resource. Separate multiple resource IDs with commas (,). You can call the [ListCloudResources](https://help.aliyun.com/document_detail/2712230.html) operation to obtain the IDs of cloud resources from the **Id** parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 6591316,6585549,6190248,5811894,5775176,5772504
   */
  resourceIds?: string;
  /**
   * @remarks
   * The time when the task starts. The value is a UNIX timestamp. If you do not specify this parameter, the system immediately starts the task after the task is in the pending state.
   * 
   * @example
   * 1706613560008
   */
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      contactIds: 'ContactIds',
      jobType: 'JobType',
      name: 'Name',
      resourceIds: 'ResourceIds',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      contactIds: 'string',
      jobType: 'string',
      name: 'string',
      resourceIds: 'string',
      scheduleTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

