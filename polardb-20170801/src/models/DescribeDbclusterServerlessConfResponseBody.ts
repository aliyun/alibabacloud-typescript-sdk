// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterServerlessConfResponseBody extends $dara.Model {
  agileScaleMax?: string;
  /**
   * @remarks
   * Whether to enable idle shutdown. Values:
   * 
   * - **true**: Enable
   * 
   * - **false**: Disable (default)
   * 
   * @example
   * true
   */
  allowShutDown?: string;
  /**
   * @remarks
   * Serverless cluster ID.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Request ID.
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
   * Maximum scaling limit for a single node. Range: 1 PCU~32 PCU.
   * 
   * @example
   * 3
   */
  scaleMax?: string;
  /**
   * @remarks
   * Minimum scaling limit for a single node. Range: 1 PCU~31 PCU.
   * 
   * @example
   * 1
   */
  scaleMin?: string;
  /**
   * @remarks
   * Maximum scaling limit for the number of read-only nodes. Range: 0~15.
   * 
   * @example
   * 4
   */
  scaleRoNumMax?: string;
  /**
   * @remarks
   * Minimum scaling limit for the number of read-only nodes. Range: 0~15.
   * 
   * @example
   * 2
   */
  scaleRoNumMin?: string;
  /**
   * @remarks
   * Detection duration for idle shutdown. Range: 300~86,400. Unit: seconds. The detection duration must be a multiple of 300 seconds.
   * 
   * @example
   * 10
   */
  secondsUntilAutoPause?: string;
  /**
   * @remarks
   * CPU upscale threshold.
   * 
   * @example
   * 60
   */
  serverlessRuleCpuEnlargeThreshold?: string;
  /**
   * @remarks
   * CPU downscale threshold.
   * 
   * @example
   * 30
   */
  serverlessRuleCpuShrinkThreshold?: string;
  /**
   * @remarks
   * Elasticity sensitivity. Values:
   * 
   * - normal: Standard
   * 
   * - flexible: Sensitive
   * 
   * @example
   * normal
   */
  serverlessRuleMode?: string;
  /**
   * @remarks
   * Whether steady state is enabled. Values:
   * 
   * 1: Enabled
   * 
   * 0: Disabled
   * 
   * @example
   * 1
   */
  switchs?: string;
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

