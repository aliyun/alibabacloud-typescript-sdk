// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate IDs. Separate multiple IDs with commas (,). The ID is the **CertificateId** returned by [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 12342649,12304338,12067351,9957285
   */
  certIds?: string;
  /**
   * @remarks
   * The contact IDs. Separate multiple IDs with commas (,). The ID is the primary key **Id** returned by [ListContact](https://help.aliyun.com/document_detail/2712221.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  contactIds?: string;
  /**
   * @remarks
   * The type of the task.
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
   * The IDs of the cloud service resources. Separate multiple IDs with commas (,). The ID is the primary key **Id** returned by [ListCloudResources](https://help.aliyun.com/document_detail/2712230.html).
   * 
   * [ListCloudResources](https://help.aliyun.com/document_detail/2712230.html) returns the existing cloud infrastructure resources (such as SLB, ALB, CDN, WAF, and DCDN instances) under your account. Certificate Management Service does not provide operations to create these resources. You must create the resources by using the API operations (such as CreateLoadBalancer) or the console of the corresponding cloud service before you can query them by calling [ListCloudResources](https://help.aliyun.com/document_detail/2712230.html) and use them in this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 6591316,6585549,6190248,5811894,5775176,5772504
   */
  resourceIds?: string;
  /**
   * @remarks
   * The time when the task is scheduled to start. The value is a UNIX timestamp. If you do not specify this parameter, the deployment is immediately executed when the task enters the pending execution state.
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

