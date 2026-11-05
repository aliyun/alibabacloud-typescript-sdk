// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLakebaseMountParameterGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The parameter template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxx
   */
  parameterGroupId?: string;
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
      parameterGroupId: 'ParameterGroupId',
      polarFsInstanceId: 'PolarFsInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
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

