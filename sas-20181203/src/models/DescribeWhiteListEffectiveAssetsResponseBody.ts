// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListEffectiveAssetsResponseBodyAssets extends $dara.Model {
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 60.205.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The name of the server.
   * 
   * @example
   * test
   */
  machineName?: string;
  /**
   * @remarks
   * The exception handling mode. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: alerted
   * *   **2**: blocked
   * 
   * @example
   * 1
   */
  processMethod?: number;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 35815387
   */
  strategyId?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The number of **untrusted programs** on the server.
   * 
   * @example
   * 5
   */
  suspiciousEventCount?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 544900ff-1be7-4655-9719-6311cecb3****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      machineName: 'MachineName',
      processMethod: 'ProcessMethod',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      suspiciousEventCount: 'SuspiciousEventCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetIp: 'string',
      intranetIp: 'string',
      machineName: 'string',
      processMethod: 'number',
      strategyId: 'number',
      strategyName: 'string',
      suspiciousEventCount: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhiteListEffectiveAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The servers on which the policy takes effect.
   */
  assets?: DescribeWhiteListEffectiveAssetsResponseBodyAssets[];
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB39****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the servers on which the policy takes effect.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assets: 'Assets',
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assets: { 'type': 'array', 'itemType': DescribeWhiteListEffectiveAssetsResponseBodyAssets },
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assets)) {
      $dara.Model.validateArray(this.assets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

