// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentPackageResponseBodyDataDeployedItems extends $dara.Model {
  /**
   * @example
   * 5076****
   */
  fileId?: number;
  /**
   * @example
   * 7
   */
  fileVersion?: number;
  /**
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
   * @example
   * 7
   */
  checkingStatus?: number;
  /**
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @example
   * 20030****
   */
  creatorId?: string;
  /**
   * @example
   * Success
   */
  errorMessage?: string;
  /**
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @example
   * 0
   */
  fromEnvironment?: number;
  /**
   * @example
   * 2003****
   */
  handlerId?: string;
  /**
   * @example
   * ods_user_info_d-2020-07-04_20030****
   */
  name?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
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
  deployedItems?: GetDeploymentPackageResponseBodyDataDeployedItems[];
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
  data?: GetDeploymentPackageResponseBodyData;
  /**
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @example
   * You have no permission.
   */
  errorMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 0bc1ec92159376****
   */
  requestId?: string;
  /**
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

