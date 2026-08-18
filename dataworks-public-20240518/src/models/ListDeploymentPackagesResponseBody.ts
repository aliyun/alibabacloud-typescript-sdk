// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackagesResponseBodyDataDeployments extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the deployment package was created.
   * 
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the deployment package creator.
   * 
   * @example
   * 2003****
   */
  creator?: string;
  /**
   * @remarks
   * The error message recorded when the deployment package fails to be executed.
   * 
   * @example
   * OK
   */
  errorMessage?: string;
  /**
   * @remarks
   * The timestamp when the deployment package was executed.
   * 
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @remarks
   * The Alibaba Cloud user ID of the deployment package executor.
   * 
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @remarks
   * The ID of the deployment package. You can use this ID to call the [GetDeployment](https://help.aliyun.com/document_detail/173950.html) operation to obtain the details of the deployment package.
   * 
   * @example
   * 11111
   */
  id?: number;
  /**
   * @remarks
   * The name of the deployment package.
   * 
   * @example
   * auto_created
   */
  name?: string;
  /**
   * @remarks
   * The current status of the deployment package. Valid values:
   * 
   * - 0: The deployment package is ready.
   * - 1: The deployment package is published.
   * - 2: The deployment package failed to be published.
   * - 6: The deployment package is rejected.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      executor: 'Executor',
      id: 'Id',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      executor: 'string',
      id: 'number',
      name: 'string',
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

export class ListDeploymentPackagesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of deployment packages.
   */
  deployments?: ListDeploymentPackagesResponseBodyDataDeployments[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries that meet the conditions.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      deployments: 'Deployments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': ListDeploymentPackagesResponseBodyDataDeployments },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.deployments)) {
      $dara.Model.validateArray(this.deployments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentPackagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of deployment packages that meet the query conditions.
   */
  data?: ListDeploymentPackagesResponseBodyData;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 952795279527ab****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeploymentPackagesResponseBodyData,
      requestId: 'string',
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

