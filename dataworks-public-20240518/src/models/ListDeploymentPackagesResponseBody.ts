// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackagesResponseBodyDataDeployments extends $dara.Model {
  /**
   * @example
   * 1593877765000
   */
  createTime?: number;
  /**
   * @example
   * 2003****
   */
  creator?: string;
  /**
   * @example
   * OK
   */
  errorMessage?: string;
  /**
   * @example
   * 1593877765000
   */
  executeTime?: number;
  /**
   * @example
   * 2003****
   */
  executor?: string;
  /**
   * @example
   * 11111
   */
  id?: number;
  /**
   * @example
   * auto_created
   */
  name?: string;
  /**
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
  deployments?: ListDeploymentPackagesResponseBodyDataDeployments[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
  data?: ListDeploymentPackagesResponseBodyData;
  /**
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

