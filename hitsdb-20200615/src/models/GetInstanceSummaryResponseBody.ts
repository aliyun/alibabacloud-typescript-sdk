// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSummaryResponseBodyRegionalSummary extends $dara.Model {
  /**
   * @example
   * 1
   */
  lockingCount?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 5
   */
  runningCount?: number;
  /**
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      lockingCount: 'LockingCount',
      regionId: 'RegionId',
      runningCount: 'RunningCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockingCount: 'number',
      regionId: 'string',
      runningCount: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  lockingCount?: number;
  regionalSummary?: GetInstanceSummaryResponseBodyRegionalSummary[];
  /**
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  /**
   * @example
   * 9
   */
  runningCount?: number;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      lockingCount: 'LockingCount',
      regionalSummary: 'RegionalSummary',
      requestId: 'RequestId',
      runningCount: 'RunningCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockingCount: 'number',
      regionalSummary: { 'type': 'array', 'itemType': GetInstanceSummaryResponseBodyRegionalSummary },
      requestId: 'string',
      runningCount: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regionalSummary)) {
      $dara.Model.validateArray(this.regionalSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

