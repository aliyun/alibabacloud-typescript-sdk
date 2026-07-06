// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChainInstanceResponseBodyChainInstancesChain extends $dara.Model {
  /**
   * @remarks
   * The delivery chain ID.
   * 
   * @example
   * chi-m42gbku0****
   */
  chainId?: string;
  /**
   * @remarks
   * The delivery chain name.
   * 
   * @example
   * test-chain
   */
  chainName?: string;
  /**
   * @remarks
   * The delivery chain version.
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
   * The delivery chain execution record.
   */
  chain?: ListChainInstanceResponseBodyChainInstancesChain;
  /**
   * @remarks
   * The delivery chain instance ID.
   * 
   * @example
   * F4CF4DDB-BEF2-5575-****-*******
   */
  chainInstanceId?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1636685856000
   */
  endTime?: number;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-ns
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The execution result of the delivery chain. Valid values:
   * 
   * - `SUCCESS`: Succeeded.
   * - `FAILED`: Failed.
   * - `CANCELED`: Canceled.
   * - `DENIED`: Denied.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1636685776000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the delivery chain. Valid values:
   * 
   * - `RUNNING`: Running.
   * - `COMPLETE`: Complete.
   * - `CANCELING`: Canceling.
   * - `CANCELED`: Canceled.
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
   * The list of delivery chain execution records.
   */
  chainInstances?: ListChainInstanceResponseBodyChainInstances[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 838D1602-6D8F-47FB-B60A-656645D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

