// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeMultiZoneClusterNodeCountRequest extends $dara.Model {
  /**
   * @example
   * vsw-hangxzhouxb*****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ld-f5d8d6s4s2a1****
   */
  clusterId?: string;
  /**
   * @example
   * 6
   */
  coreNodeCount?: number;
  /**
   * @example
   * 8
   */
  logNodeCount?: number;
  /**
   * @example
   * 6
   */
  primaryCoreNodeCount?: number;
  /**
   * @example
   * vsw-hangxzhouxe*****
   */
  primaryVSwitchId?: string;
  /**
   * @example
   * 6
   */
  standbyCoreNodeCount?: number;
  /**
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

