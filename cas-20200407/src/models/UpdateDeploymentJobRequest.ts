// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate. Separate multiple certificate IDs with commas (,). You can call the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation to obtain the ID of a certificate from the **CertificateId** parameter.
   * 
   * @example
   * 9957285,12067351,12304338,12342649
   */
  certIds?: string;
  /**
   * @remarks
   * The ID of the contact. Separate multiple contact IDs with commas (,). You can call the [ListContact](https://help.aliyun.com/document_detail/2712221.html) operation to obtain the ID of a contact from the **ContactId** parameter.
   * 
   * @example
   * 9957285,12067351,12304338,12342649
   */
  contactIds?: string;
  /**
   * @remarks
   * The ID of the deployment task. You can call the [CreateDeploymentJob](https://help.aliyun.com/document_detail/2712234.html) operation to obtain the ID of a deployment task from the JobId parameter. You can also call the [ListDeploymentJob](https://help.aliyun.com/document_detail/2712223.html) operation to obtain the ID of a deployment task.
   * 
   * This parameter is required.
   * 
   * @example
   * 8888
   */
  jobId?: number;
  /**
   * @remarks
   * The name of the deployment task.
   * 
   * @example
   * cert-1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the cloud resource. Separate multiple resource IDs with commas (,). You can call the [ListCloudResources](https://help.aliyun.com/document_detail/2712230.html) operation to obtain the ID of a cloud resource from the **Id** parameter.
   * 
   * @example
   * 9957285,12067351,12304338,12342649
   */
  resourceIds?: string;
  /**
   * @remarks
   * The time when the task starts. The value is a UNIX timestamp. If you do not specify this parameter, the system immediately starts the task after it is created.
   * 
   * @example
   * 1606482979000
   */
  scheduleTime?: number;
  static names(): { [key: string]: string } {
    return {
      certIds: 'CertIds',
      contactIds: 'ContactIds',
      jobId: 'JobId',
      name: 'Name',
      resourceIds: 'ResourceIds',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIds: 'string',
      contactIds: 'string',
      jobId: 'number',
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

