// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakebaseMountParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance edition. Valid values: basic (Basic Edition) and high_performance (High-performance Edition).
   * 
   * This parameter is required.
   * 
   * @example
   * basic
   */
  paramGroupCategory?: string;
  /**
   * @remarks
   * The parameter template description.
   * 
   * @example
   * Test template
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The parameter template name.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-test
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The JSON string of parameters and their values.
   * 
   * This parameter is required.
   * 
   * @example
   * {"key1":"value1"}
   */
  parameters?: string;
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
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameters: 'Parameters',
      polarFsInstanceId: 'PolarFsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroupCategory: 'string',
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameters: 'string',
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

