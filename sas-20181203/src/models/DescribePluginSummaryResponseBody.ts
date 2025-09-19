// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginSummaryResponseBodyDataFailedReasons extends $dara.Model {
  /**
   * @remarks
   * The error code for the installation failure.
   * 
   * @example
   * -1
   */
  code?: string;
  /**
   * @remarks
   * The number of hosts on which the installation failed for this reason.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The cause of the installation failure.
   * 
   * @example
   * Other
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
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

export class DescribePluginSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of hosts on which the plug-in failed to be installed.
   * 
   * @example
   * 3
   */
  failedCnt?: number;
  /**
   * @remarks
   * The causes of installation failures.
   */
  failedReasons?: DescribePluginSummaryResponseBodyDataFailedReasons[];
  /**
   * @remarks
   * The number of hosts on which the plug-in is offline.
   * 
   * @example
   * 2
   */
  offlineCnt?: number;
  /**
   * @remarks
   * The number of hosts on which the plug-in is online.
   * 
   * @example
   * 10
   */
  onlineCnt?: number;
  /**
   * @remarks
   * The number of hosts for which the plug-in is not enabled.
   * 
   * @example
   * 5
   */
  switchOffCnt?: number;
  /**
   * @remarks
   * The total number of hosts.
   * 
   * @example
   * 20
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      failedCnt: 'FailedCnt',
      failedReasons: 'FailedReasons',
      offlineCnt: 'OfflineCnt',
      onlineCnt: 'OnlineCnt',
      switchOffCnt: 'SwitchOffCnt',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCnt: 'number',
      failedReasons: { 'type': 'array', 'itemType': DescribePluginSummaryResponseBodyDataFailedReasons },
      offlineCnt: 'number',
      onlineCnt: 'number',
      switchOffCnt: 'number',
      totalCnt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failedReasons)) {
      $dara.Model.validateArray(this.failedReasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePluginSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the plug-in data.
   */
  data?: DescribePluginSummaryResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1383B0DB-D5D6-4B0C-9E6B-75939C8E****
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
      data: DescribePluginSummaryResponseBodyData,
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

