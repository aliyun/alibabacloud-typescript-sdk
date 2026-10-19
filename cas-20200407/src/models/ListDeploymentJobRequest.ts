// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate ID.
   * > You can obtain this ID by calling the [ListUserCertificateOrder](https://help.aliyun.com/document_detail/455804.html) operation.
   * 
   * @example
   * 23982365
   */
  certId?: number;
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
   * The instance ID.
   * 
   * @example
   * cas-ivauto-hqito6
   */
  instanceId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * user
   */
  jobType?: string;
  /**
   * @remarks
   * The paging Settings for the number of certificates to return on each page during a paged query. Default value: **50**.
   * 
   * @example
   * 50
   */
  showSize?: number;
  /**
   * @remarks
   * The deployment task status.
   * 
   * @example
   * pending
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      currentPage: 'CurrentPage',
      instanceId: 'InstanceId',
      jobType: 'JobType',
      showSize: 'ShowSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'number',
      currentPage: 'number',
      instanceId: 'string',
      jobType: 'string',
      showSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

