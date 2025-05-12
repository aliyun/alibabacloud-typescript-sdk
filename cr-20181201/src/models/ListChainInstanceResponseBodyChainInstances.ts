// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChainInstanceResponseBodyChainInstancesChain } from "./ListChainInstanceResponseBodyChainInstancesChain";


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

