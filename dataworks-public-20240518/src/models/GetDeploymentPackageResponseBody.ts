// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentPackageResponseBodyDataDeployedItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 5076****
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
   * The status of the deployed item. Valid values:
   * 
   * - UNPUBLISHED(0): not published
   * - SUCCESS(1): published successfully
   * - ERROR(2): publishing failed
   * - CLONED(3): cloned successfully
   * - DEPLOY_ERROR(4): publishing failed
   * - CLONING(5): cloning in progress
   * - REJECT(6): publishing rejected
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

export class GetDeploymentPackageResponseBodyDataDeployment extends $dara.Model {
  /**
   * @remarks
   * The check status of the nodes involved in the deployment package. When the target environment is the development environment (toEnvironment=1), you can publish the file to the production environment only when the Status of the deployment package is 1 and CheckingStatus is empty.
   * 
   * - 7: The check failed.
   * - 8: The check is in progress.
   * 
   * @example
   * 7
   */
  checkingStatus?: number;
  /**
   * @remarks
   * The timestamp when the deployment package was generated, in milliseconds.
   * 
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the user who created the deployment package.
   * 
   * @example
   * 20030****
   */
  creatorId?: string;
  /**
   * @remarks
   * The error message recorded when the deployment package fails to run (status is 2).
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The timestamp when the deployment package started to run, in milliseconds.
   * 
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @remarks
   * The environment from which the deployment is initiated. Valid values:
   * 
   * - 0: local
   * - 1: development environment
   * 
   * @example
   * 0
   */
  fromEnvironment?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the user who executed the deployment package.
   * 
   * @example
   * 2003****
   */
  handlerId?: string;
  /**
   * @remarks
   * The name of the deployment package, which is displayed on the Task Publish > Deployment Package List page.
   * 
   * @example
   * ods_user_info_d-2020-07-04_20030****
   */
  name?: string;
  /**
   * @remarks
   * The current status of the deployment package. Valid values:
   * 
   * - 0: ready
   * - 1: successful
   * - 2: failed
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The target environment to which the file information is published. Valid values:
   * 
   * - 1: development environment
   * - 2: production environment
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

export class GetDeploymentPackageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the deployed items.
   */
  deployedItems?: GetDeploymentPackageResponseBodyDataDeployedItems[];
  /**
   * @remarks
   * The details of the deployment package.
   */
  deployment?: GetDeploymentPackageResponseBodyDataDeployment;
  static names(): { [key: string]: string } {
    return {
      deployedItems: 'DeployedItems',
      deployment: 'Deployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedItems: { 'type': 'array', 'itemType': GetDeploymentPackageResponseBodyDataDeployedItems },
      deployment: GetDeploymentPackageResponseBodyDataDeployment,
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

export class GetDeploymentPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the deployment package.
   */
  data?: GetDeploymentPackageResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You have no permission.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
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
      data: GetDeploymentPackageResponseBodyData,
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

