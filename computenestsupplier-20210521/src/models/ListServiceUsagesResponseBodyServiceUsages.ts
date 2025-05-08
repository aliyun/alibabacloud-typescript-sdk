// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceUsagesResponseBodyServiceUsages extends $dara.Model {
  /**
   * @remarks
   * The comment on the approval.
   * 
   * @example
   * Reject
   */
  comments?: string;
  /**
   * @remarks
   * The time when the application was created.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  createTime?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-c9f36ec6d19b4exxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * ServiceTest
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the service application. Valid values:
   * 
   * *   Submitted: The application is submitted or is to be approved.
   * *   Approved: The application is approved.
   * *   Rejected: The application is rejected.
   * *   Canceled: The application is canceled.
   * 
   * @example
   * Submitted
   */
  status?: string;
  /**
   * @remarks
   * The name of the service provider.
   * 
   * @example
   * SupplierAAA
   */
  supplierName?: string;
  /**
   * @remarks
   * The time when the application was updated.
   * 
   * @example
   * 2022-05-25T02:02:02Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 127383705958xxxx
   */
  userAliUid?: number;
  /**
   * @remarks
   * The user information.
   */
  userInformation?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      createTime: 'CreateTime',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      supplierName: 'SupplierName',
      updateTime: 'UpdateTime',
      userAliUid: 'UserAliUid',
      userInformation: 'UserInformation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      createTime: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      supplierName: 'string',
      updateTime: 'string',
      userAliUid: 'number',
      userInformation: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.userInformation) {
      $dara.Model.validateMap(this.userInformation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

