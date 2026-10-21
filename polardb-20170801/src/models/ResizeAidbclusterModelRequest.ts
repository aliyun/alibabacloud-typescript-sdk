// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeAIDBClusterModelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB AI 3.0 logical instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pm-2ze4x2mwo81knj08a
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to perform a read-only capacity dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID. Requests are routed based on the region to which the instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The target total capacity. The abstract capacity unit is 1000, which equals one L20N equivalent card. The value must be a positive integer.
   * 
   * This parameter is required.
   * 
   * @example
   * 12000
   */
  targetCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      targetCapacity: 'TargetCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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

