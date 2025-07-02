// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingAnalyzeResult extends $dara.Model {
  /**
   * @remarks
   * 实际资源利用率。
   * 
   * @example
   * 0.12
   */
  actualUsage?: number;
  /**
   * @remarks
   * 理想资源用量。
   * 
   * @example
   * 0.12
   */
  idealUsage?: number;
  /**
   * @remarks
   * 固定资源释放核数（非master）core。
   * 
   * @example
   * 1
   */
  releaseCores?: number;
  /**
   * @remarks
   * 固定资源保留核数（非master）core。
   * 
   * @example
   * 1
   */
  reservedCores?: number;
  static names(): { [key: string]: string } {
    return {
      actualUsage: 'ActualUsage',
      idealUsage: 'IdealUsage',
      releaseCores: 'ReleaseCores',
      reservedCores: 'ReservedCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualUsage: 'number',
      idealUsage: 'number',
      releaseCores: 'number',
      reservedCores: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

