// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChainInstanceResponseBodyChainInstancesChain extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * chi-m42gbku0****
   */
  chainId?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * test-chain
   */
  chainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      chainName: 'ChainName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      chainName: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBodyChainInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   */
  chain?: ListChainInstanceResponseBodyChainInstancesChain;
  /**
   * @remarks
   * 1
   * 
   * @example
   * F4CF4DDB-BEF2-5575-****-*******
   */
  chainInstanceId?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * 1636685856000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The execution result of the delivery chain. Valid values:
   * 
   * *   `SUCCESS`
   * *   `FAILED`
   * *   `CANCELED`
   * *   `DENIED`
   * 
   * @example
   * test-ns
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The list of the execution records of delivery chains.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * test-repo
   * 
   * @example
   * 1636685776000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the delivery chain. Valid values:
   * 
   * *   `RUNNING`
   * *   `COMPLETE`
   * *   `CANCELING`
   * *   `CANCELED`
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      chainInstanceId: 'ChainInstanceId',
      endTime: 'EndTime',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: ListChainInstanceResponseBodyChainInstancesChain,
      chainInstanceId: 'string',
      endTime: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.chain && typeof (this.chain as any).validate === 'function') {
      (this.chain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   */
  chainInstances?: ListChainInstanceResponseBodyChainInstances[];
  /**
   * @remarks
   * The version of the delivery chain.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution record of the delivery chain.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * 30
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * 838D1602-6D8F-47FB-B60A-656645D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chainInstances: 'ChainInstances',
      code: 'Code',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainInstances: { 'type': 'array', 'itemType': ListChainInstanceResponseBodyChainInstances },
      code: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chainInstances)) {
      $dara.Model.validateArray(this.chainInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

