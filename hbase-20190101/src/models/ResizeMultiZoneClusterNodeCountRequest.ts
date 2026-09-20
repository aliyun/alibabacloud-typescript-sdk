// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeMultiZoneClusterNodeCountRequest extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID of the arbitration node.
   * 
   * @example
   * vsw-hangxzhouxb*****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the multi-zone cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-f5d8d6s4s2a1****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of core nodes. The minimum value is 4, and the increment must be a multiple of 2.
   * 
   * @example
   * 6
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * The number of log nodes. The minimum value is 4, and the value must be a multiple of 4.
   * 
   * @example
   * 8
   */
  logNodeCount?: number;
  /**
   * @remarks
   * The number of core nodes in the primary zone instance. The minimum value is 4, and the increment must be a multiple of 2.
   * 
   * @example
   * 6
   */
  primaryCoreNodeCount?: number;
  /**
   * @remarks
   * The vSwitch ID of the instance in the primary zone.
   * 
   * @example
   * vsw-hangxzhouxe*****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The number of core nodes in the secondary zone instance. The minimum value is 4, and the increment must be a multiple of 2.
   * 
   * @example
   * 6
   */
  standbyCoreNodeCount?: number;
  /**
   * @remarks
   * The vSwitch ID of the instance in the secondary zone.
   * 
   * @example
   * vsw-hangxzhouxf****
   */
  standbyVSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      clusterId: 'ClusterId',
      coreNodeCount: 'CoreNodeCount',
      logNodeCount: 'LogNodeCount',
      primaryCoreNodeCount: 'PrimaryCoreNodeCount',
      primaryVSwitchId: 'PrimaryVSwitchId',
      standbyCoreNodeCount: 'StandbyCoreNodeCount',
      standbyVSwitchId: 'StandbyVSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      clusterId: 'string',
      coreNodeCount: 'number',
      logNodeCount: 'number',
      primaryCoreNodeCount: 'number',
      primaryVSwitchId: 'string',
      standbyCoreNodeCount: 'number',
      standbyVSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

