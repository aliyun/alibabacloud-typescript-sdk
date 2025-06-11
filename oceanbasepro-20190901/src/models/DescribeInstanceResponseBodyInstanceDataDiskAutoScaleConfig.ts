// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyInstanceDataDiskAutoScaleConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic scaling of the data disk.
   * 
   * @example
   * true
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The maximum size of the disk, in GB.
   * 
   * @example
   * 80000
   */
  maxDiskSize?: number;
  /**
   * @remarks
   * The size of scaling step during a major compaction.
   * 
   * @example
   * 100
   */
  scaleStepInMerge?: number;
  /**
   * @remarks
   * The size of scaling step during daily use.
   * 
   * @example
   * 50
   */
  scaleStepInNormal?: number;
  /**
   * @remarks
   * The maximum usage of the data disk, in percentage, that triggers the scaling of the data disk for major compactions.
   * 
   * @example
   * 90
   */
  upperMergeThreshold?: number;
  /**
   * @remarks
   * The step size of the scale-out.
   * 
   * @example
   * 5
   */
  upperScaleStep?: string;
  /**
   * @remarks
   * The scale-out strategy. Valid values: RAW and PERCENTAGE.
   * 
   * @example
   * RAW
   */
  upperScaleStrategy?: string;
  /**
   * @remarks
   * The maximum usage of the data disk, in percentage, that triggers the scaling of the data disk for daily use.
   * 
   * @example
   * 80
   */
  upperThreshold?: number;
  /**
   * @remarks
   * The maximum space, in GB, to which the data disk can be scaled.
   * 
   * @example
   * 16
   */
  upperbound?: number;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      maxDiskSize: 'MaxDiskSize',
      scaleStepInMerge: 'ScaleStepInMerge',
      scaleStepInNormal: 'ScaleStepInNormal',
      upperMergeThreshold: 'UpperMergeThreshold',
      upperScaleStep: 'UpperScaleStep',
      upperScaleStrategy: 'UpperScaleStrategy',
      upperThreshold: 'UpperThreshold',
      upperbound: 'Upperbound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      maxDiskSize: 'number',
      scaleStepInMerge: 'number',
      scaleStepInNormal: 'number',
      upperMergeThreshold: 'number',
      upperScaleStep: 'string',
      upperScaleStrategy: 'string',
      upperThreshold: 'number',
      upperbound: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

