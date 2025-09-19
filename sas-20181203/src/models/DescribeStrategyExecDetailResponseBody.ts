// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyExecDetailResponseBodyFailedEcsList extends $dara.Model {
  /**
   * @remarks
   * The IP address of the server on which the baseline check was performed.
   * 
   * @example
   * 115.28.XX.XX
   */
  IP?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * worker-k8s-for-cs-cf5741fb95c3a45d0864f0e4544dc****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 115.28.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.31.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The failure cause for the check item.
   * 
   * @example
   * Detect timeout
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      IP: 'IP',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IP: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyExecDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the baseline check ends.
   * 
   * @example
   * 2021-12-05 00:12:46
   */
  endTime?: string;
  /**
   * @remarks
   * The number of check items that failed to pass the baseline check. This type of check item is considered risk items.
   * 
   * @example
   * 94
   */
  failCount?: number;
  /**
   * @remarks
   * The servers on which risk items were detected.
   */
  failedEcsList?: DescribeStrategyExecDetailResponseBodyFailedEcsList[];
  /**
   * @remarks
   * The number of tasks that are **running **based on the baseline check policy.
   * 
   * @example
   * 0
   */
  inProcessCount?: number;
  /**
   * @remarks
   * The execution progress of the baseline check policy.
   * 
   * @example
   * 100%
   */
  percent?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 01611D72-1E33-53F5-A9A5-C81B5561970F
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the baseline check. Valid values:
   * 
   * *   **Schedule**: automatic check that periodically runs
   * *   **Manual**: intermediate check that is manually performed
   * 
   * @example
   * Manual
   */
  source?: string;
  /**
   * @remarks
   * The time when the baseline check starts.
   * 
   * @example
   * 2021-12-05 00:12:16
   */
  startTime?: string;
  /**
   * @remarks
   * The number of check items that **passed** the baseline check.
   * 
   * @example
   * 81
   */
  successCount?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      failCount: 'FailCount',
      failedEcsList: 'FailedEcsList',
      inProcessCount: 'InProcessCount',
      percent: 'Percent',
      requestId: 'RequestId',
      source: 'Source',
      startTime: 'StartTime',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failCount: 'number',
      failedEcsList: { 'type': 'array', 'itemType': DescribeStrategyExecDetailResponseBodyFailedEcsList },
      inProcessCount: 'number',
      percent: 'string',
      requestId: 'string',
      source: 'string',
      startTime: 'string',
      successCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedEcsList)) {
      $dara.Model.validateArray(this.failedEcsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

