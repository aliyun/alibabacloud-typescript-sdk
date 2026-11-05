// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseMountParameterGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance category. Valid values:
   * - basic: Basic Edition.
   * - high_performance: High-performance Edition.
   * 
   * @example
   * basic
   */
  paramGroupCategory?: string;
  /**
   * @remarks
   * The PolarFS instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-xxx
   */
  polarFsInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroupCategory: 'ParamGroupCategory',
      polarFsInstanceId: 'PolarFsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroupCategory: 'string',
      polarFsInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

