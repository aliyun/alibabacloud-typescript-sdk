// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterServerlessConfResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum capacity, in PCUs, for a cluster in agile mode. In agile mode, the cluster consists of only serverless nodes.
   * 
   * @example
   * 32
   */
  agileScaleMax?: string;
  /**
   * @remarks
   * Indicates whether the no-activity suspension feature is enabled. Valid values:
   * 
   * - **true**: Enabled
   * 
   * - **false**: Disabled (Default)
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * The ID of the serverless cluster.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E71541A-6007-4DCC-A38A-F872C31FEB45
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum number of read-only column store nodes. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleApRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only column store nodes. Valid values: 0 to 15.
   * 
   * @example
   * 1
   */
  scaleApRoNumMin?: string;
  /**
   * @remarks
   * The maximum compute capacity of a single node in PCUs. Valid values: 1 to 32.
   * 
   * @example
   * 3
   */
  scaleMax?: string;
  /**
   * @remarks
   * The minimum compute capacity of a single node in PolarDB Capacity Units (PCUs). Valid values: 1 to 31.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * The maximum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 4
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * The minimum number of read-only nodes for scaling. Valid values: 0 to 15.
   * 
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @remarks
   * The detection period for no-activity suspension, in seconds. The value must be an integer from 300 to 86,400 and must be a multiple of 300.
   * 
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * The CPU scale-up threshold.
   * 
   * @example
   * 60
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * The CPU scale-down threshold.
   * 
   * @example
   * 30
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * The elasticity sensitivity. Valid values:
   * 
   * - normal: Standard
   * 
   * - flexible: Flexible
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * Indicates whether the steady-state mode is enabled. Valid values:
   * 
   * 1: Enabled
   * 
   * 0: Disabled
   * 
   * @example
   * 1
   */
  switchs?: string;
  /**
   * @remarks
   * The maximum capacity, in PCUs, for a cluster in steady-state mode. Steady-state mode adds serverless capabilities to nodes that have fixed specifications.
   * 
   * @example
   * 16
   */
  traditionalScaleMaxThreshold?: string;
  static names(): { [key: string]: string } {
    return {
      agileScaleMax: 'AgileScaleMax',
      allowShutDown: 'AllowShutDown',
      DBClusterId: 'DBClusterId',
      requestId: 'RequestId',
      scaleApRoNumMax: 'ScaleApRoNumMax',
      scaleApRoNumMin: 'ScaleApRoNumMin',
      scaleMax: 'ScaleMax',
      scaleMin: 'ScaleMin',
      scaleRoNumMax: 'ScaleRoNumMax',
      scaleRoNumMin: 'ScaleRoNumMin',
      secondsUntilAutoPause: 'SecondsUntilAutoPause',
      serverlessRuleCpuEnlargeThreshold: 'ServerlessRuleCpuEnlargeThreshold',
      serverlessRuleCpuShrinkThreshold: 'ServerlessRuleCpuShrinkThreshold',
      serverlessRuleMode: 'ServerlessRuleMode',
      switchs: 'Switchs',
      traditionalScaleMaxThreshold: 'TraditionalScaleMaxThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agileScaleMax: 'string',
      allowShutDown: 'string',
      DBClusterId: 'string',
      requestId: 'string',
      scaleApRoNumMax: 'string',
      scaleApRoNumMin: 'string',
      scaleMax: 'string',
      scaleMin: 'string',
      scaleRoNumMax: 'string',
      scaleRoNumMin: 'string',
      secondsUntilAutoPause: 'string',
      serverlessRuleCpuEnlargeThreshold: 'string',
      serverlessRuleCpuShrinkThreshold: 'string',
      serverlessRuleMode: 'string',
      switchs: 'string',
      traditionalScaleMaxThreshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

