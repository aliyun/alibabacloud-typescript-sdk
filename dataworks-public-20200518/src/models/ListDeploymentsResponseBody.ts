// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentsResponseBodyDataDeployments extends $dara.Model {
  /**
   * @remarks
   * The time when the deployment package was created.
   * 
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who created the deployment package.
   * 
   * @example
   * 2003****
   */
  creator?: string;
  /**
   * @remarks
   * The error message returned when the deployment package failed.
   * 
   * @example
   * OK
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time when the deployment package was run. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the user who ran the deployment package.
   * 
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @remarks
   * The deployment package ID. You can call the [GetDeployment](https://help.aliyun.com/document_detail/173950.html) operation to obtain the ID.
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
   * The status of the deployment package. Valid values:
   * 
   * *   0: The deployment package is ready.
   * *   1: The deployment package is deployed.
   * *   2: The deployment package fails to be deployed.
   * *   6: The deployment package is rejected.
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

export class ListDeploymentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The deployment packages.
   */
  deployments?: ListDeploymentsResponseBodyDataDeployments[];
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
   * The total number of entries returned.
   * 
   * @example
   * 13
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
      deployments: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyDataDeployments },
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

export class ListDeploymentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListDeploymentsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG
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
      data: ListDeploymentsResponseBodyData,
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

