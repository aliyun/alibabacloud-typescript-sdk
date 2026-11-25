// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSummaryResponseBodyRegionalSummary extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are about to expire in {RegionId}.
   * 
   * @example
   * 1
   */
  lockingCount?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of running instances in {RegionId}.
   * 
   * @example
   * 5
   */
  runningCount?: number;
  /**
   * @remarks
   * The total number of running instances and instances that are about to expire in {RegionId}.
   * 
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
   * @remarks
   * The number of instances that are about to expire.
   * 
   * @example
   * 1
   */
  lockingCount?: number;
  /**
   * @remarks
   * The collection of region information.
   */
  regionalSummary?: GetInstanceSummaryResponseBodyRegionalSummary[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1556DCB0-043A-4444-8BD9-CF4A68E7EE64
   */
  requestId?: string;
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 9
   */
  runningCount?: number;
  /**
   * @remarks
   * The total number of running instances and instances that are about to expire.
   * 
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

