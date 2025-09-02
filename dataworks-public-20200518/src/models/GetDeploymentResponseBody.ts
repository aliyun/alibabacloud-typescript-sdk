// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentResponseBodyDataDeployedItems extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 507642378
   */
  fileId?: number;
  /**
   * @remarks
   * The version of the file.
   * 
   * @example
   * 7
   */
  fileVersion?: number;
  /**
   * @remarks
   * - UNPUBLISHED(0): not published
   * - SUCCESS(1): Published
   * - ERROR(2): Publishing failed
   * - CLONED(3): successfully CLONED
   * - DEPLOY_ERROR(4): Publishing failed
   * - CLONING(5): CLONING
   * - REJECT(6): release rejected
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileVersion: 'FileVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileVersion: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyDataDeployment extends $dara.Model {
  /**
   * @remarks
   * The check status of one or more files in the deployment task. If the value of the ToEnvironment parameter is 1, the files can be deployed to the production environment only when the value of the Status parameter is 1 and the CheckingStatus parameter is empty. Valid values:
   * 
   * *   7: The file failed the check.
   * *   8: The file is being checked.
   * 
   * @example
   * 7
   */
  checkingStatus?: number;
  /**
   * @remarks
   * The time when the deployment task was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who created the deployment task.
   * 
   * @example
   * 20030****
   */
  creatorId?: string;
  /**
   * @remarks
   * The error message that was returned when the deployment package failed. In this case, the value of the Status parameter is 2.
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the deployment task was run. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @remarks
   * The environment in which the deployment task was run. Valid values: 0 and 1. A value of 0 indicates the on-premises environment. A value of 1 indicates the development environment.
   * 
   * @example
   * 0
   */
  fromEnvironment?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who ran the deployment task.
   * 
   * @example
   * 2003****
   */
  handlerId?: string;
  /**
   * @remarks
   * The name of the deployment task. The value is the same as the name of the specific deployment task that is displayed on the Release Package page in the Deploy module.
   * 
   * @example
   * ods_user_info_d-2020-07-04_20030****
   */
  name?: string;
  /**
   * @remarks
   * The status of the deployment task. Valid values: 0, 1, and 2. A value of 0 indicates that the task is ready. A value of 1 indicates that the task was successful. A value of 2 indicates that the task failed.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The environment to which the file was deployed. Valid values: 1 and 2. A value of 1 indicates the development environment. A value of 2 indicates the production environment.
   * 
   * @example
   * 1
   */
  toEnvironment?: number;
  static names(): { [key: string]: string } {
    return {
      checkingStatus: 'CheckingStatus',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      fromEnvironment: 'FromEnvironment',
      handlerId: 'HandlerId',
      name: 'Name',
      status: 'Status',
      toEnvironment: 'ToEnvironment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingStatus: 'number',
      createTime: 'number',
      creatorId: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      fromEnvironment: 'number',
      handlerId: 'string',
      name: 'string',
      status: 'number',
      toEnvironment: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deployed items.
   */
  deployedItems?: GetDeploymentResponseBodyDataDeployedItems[];
  /**
   * @remarks
   * The details of the deployment package.
   */
  deployment?: GetDeploymentResponseBodyDataDeployment;
  static names(): { [key: string]: string } {
    return {
      deployedItems: 'DeployedItems',
      deployment: 'Deployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedItems: { 'type': 'array', 'itemType': GetDeploymentResponseBodyDataDeployedItems },
      deployment: GetDeploymentResponseBodyDataDeployment,
    };
  }

  validate() {
    if(Array.isArray(this.deployedItems)) {
      $dara.Model.validateArray(this.deployedItems);
    }
    if(this.deployment && typeof (this.deployment as any).validate === 'function') {
      (this.deployment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the deployment package.
   */
  data?: GetDeploymentResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request. You can troubleshoot errors based on the ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDeploymentResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

