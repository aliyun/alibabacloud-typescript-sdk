// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentPackageResponseBodyDataDeployedItems extends $dara.Model {
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 5076****
   */
  fileId?: number;
  /**
   * @remarks
   * The file version.
   * 
   * @example
   * 7
   */
  fileVersion?: number;
  /**
   * @remarks
   * *   UNPUBLISHED(0)
   * *   SUCCESS(1)
   * *   ERROR(2)
   * *   CLONED(3)
   * *   DEPLOY_ERROR(4)
   * *   CLONING(5)
   * *   REJECT(6)
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
   * The validation status of nodes in the deployment package. For packages deployed to the development environment (toEnviroment=1), you can only proceed to deploy to production if the package Status is 1 (succeeded) and CheckingStatus is empty (validation complete).
   * 
   * *   7: Validation failed
   * *   8: Validation in progress
   * 
   * @example
   * 7
   */
  checkingStatus?: number;
  /**
   * @remarks
   * The timestamp (in milliseconds) when the deployment package was created.
   * 
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who created the deployment package.
   * 
   * @example
   * 20030****
   */
  creatorId?: string;
  /**
   * @remarks
   * The detailed error message when the deployment package fails (status is 2).
   * 
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @remarks
   * The timestamp (in milliseconds) when the deployment started.
   * 
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @remarks
   * The environment where the deployment is executed. Valid values: 0 (local) and 1 (development).
   * 
   * @example
   * 0
   */
  fromEnvironment?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the user who executed the deployment.
   * 
   * @example
   * 2003****
   */
  handlerId?: string;
  /**
   * @remarks
   * The deployment package name, displayed on the Deploy Center > Deployment Packages page.
   * 
   * @example
   * ods_user_info_d-2020-07-04_20030****
   */
  name?: string;
  /**
   * @remarks
   * The current status of the deployment package. Valid values: 0 (ready), 1 (succeeded), and 2 (failed).
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The target environment for the deployment. Valid values: 1 (development) and 2 (production).
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
   * The deployment item details.
   */
  deployedItems?: GetDeploymentPackageResponseBodyDataDeployedItems[];
  /**
   * @remarks
   * The deployment package details.
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
   * The deployment package details.
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
   * The request ID. Use this ID to locate logs and troubleshoot issues.
   * 
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. Valid values:
   * 
   * *   **true**
   * *   **false**
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

