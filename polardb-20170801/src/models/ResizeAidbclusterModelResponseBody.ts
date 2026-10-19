// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeAIDBClusterModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current measured capacity of the instance. This parameter is returned only when DryRun is set to true.
   * 
   * @example
   * 8000
   */
  currentCapacity?: number;
  /**
   * @remarks
   * The ID of the PolarDB AI 3.0 logical instance.
   * 
   * @example
   * pm-2ze4x2mwo81knj08a
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the current request performed only a capacity dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The capacity that can be directly borrowed from the global pool without reshaping. This parameter is returned only when DryRun is set to true.
   * 
   * @example
   * 3000
   */
  poolHitCapacity?: number;
  /**
   * @remarks
   * The direct hit ratio of the global pool. Valid values: 0 to 1. This parameter is returned only when DryRun is set to true.
   * 
   * @example
   * 0.75
   */
  poolHitRatio?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3AA6E0E4-1234-5678-90AB-1234567890AB
   */
  requestId?: string;
  /**
   * @remarks
   * The positive difference between the target capacity and the current capacity. This parameter is returned only when DryRun is set to true.
   * 
   * @example
   * 4000
   */
  requiredDelta?: number;
  /**
   * @remarks
   * The target total capacity.
   * 
   * @example
   * 12000
   */
  targetCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      currentCapacity: 'CurrentCapacity',
      DBClusterId: 'DBClusterId',
      dryRun: 'DryRun',
      poolHitCapacity: 'PoolHitCapacity',
      poolHitRatio: 'PoolHitRatio',
      requestId: 'RequestId',
      requiredDelta: 'RequiredDelta',
      targetCapacity: 'TargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentCapacity: 'number',
      DBClusterId: 'string',
      dryRun: 'boolean',
      poolHitCapacity: 'number',
      poolHitRatio: 'number',
      requestId: 'string',
      requiredDelta: 'number',
      targetCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

